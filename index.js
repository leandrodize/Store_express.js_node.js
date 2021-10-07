const express = require('express');
const app = express();
const port = 3000;

app.get('/',(request,response) =>{
  response.send('Send responde express.js');
})

app.get('/home',(request,response)=>{
  response.json({
    menu:"Inicio",
    contactenos:"Contacto"
  })
})

app.get('/products',(request,response)=>{
  response.json([
    {
      Tshirt:150,
      Pole:25,
      Sneakers:300
    },
    {
      Dress:450,
      Blouse: 100,
      Shoes:700,
    }
  ])
})

app.get('/products/:id',(request,response)=>{
  const {id} = request.params;
  response.json({
    id,
    Dress:450,
    Blouse: 100,
    Shoes:700,
  })
})
app.get('/home/:homeID/products/:productsID',(request,response)=>{
  const {homeID, productsID} = request.params;
  response.json({
    homeID,
    productsID,
  })
})

app.listen(port, ()=>{
  console.log('Port' + port);
});
