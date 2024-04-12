const Admin = require("../models/Admin");

const adminController = {
  index: async (req, res) => {
    const admins = await Admin.findAll();
    return res.json(admins);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const admin = await Admin.findByPk(id);
    return res.json(admin);
  },
  store: async (req, res) => {},
  
};
