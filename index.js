const express = require('express');
const routerAPI = require('./Routes');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/',(request,response)=>{
  response.json({
    products: "products",
    home:"home",
    costumers: "costumers"
  })
});

routerAPI(app);

app.listen(port, ()=>{
  console.log('Port' + port);
});

