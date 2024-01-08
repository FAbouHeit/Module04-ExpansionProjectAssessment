'use strict';
// import {Model} from "sequelize"
// const {
//   Model
// } = require('sequelize');
import {Model} from 'sequelize'
export default  (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  User.init({
    // Model attributes are defined here
    // - The schema should include fields for title, category, description, price and supplier.

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false  
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false  
    },

  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
  });
  return User;
};