const routerProducts = require('./routerProducts');
const routerHome = require('./routerHome');

function routerAPI(app){
  app.use('/products', routerProducts),
  app.use('/home', routerHome)
};

module.exports = routerAPI;

