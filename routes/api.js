const express = require('express')
const router = express.Router()

const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(
  process.env.MONGODB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  )
  .then(function(){
    console.log('Connected to DB...')
  })
  .catch(function(err){
    console.log(err)
  });

  const gourdSchema = new mongoose.Schema({
    id: Number,
    name: String,
    class: String,
    description: String,
    image: String
  })
  const Gourd = mongoose.model('Gourd', gourdSchema)

  
/*********************/
/* Define API routes */
/*********************/

// List entry route

router.get('/api/gourd', async (req, res) => {
    
    try{

      const plants = await Gourd.find()

     
      if(!plants){
        throw new Error()
      }
  
      res.send(plants)
  
    } catch(err){
  
    res.send({error: 'plant not found'})
    }
  
  })
  
  // Item route
  router.get('/api/gourd/:id', async(req, res) => {
    try{

      const plant = await Gourd.findOne({id: req.params.id})
    
      if(!plant){
        throw new Error()
      }
  
      res.send(plant)
  
    } catch(err){
  
    res.send({error: 'plant not found'})
    }
  })


  
  module.exports = router