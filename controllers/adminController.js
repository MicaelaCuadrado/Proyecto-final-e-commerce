const { Admin } = require("../models");

const adminController = {
  index: async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await Admin.findByPk(id);

      if (!admin) {
        return res
          .status(404)
          .json({ error: "No se encontró al admin con el ID proporcionado" });
      }
      return res.json(admin);
    } catch (error) {
      console.error("Error al buscar el admin con el ID proporcionado", error);
      return res
        .status(500)
        .json({
          error:
            "Se produjo un error al buscar el admin con el ID proporcionado.",
        });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await Admin.findByPk(id);

      if (!admin) {
        return res
          .status(404)
          .json({ error: "No se encontró al admin con el ID proporcionado" });
      }
      return res.json(admin);
    } catch (error) {
      console.error("Error al buscar el admin con el ID proporcionado", error);
      return res
        .status(500)
        .json({
          error:
            "Se produjo un error al buscar el admin con el ID proporcionado.",
        });
    }
  },
  store: async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await Admin.findByPk(id);

      // Verificar si se encontró al administrador
      if (!admin) {
        return res
          .status(404)
          .json({ error: "No se encontró al admin con el ID proporcionado." });
      }

      // Devolver el administrador en formato JSON
      return res.json(admin);
    } catch (error) {
      console.error("Error al buscar el administrador:", error);
      return res
        .status(500)
        .json({ error: "Se produjo un error al buscar el administrador." });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstname, lastname, email, password } = req.body;

      // Encuentra al admin por su id
      const admin = await Admin.findByPk(id);

      // Verifica si el admin existe
      if (!admin) {
        return res
          .status(404)
          .json({ error: "No se encontró al admin con el ID proporcionado." });
      }

      // Actualiza los campos si se proporcionaron en el body de la solicitud
      if (firstname) {
        admin.firstname = firstname;
      }
      if (lastname) {
        admin.lastname = lastname;
      }
      if (email) {
        admin.email = email;
      }
      if (password) {
        admin.password = password;
      }

      // Guarda los cambios en la base de datos
      await admin.save();

      return res.send("Usuario modificado con éxito!");
    } catch (error) {
      console.error("Error al modificar el usuario:", error);
      return res
        .status(500)
        .send("Se produjo un error al modificar el usuario.");
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await Admin.findByPk(id);
      if (!admin) {
        return res.status(404).json({ error: "Administrador no encontrado" });
      }
      await admin.destroy();
      return res.json({ message: "Administrador eliminado con éxito" });
    } catch (error) {
      console.error("Error al eliminar Administrador:", error);
      return res.status(500).json({ error: "Error al eliminar Administrador" });
    }
  },
};

module.exports = adminController;
