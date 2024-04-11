const express = require("express");
const router = express.Router();
const { Article } = require("../models");

router.get("/", async (req, res) => {
  const articles = await Article.findAll();
  return res.json(articles);
});

module.exports = router;
