const joi = require('joi');

//Validando Formato de los datos
const id = joi.string().uuid();
const name = joi.string().alphanum().min(3).max(15);
const price = joi.number().integer().min(10);
const image = joi.string().uri();

//Esquema de get products
const getProductsSchema = joi.object({
  id: id.required()
})

//Esquema de create products
const createProductsSchema = joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required()
})

//Esquema de update products
const updateProductsSchema = joi.object({
  name: name,
  price: price,
  image: image
});

module.exports = {
  getProductsSchema,
  createProductsSchema,
  updateProductsSchema
}
