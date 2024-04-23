const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { expressjwt: checkjwt } = require("express-jwt");

router.get(
  "/",
  checkjwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  adminController.index
);

router.get(
  "/:id",
  checkjwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  adminController.show
);

router.post(
  "/",
  checkjwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  adminController.store
);

router.patch(
  "/:id",
  checkjwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  adminController.update
);

router.delete(
  "/:id",
  checkjwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  adminController.destroy
);

module.exports = router;
