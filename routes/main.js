const express = require("express");
const router = express.Router();

const shopName = "Thirsty Student Shop";
const productCategories = ["Hot drinks", "Cold drinks", "Snacks"];

const products = [
  { id: "tea",    name: "Tea",    category: "Hot drinks",  price: 1.50 },
  { id: "coffee", name: "Coffee", category: "Hot drinks",  price: 2.00 },
  { id: "cola",   name: "Cola",   category: "Cold drinks", price: 1.20 },
  { id: "water",  name: "Water",  category: "Cold drinks", price: 1.00 },
  { id: "crisps", name: "Crisps", category: "Snacks",      price: 1.30 },
  { id: "cookie", name: "Cookie", category: "Snacks",      price: 1.20 },
];

// 5a pages
router.get("/",      (req, res) => res.render("index",  { shopName, productCategories }));
router.get("/about", (req, res) => res.render("about",  { shopName }));

// 5b pages
router.get("/menu", (req, res) => res.render("menu", { shopName, products }));
router.get("/product/:id", (req, res) => {
  const p = products.find(x => x.id === req.params.id);
  if (!p) return res.status(404).send("Product not found");
  res.render("product", { shopName, p });
});

// placeholder for 5c
router.get("/order", (req, res) => res.send("<p>Order form coming in 5c…</p>"));

module.exports = router;
