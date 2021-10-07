const routerProducts = require('./routerProducts');
const routerHome = require('./routerHome');
const routerCostumers = require('./routerCostumers');

function routerAPI(app){
  app.use('/products', routerProducts),
  app.use('/home', routerHome),
  app.use('/costumers' , routerCostumers)
};

module.exports = routerAPI;

