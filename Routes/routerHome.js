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

router.get('/:support', (request,response)=>{
  const listNumber = []
  const {support} = request.params;
  for (i =0; i<4; i++){
    listNumber.push({
      support,
      number: faker.phone.phoneNumber(),
      adress : faker.address.city(),
    })
  }
  response.json(listNumber)
});

router.get('/:beginning', (request, response) => {
  const {beginning} = request.params;
  response.json({
    beginning,
    option1 : faker.address.cardinalDirection(),
    option2 : faker.address.cardinalDirection(),
  })
});


module.exports = router;
