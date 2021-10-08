const express = require('express');
const faker = require('faker');
const router = express.Router();
const serviceProducts = require('../Services/servicesProducts');
const service = new serviceProducts();

//Use serviceProdcuts and methods
router.get('/',(request,response)=>{
  const products = service.find();
  response.json(products);
});

router.get('/:id', (request, response) =>{
  const {id} = request.params;
  const product = service.findOne(id);
  response.json(product);
})
//*************************************/

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

//Method POST
router.post('/', (request, response)=>{
  const body = request.body;
  response.json({
    message: "POST OK",
    data: body
  })
})

 //export module router /products
module.exports = router;


