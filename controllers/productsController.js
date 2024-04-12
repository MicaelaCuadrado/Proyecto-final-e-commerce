const { Products } = require("../models");

const productsController = {
  index: async (req, res) => {
    const products = await Products.findAll();
    return res.json(products);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const products = await Products.findByPk(id);
    return res.json(products);
  },
  store: async (req, res) => {
    const { name, description, photo, price, stock, category, featured } =
      req.body;
    await Products.create({
      name,
      description,
      photo,
      price,
      stock,
      category,
      featured,
    });
    return res.send("El producto fue creado con éxito!");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name, description, photo, price, stock, category, featured } =
      req.body;

    const products = await Products.findByPk(id);

    if (name) products.name = name;
    if (description) products.description = description;
    if (photo) products.photo = photo;
    if (price) products.price = price;
    if (stock) products.stock = stock;
    if (category) products.category = category;
    if (featured) products.featured = featured;

    await products.save();

    return res.send("Producto modificado con éxito!");
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const products = await Products.findByPk(id);
    if (!products) //La expresión if (!product) se traduce como "si product no existe" o "si product es igual a null o undefined". 
    {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    await product.destroy();
    return res.json({ message: "Producto eliminado con éxito" });
  },
  catch(error) {
    return res.status(500).json({ error: "Error al eliminar producto" });
  },
};

module.exports = productsController;
