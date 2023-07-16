'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    unit_price: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (product) =>{
        product.createdAt = new Date();
        product.updatedAt = new Date();
        return product;
      },
      beforeUpdate: (product) => {
        product.updatedAt = new Date();
        return product;
      }
    },
    sequelize,
    modelName: 'Product',
  });
  return Product;
};