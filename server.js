require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const port = process.env.APP_PORT;

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.static("public"));

app.listen(port, () =>
  console.log(`Servidor corriendo en http://${process.env.APP_DOMAIN}.\n`)
);
