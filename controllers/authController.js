const jwt = require("jsonwebtoken");
const { User } = require("../models");

const authController = {
  getToken: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password)
      return res.json({ message: "Credenciales invalidas" });

    const token = jwt.sign({ sub: user.id }, "UnStringMuySecreto");

    return res.json(accessToken);
  },
};
module.exports = authController;
