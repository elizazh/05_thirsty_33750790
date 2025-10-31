const express = require("express");
const router = express.Router();

// Lab 5a data (rendered into EJS)
const shopData = {
  shopName: "The Thirsty Student",
  productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"]
};

// pages
router.get("/", (req, res) => res.render("index.ejs", shopData));
router.get("/about", (req, res) => res.render("about.ejs", shopData));

module.exports = router;
