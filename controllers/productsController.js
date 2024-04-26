const { Products } = require("../models");

const productsController = {
  index: async (req, res) => {
    try {
      const products = await Products.findAll();
      return res.json(products);
    } catch (error) {
      console.error("Error", error);
      return res
        .status(500)
        .send("Se produjo un error al buscar los productos.");
    }
  },

  show: async (req, res) => {
    try {
      const { id } = req.params;
      const products = await Products.findByPk(id);
      return res.json(products);
    } catch (error) {
      console.error("Error", error);
      return res
        .status(500)
        .send(
          "Se produjo un error al buscar el producto con el ID proporcionado."
        );
    }
  },
  store: async (req, res) => {
    try {
      const { name, description, photo, price, stock, categoryId, featured } =
        req.body;
      await Products.create({
        name,
        description,
        photo,
        price,
        stock,
        categoryId,
        featured,
      });
      return res.send("El producto fue creado con éxito!");
    } catch (error) {
      console.error("Error", error);
      return res.status(500).send("Se produjo un error al crear el producto.");
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, photo, price, stock, category, featured } =
        req.body;

      const products = await Products.findByPk(id);
      if (!products) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      if (name) products.name = name;
      if (description) products.description = description;
      if (photo) products.photo = photo;
      if (price) products.price = price;
      if (stock) products.stock = stock;
      if (category) products.category = category;
      if (featured) products.featured = featured;

      await products.save();

      return res.send("Producto modificado con éxito!");
    } catch (error) {
      console.error("Error", error);
      return res
        .status(500)
        .send("Se produjo un error al modificar el producto.");
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const products = await Products.findByPk(id);
      if (!products) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      await products.destroy();
      return res.send("Producto eliminado con éxito");
    } catch (error) {
      console.error("Error", error);
      return res
        .status(500)
        .send("Se produjo un error al eliminar el producto.");
    }
  },
};
module.exports = productsController;
