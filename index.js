const express = require('express');
const app = express();
const port = 3000,

app.get ('/',(request,response) =>{
  response.send('Send responde express.js')
})

app.listen(port, ()=>{
  console.log('Port' + port);
})
