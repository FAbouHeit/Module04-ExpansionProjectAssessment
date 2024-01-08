'use strict';
// import {Model} from "sequelize"
// const {
//   Model
// } = require('sequelize');
import {Model} from 'sequelize'
export default  (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  Product.init({
    // Model attributes are defined here
    // - The schema should include fields for title, category, description, price and supplier.

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false  
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false  
    },
    supplier: {
        type: DataTypes.STRING,
        allowNull: false  

    }

  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Product' // We need to choose the model name
  });
  return Product;
};