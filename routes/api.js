const express = require('express')
const router = express.Router()

const gourd = require('../models/seeds/items')

/*********************/
/* Define API routes */
/*********************/

// List entry route
router.get('/gourd', (req, res) => {
  
    if (typeof gourd !== 'undefined' && Array.isArray(gourd)) {
  
      res.send(gourd)
      
    } else {
  
      res.status(404)
      res.send({error: 'File Not Found'})
      
    }
  
  })
  
  // Item route
  router.get('/gourd/:id', (req, res) => {
    let plant = null
  
    if (typeof gourd !== 'undefined' && Array.isArray(gourd)) {
      plant = gourd.find(item => req.params.id === item.id) // Use Array.find() here
    } else {
      plant = null;
    }
    
    if (typeof plant === 'object' && character !== null) {
      res.send(plant)
    } else {
      res.status(404)
      res.send({error: 'File Not Found'})
    }
  })
  
  module.exports = router