require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User, Admin } = require("../models");
const bcrypt = require("bcryptjs");

const authController = {
  getToken: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    const admin = await Admin.findOne({ where: { email } });

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
