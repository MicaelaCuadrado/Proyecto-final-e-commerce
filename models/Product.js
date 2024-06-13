const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        price: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        stock: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        featured: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        photo: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "Product",
      }
    );
    return Product;
  }
}

module.exports = Product;
