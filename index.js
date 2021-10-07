const express = require('express');
const app = express();
const port = 3000;

app.get('/',(request,response) =>{
  response.send('Send responde express.js');
})

app.get('/home',(request,response)=>{
  response.json({
    "menu":"Inicio",
    "contactenos":"Contacto"
  })
})

app.get('/products',(request,response)=>{
  response.json({
    "Polera":150,
    "Polo":25,
    "Zapatillas":300
  })
})

app.listen(port, ()=>{
  console.log('Port' + port);
});
