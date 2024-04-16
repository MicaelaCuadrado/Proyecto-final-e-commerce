store: async (req, res) => {
  try {
    const order = req.body;

    //clausulas de guarda

    if (!order.address) return res.json({ message: "Ups! Algo salió mal." });
    if (!order.userId) return res.json({ message: "Ups! Algo salió mal." });
    // recorremos los productos que vienen en la orden via req.body y cortamos la funcion si el stock es insuficiente, y agregamos losmprecios sacamos de la db. (data base)
    for (const product of order.products) {
      // TODO : obtener userId de forma segura
      const productInDb = await Product.findByPk(product.id);
      if (productInDb.stock < product.qty) {
        return res.json({
          message: "Unsuficient stock.",
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
    return res.json({ message: "Orden recibida." });
  } catch (err) {
    console.error(err);
    return res.json({ message: "Ups! Algo salió mal." });
  }
};
