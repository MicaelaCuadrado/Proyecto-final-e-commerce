const jwt = require("jsonwebtoken");
const { User } = require("../models");
require("dotenv").config();
const bcrypt = require("bcryptjs");

const authController = {
  getToken: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch)
      return res.json({ message: "Credenciales invalidas" });

    const accessToken = jwt.sign({ sub: user.id }, process.env.SECRET);

    return res.json(accessToken);
  },
};
module.exports = authController;
