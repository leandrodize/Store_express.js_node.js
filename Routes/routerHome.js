const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (request, response)=> {
  response.json({
    Beginning : 'Inicio',
    Privacy: "Politic privacy",
    Support: "Support"
  })
})
router.get ('/privacy', (request,response)=> {
  response.send( 'Read Privacy Politic')
})

router.get('/beginning', (request, response) => {
  response.json({
    option1 : faker.address.cardinalDirection(),
    option2 : faker.address.cardinalDirection()
  })
})

router.get('/support', (request,response)=>{
  const listNumber = []
  for (i =0; i<4; i++){
    listNumber.push({
      number: faker.phone.phoneNumber(),
      adress : faker.address.city(),
    })
  }
  response.json(listNumber)
})


module.exports = router;
