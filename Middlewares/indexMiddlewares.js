function logErrors (error, request, response, next){
  console.log(error);
  next(error);
}

function errorHandler (error , request, response, next){
  response.status(500).json({ //500 -> internal server error
    message: error.message,
    stack: error.stack
  })
};

//Middleware detect error BOOM
function boomError (error, request, response, next){
  if(error.isBoom){
    const {output} = error;
    response.status(output.statusCode).json(output.playload);
  }else{
    next(error);
  }
};

module.exports = {
  logErrors,
  errorHandler,
  boomError
}
