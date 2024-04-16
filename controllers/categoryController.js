const { Category } = require("../models");

const categoryController = {
  index: async (req, res) => {
    try {
      const categories = await Category.findAll();
      return res.json(categories);
    } catch (error) {
      console.error("Error al buscar las categorías:", error);
      return res.status(500).json({ error: "Error al buscar las categorías" });
    }
  },

  show: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);
      if (!category) {
        return res.status(404).json({
          error: "No se encontró la categoría con el ID proporcionado",
        });
      }
      return res.json(category);
    } catch (error) {
      console.error("Error al buscar la categoría:", error);
      return res.status(500).json({ error: "Error al buscar la categoría" });
    }
  },

  store: async (req, res) => {
    try {
      const { name, description } = req.body;
      await Category.create({ name, description });
      return res.send("La categoría fue creada con éxito!");
    } catch (error) {
      console.error("Error al crear la categoría:", error);
      return res.status(500).json({ error: "Error al crear la categoría" });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description } = req.body;

      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(404).json({
          error: "No se encontró la categoría con el ID proporcionado",
        });
      }

      if (name) category.name = name;
      if (description) category.description = description;

      await category.save();

      return res.send("Categoría modificada con éxito!");
    } catch (error) {
      console.error("Error al modificar la categoría:", error);
      return res.status(500).json({ error: "Error al modificar la categoría" });
    }
  },

  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);
      if (!category) {
        return res.status(404).json({ error: "Categoría no encontrada" });
      }
      await category.destroy();
      return res.json({ message: "Categoría eliminada con éxito" });
    } catch (error) {
      console.error("Error al eliminar la categoría:", error);
      return res.status(500).json({ error: "Error al eliminar la categoría" });
    }
  },
};

module.exports = categoryController;
