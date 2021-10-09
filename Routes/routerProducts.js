const express = require('express');
const faker = require('faker');
const router = express.Router();
const serviceProducts = require('../Services/servicesProducts');
const service = new serviceProducts();
const validatorHandler = require('../Middlewares/validator.handler');
const {getProductsSchema, createProductsSchema, updateProductsSchema} = require('../schemas/schemaProducts');

//****Use serviceProdcuts and methods*****//
router.get('/',async (request,response)=>{
  const products = await service.findAll();
  response.json(products);
});

router.get('/:id', validatorHandler(getProductsSchema, 'params'),async (request, response) =>{
  const {id} = request.params;
  const product = await service.findOne(id);
  response.json(product);
})

router.post('/', validatorHandler(createProductsSchema, 'body'), async (request, response) => {
  const body = request.body;
  const newProduct = await service.create(body);
  response.status(201).json(newProduct);
})

router.patch('/:id',validatorHandler(updateProductsSchema, 'params'),validatorHandler(updateProductsSchema, 'body'), async (request, response)=>{
  const {id} = request.params;
  const body = request.body;
  const updateProduct = await service.update(id, body);
  response.status(201).json(updateProduct);
})

router.delete('/:id', async (request, response) =>{
 const {id}  = request.params;
 const deleteProduct = await service.delete(id);
 response.status(201).json(deleteProduct);
})
//*********************************************//

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


