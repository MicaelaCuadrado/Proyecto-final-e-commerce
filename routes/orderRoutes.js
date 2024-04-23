const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { expressjwt: checkjwt } = require("express-jwt");

router.get(
  "/",
  checkjwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  orderController.index
);
router.get(
  "/:id",
  checkjwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  orderController.show
);
router.post(
  "/",
  checkjwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  orderController.store
);
router.patch(
  "/:id",
  checkjwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  orderController.update
);
router.delete(
  "/:id",
  checkjwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  orderController.destroy
);

module.exports = router;
