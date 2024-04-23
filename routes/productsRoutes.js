const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const { expressjwt: checkjwt } = require("express-jwt");

router.get("/", productsController.index);

router.get("/:id", productsController.show);

router.post(
  "/",
  checkjwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  productsController.store
);

router.patch(
  "/:id",
  checkjwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  productsController.update
);

router.delete(
  "/:id",
  checkjwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  productsController.destroy
);

module.exports = router;
