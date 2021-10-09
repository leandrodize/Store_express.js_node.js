const express = require('express');
const routerAPI = require('./Routes');
const app = express();
const cors = require('cors');
const port = 3000;
const {logErrors, errorHandler,boomError } = require('./Middlewares/indexMiddlewares');

app.use(express.json());
//Permitir acceso solo a ...
const whiteList = [
  'http://localhost:8080',
  'https://myapp.co'
];
const options = {
  origin: (origin, callback) => {
    if(whiteList.includes(origin) || !origin){
      callback(null, true);
    }else{
      callback(new Error ('ERROR, NOT PERMITION'))
    }
  }
};
app,use(cors());

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

