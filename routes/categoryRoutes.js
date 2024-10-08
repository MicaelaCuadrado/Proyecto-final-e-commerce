const express = require("express");
const router = express.Router();
const { expressjwt: checkjwt } = require("express-jwt");
const categoryController = require("../controllers/categoryController");
require("dotenv").config()

router.get("/", categoryController.index);

router.get("/:id", categoryController.show);

router.post(
  "/",
  checkjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  categoryController.store
);

router.patch(
  "/:id",
  checkjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  categoryController.update
);

router.delete(
  "/:id",
  checkjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  categoryController.destroy
);

module.exports = router;
