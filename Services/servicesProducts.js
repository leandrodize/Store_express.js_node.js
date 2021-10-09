const faker = require('faker');
const boom = require('@hapi/boom');

class serviceProducts {
  constructor(){
    this.products = [];
    this.generate();
    this.findAll();
  };

  async generate(){
    const limitProducts = 3;
    for (let i = 0; i<limitProducts; i++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image : faker.image.imageUrl(),
      });
    }
  };

  async create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  };

  async findAll(){
    return this.products;
  };

  async findOne(id){
    return this.products.find(item => item.id === id);
  };

  async update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1){
      //throw new Error ('Product Not Found');
      throw boom.notFound('product not found'); //boom.notfound => error 404
    }
    const product = this.products[index];
    this.products[index] ={
      ...product,
      ...changes
    }
    return this.products[index];
  };

  async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1){
      //throw new Error ('Product Not Found');
      throw boom.notFound('Product Not Found') //boom.notfound => error 404
    }
    this.products.splice(index, 1);
    return{
      id,
      message: 'Delete Product OK'
    }
  }
};

module.exports = serviceProducts;
