const express = require('express');
const routerAPI = require('./Routes');
const app = express();
const port = 3000;

app.get('/',(request,response)=>{
  response.json({
    products: "products",
    home:"home",
  })
});

routerAPI(app);

app.listen(port, ()=>{
  console.log('Port' + port);
});

