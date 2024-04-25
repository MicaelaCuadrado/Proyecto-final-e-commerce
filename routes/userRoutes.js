const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { expressjwt: checkjwt } = require("express-jwt");
require("dotenv").config();

router.get(
  "/",
  checkjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  userController.index
);
router.get(
  "/:id",
  checkjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  userController.show
);
router.post("/", userController.store);
router.patch(
  "/:id",
  checkjwt({secret: process.env.SECRET, algorithms: ["HS256"] }),
  userController.update
);
router.delete(
  "/:id",
  checkjwt({secret: process.env.SECRET, algorithms: ["HS256"] }),
  userController.destroy
);

module.exports = router;
