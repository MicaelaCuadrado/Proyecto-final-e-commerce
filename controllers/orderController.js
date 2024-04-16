const { Order, User } = require("../models");
const { destroy } = require("../models/Admin");
const ordersController = {
  index: async (req, res) => {
    try {
      const orders = await Order.findAll({ include: User });
      return res.status(200).json(orders);
    } catch (error) {
      console.error(err);
      return res.status(500).json({ message: "Oops, something went wrong" });
    }
  },

  show: async (req, res) => {
    const { id } = req.params;
    try {
      const order = await Order.findByPk(id);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      return res.json;
    } catch (error) {
      return res.status(500).json({ error: "Error getting order" });
    }
  },
  store: async (req, res) => {
    const order = req.body;

    for (const product of order.products) {
      // TODO : obtener userId de forma segura
      const productInDb = await Product.findByPk(product.id);
      if (productInDb.stock < product.qty) {
        return res.json({
          message: "Insiuficiente stock",
          product: product.id,
          stock: productInDb.stock,
        });
      }
      product.price = productInDb.price;
    }
    order.status = "pending";

    // modificamos el stock

    for (const product of order.products) {
      const productInDb = await Product.findByPk(product.id);
      productInDb.stock = productInDb.stock - product.qty;
      await productInDb.save();
    }

    await Order.create(order);
    return res.json({ message: "Orden recibida" });
  },
};

update: async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  try {
    const order = await Order.findByPk(id);
    if (!orden) {
      return res.status(404).json({ error: "Orden no encontrada" });
    }
    await order.save();
    return res.send("Orden modificada con exito");
  } catch (error) {
    return res.status(500).json({ error: "Error en modificar orden" });
  }
};
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
    return res.status(500).json({ error: "Error eliminando la órden" });
  }
};

module.exports = ordersController;
