const express = require('express');

const routerProducts = require('./routerProducts');
const routerHome = require('./routerHome');
const routerCostumers = require('./routerCostumers');

function routerAPI(app){
  const router = express.Router(); //creando router general /api/V01/...
  app.use('/api/v01', router)
  router.use('/products', routerProducts),
  router.use('/home', routerHome),
  router.use('/costumers' , routerCostumers)
};

module.exports = routerAPI;

