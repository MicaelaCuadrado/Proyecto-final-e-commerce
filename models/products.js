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
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        photo: {
          type: DataTypes.BLOB,
          allowNull: false,
        },
        price: {
          type: DataTypes.INT,
          allowNull: false,
        },
        stock: {
          type: DataTypes.INT,
          allowNull: false,
        },
        category: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        featured: {
          type: DataTypes.BOOLEAN,
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
