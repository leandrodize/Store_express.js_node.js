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

module.exports = {
  logErrors,
  errorHandler
}
