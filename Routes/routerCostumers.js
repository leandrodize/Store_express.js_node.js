const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (request, response) => {
  response.json({
    newCostumers:4500,
    oldCostumers:8900
  })
})

router.get('/news', (request, response) =>{
  const newcostumers = [];
  for (i=0; i<4500; i++){
    newcostumers.push({
      costumer: faker.name.firstName(),
      state: faker.address.state()
    })
  }
  response.json(newcostumers);
})

//Method POST /news
router.post('/news', (request, response) =>{
  const body = request.body;
  response.json({
    message: "Post New Costumer OK",
    data: body
  })
})

router.get('/news/:boys', (request, response) =>{
  const {boys}  = request.params;
  const boysNewCostumer = [];
  for (i=0; i<2000; i++){
    boysNewCostumer.push({
      name: faker.name.firstName(),
      phone: faker.phone.phoneNumber()
    })
  }
  response.json(boysNewCostumer);
})

router.get('/news/:girls', (request, response) =>{
  const {girls} = request.params;
  const girlsNewCostumers = [];
  for(i=0; i<2500; i++){
    girlsNewCostumers.push({
      name: faker.name.firstName(),
      phone: faker.phone.phoneNumber()
    })
  }
  response.json(girlsNewCostumers)
})
//Method PATCH /news/:girls/:id
router.patch('/news/:girls/:id', (request, response) =>{
  const {id} = request.params;
  const body = request.body;
  response.json({
    message: "Update OK",
    data: body,
    id,
  })
})
//Method DELETE /news/:girls/:id
router.delete('/news/:girls/:id', (request, response) =>{
  const {id} = request.params;
  response.json({
    message: "Delete OK",
    id
  })
})

router.get('/old' ,(request, response) =>{
  const oldCostumers = [];
  for (i=0 ; i<8900; i++){
    oldCostumers.push({
    costumer: faker.name.firstName(),
    state: faker.address.state()
    })
  }
  response.json(oldCostumers);
})
//Method POST /old
router.post('/old', (request, response)=>{
  const body = request.body;
  response.json({
    message: "Post Old Costumer OK",
    data: body
  })
})

router.get ('old/:oldboys' , (request, response) =>{
  const {oldboys} = request.params;
  const boysOldCostumers = [];
  for(i=0; i<3400 ; i++){
    boysOldCostumers.push({
      name: faker.name.firstName(),
      phone: faker.phone.phoneNumber()
    })
  }
  response.json(boysOldCostumers);
})

router.get ('/old/:oldgirls', (request, response)=>{
  const {oldgirls} = request.params;
  const girlsOldCostumers = [];
  for (i=0; i<5500; i++){
    girlsOldCostumers.push({
      name: faker.name.firstName(),
      phone: faker.phone.phoneNumber()
    })
  }
  response.json(girlsOldCostumers);
})

module.exports = router;
