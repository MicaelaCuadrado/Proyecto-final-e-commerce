const { User } = require("../models");

const userController = {
  index: async (req, res) => {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      console.error("Error", error);
      return res.status(500).send("Error interno del servidor");
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.json(user);
    } catch (error) {
      console.error("Error", error);
      return res.status(500).send("Error interno del servidor");
    }
  },
  store: async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req.body;
      await User.create({ firstname, lastname, email, password });
      return res.send("El usuario fue creado con éxito!");
    } catch (error) {
      console.error("Error", error);
      return res.status(500).send("Error interno del servidor");
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstname, lastname, email, password } = req.body;

      const user = await User.findByPk(id);

      if (firstname) user.firstname = firstname;
      if (lastname) user.lastname = lastname;
      if (email) user.email = email;
      if (password) user.password = password;

      await user.save();

      return res.send("Usuario modificado con éxito!");
    } catch (error) {
      console.error("Error", error);
      return res.status(500).send("Error interno del servidor");
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).send("Usuario no encontrado");
      }
      await user.destroy();
      return res.send("Usuario eliminado con éxito!");
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
      return res.status(500).json({ error: "Error al eliminar el usuario" });
    }
  },
};

module.exports = userController;
