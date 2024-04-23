const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { expressjwt: checkjwt } = require("express-jwt");

router.get("/", userController.index);
router.get("/:id", userController.show);
router.post("/", userController.store);
router.patch("/:id", userController.update);
router.delete(
  "/:id",
  checkjwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  userController.destroy
);

module.exports = router;