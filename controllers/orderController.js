const { Order, User, Product } = require("../models");

const ordersController = {
  index: async (req, res) => {
    try {
      const orders = await Order.findAll({ include: User });
      return res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error al obtener las órdenes" });
    }
  },

  show: async (req, res) => {
    const { id } = req.params;
    try {
      const order = await Order.findByPk(id);
      if (!order) {
        return res.status(404).json({ error: "Orden no encontrada" });
      }
      return res.json(order);
    } catch (error) {
      return res.status(500).json({ error: "Error al obtener la orden" });
    }
  },

  store: async (req, res) => {
    const order = req.body;

    for (const product of order.products) {
      const productInDb = await Product.findByPk(product.id);
      if (productInDb.stock < product.qty) {
        return res.json({
          message: "Insuficiente stock",
          product: product.id,
          stock: productInDb.stock,
        });
      }
      product.price = productInDb.price;
    }
    order.status = "pending";

    for (const product of order.products) {
      const productInDb = await Product.findByPk(product.id);
      productInDb.stock -= product.qty;
      await productInDb.save();
    }

    await Order.create(order);
    return res.json({ message: "Orden recibida" });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const orderUpdates = req.body;
    try {
      const order = await Order.findByPk(id);
      if (!order) {
        return res.status(404).json({ error: "Orden no encontrada" });
      }
      await order.update(orderUpdates);
      return res.send("Orden modificada con éxito");
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error al modificar la orden" });
    }
  },

  destroy: async (req, res) => {
    const { id } = req.params;
    try {
      const order = await Order.findByPk(id);
      if (!order) {
        return res.status(404).json({ error: "Orden no encontrada" });
      }
      await order.destroy();
      return res.json({ message: "Orden eliminada con éxito" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error eliminando la orden" });
    }
  }
};

module.exports = ordersController;
