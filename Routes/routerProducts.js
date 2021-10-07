const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/',(request,response)=>{
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

router.get('/categorys', (request,response) =>{
  response.json({
    boys : 500,
    girls: 1500,
  })
})

router.get('/:boys',(request,response)=>{
  const productsBoys = [];
  const {boys} = request.params;
  for (i=0; i<500; i++){
    productsBoys.push({
      name : faker.commerce.productName()
    })
  }
  response.json(productsBoys)
})

router.get('/:girls',(request,response)=>{
  const productsGirls = [];
  const {girls}  = request.params;
  for (i=0; i<1500; i++){
    productsGirls.push({
      name : faker.commerce.productName()
    })
  }
  response.json(productsGirls)
})

 //export module router /products
module.exports = router;


