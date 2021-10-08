const faker = require('faker');

class serviceProducts {
  constructor(){
    this.products = [];
    this.generate();
    this.find();
  };

  generate(){
    const limitProducts = 3;
    for (let i = 0; i<limitProducts; i++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image : faker.image.imageUrl()
      });
    }
  };

  find(){
    return this.products;
  };

  findOne(id){
    return this.products.find(item => item.id === id);
  };
};

module.exports = serviceProducts;
