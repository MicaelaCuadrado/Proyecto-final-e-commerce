const express = require("express");
const router = express.Router();
const adminRoutes = require("./adminRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const orderRoutes = require("./orderRoutes");
const categoryRoutes = require("./categoryRoutes");

router.use(express.json());

router.use("/admins", adminRoutes);
router.use("/tokens", authRoutes);
router.use("/user", userRoutes);
router.use("/products", productRoutes)

module.exports = router;
