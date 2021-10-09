const express = require('express');
const routerAPI = require('./Routes');
const app = express();
const port = 3000;
const {logErrors, errorHandler,boomError } = require('./Middlewares/indexMiddlewares');

app.use(express.json());

app.get('/',(request,response)=>{
  response.json({
    products: "products",
    home:"home",
    costumers: "costumers"
  })
});

routerAPI(app);

//Middlewares:
app.use(logErrors);
app.use(boomError);
app.use(errorHandler);

app.listen(port, ()=>{
  console.log('Port' + port);
});

