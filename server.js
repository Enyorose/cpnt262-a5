/******************/
/* Import Modules */
/******************/
const express = require('express')
const app = express()

const api = require('./routes/api.js')
app.use('/', api)

/****************************/
/* Handle 404, start server */
/****************************/

// Handle 404 errors with middleware
app.use((req, res) => {

    // If path starts with `/api`, send JSON 404
    if (req.url.startsWith('/api')) {
  
      res.status(404)
      res.send({error: 'File Not Found'})
  
    } else {
    
      // else send HTML 404
      res.status(404)
      res.send('<h1>404: File Not Found</h1>')
  
    }
  });
  
  // Start server
  const PORT = process.env.PORT || 3000;
  
  app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
  });