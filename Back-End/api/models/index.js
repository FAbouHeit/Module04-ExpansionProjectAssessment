import { Sequelize } from "sequelize";
import Product from './product.js';
import User from './user.js';

const sequelize = new Sequelize(
    "assessmentdb","fuadabouheit","12345678",
    {
        host: "db4free.net",
        dialect: 'mysql'
    }
);


const ProductModel = Product(sequelize,Sequelize);
const UserModel = User(sequelize,Sequelize);


const db = {
  sequelize,
  Sequelize,
  ProductModel,
  UserModel,
};



Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }

});
export default db;

  