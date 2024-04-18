const express = require("express");
const router = express.Router();
const adminRoutes = require("./adminRoutes");
const authRoutes=require("./authRoutes");
const userRoutes=require("./userRoutes")



router.use("/admins", adminRoutes);
router.use("/tokens", authRoutes);
router.use("/user", userRoutes);

module.exports = router;
