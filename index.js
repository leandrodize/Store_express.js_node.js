const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;
//METODO GET
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
    const products = [];
    const {limitProducts} = request.query;
    for (i=0; i<limitProducts; i++){
      products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image : faker.image.imageUrl(),
      })
    }
    response.json(products)
})
//METODO GET - PARAMS

app.get('/products/sales', (request,response) =>{
  response.send('Sales Proudcts')
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
//METODO GET - QUERY
app.get('/costumers', (request,response)=>{
  const{limit, offset} = request.query;
  if(limit && offset){
    response.json({
      limit,
      offset
    })
  }else{
    response.send('No exist limit and offset');
  }
})


app.listen(port, ()=>{
  console.log('Port' + port);
});
