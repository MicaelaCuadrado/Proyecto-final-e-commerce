const jwt = require("jsonwebtoken");
const { User, Admin } = require("../models");
require("dotenv").config();
const bcrypt = require("bcryptjs");

const authController = {
  getToken: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    const admin = await Admin.findOne({ where: { email } });
    console.log(user.password);

    if (!(admin && (await bcrypt.compare(password, admin.password)))) {
      if (!(user && (await bcrypt.compare(password, user.password)))) {
        return res.json({ message: "Credenciales invalidas" });
      }
    }
    if (admin) {
      const accessToken = jwt.sign(
        { sub: admin.id, role: "admin" },
        process.env.SECRET
      );

      return res.json(accessToken);
    } else if (user) {
      const accessToken = jwt.sign(
        { sub: user.id, role: "user" },
        process.env.SECRET
      );

      return res.json(accessToken);
    }
  },
};
module.exports = authController;
