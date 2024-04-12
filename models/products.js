const { Model, DataTypes } = require("sequelize");

class Products extends Model {
  static initModel(sequelize) {
    Products.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        author: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "products",
      }
    );
    return Products;
  }
}

module.exports = Products;
