const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        items: {
          type: DataTypes.JSON,
          allowNull: false,
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
          values: ["pending", ]
        },
      },
      {
        sequelize,
        modelName: "order",
      }
    );
    return Order;
  }
}

module.exports = Order;
