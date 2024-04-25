const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const { expressjwt: checkjwt } = require("express-jwt");
require("dotenv").config();

router.get("/", productsController.index);

router.get("/:id", productsController.show);

router.post(
  "/",
  checkjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  productsController.store
);

router.patch(
  "/:id",
  checkjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  productsController.update
);

router.delete(
  "/:id",
  checkjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  productsController.destroy
);

module.exports = router;
