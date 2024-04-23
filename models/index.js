const { Sequelize } = require("sequelize");

const Admin = require("./Admin");
const Products = require("./products");
const User = require("./User");
const Category = require("./Category");
const Order = require("./Order");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  }
);

Admin.initModel(sequelize);
Products.initModel(sequelize);
User.initModel(sequelize);
Category.initModel(sequelize);
Order.initModel(sequelize);

User.hasMany(Order);
Order.belongsTo(User);
Category.hasMany(Products);
Products.belongsTo(Category);


module.exports = {
  sequelize,
  Admin,
  Products,
  User,
  Category,
  Order,
};
