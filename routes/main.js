const express = require('express');
const router = express.Router();

// ---- data used by the views ----
const productCategories = ['Hot drinks', 'Cold drinks', 'Snacks'];

const products = [
  { id: 'tea',    name: 'Tea',    price: 1.50, category: 'Hot drinks' },
  { id: 'coffee', name: 'Coffee', price: 2.00, category: 'Hot drinks' },
  { id: 'cola',   name: 'Cola',   price: 1.20, category: 'Cold drinks' },
  { id: 'water',  name: 'Water',  price: 1.00, category: 'Cold drinks' },
  { id: 'crisps', name: 'Crisps', price: 1.30, category: 'Snacks' },
  { id: 'cookie', name: 'Cookie', price: 1.20, category: 'Snacks' },
];

// ---- pages ----
router.get('/',        (req,res) => res.render('index',  { productCategories }));
router.get('/about',   (req,res) => res.render('about'));
router.get('/menu',    (req,res) => res.render('menu',   { products }));
router.get('/product/:id', (req,res) => {
  const p = products.find(x => x.id === req.params.id);
  if (!p) return res.status(404).send('Product not found');
  res.render('product', { p });
});

// search (pass categories so the <select> renders)
router.get('/search', (req,res) =>
  res.render('search', { productCategories })
);

// brief wants a simple result page text — keep it as send()
router.get('/search_result', (req,res) => {
  const { search_text = '', category = '' } = req.query;
  res.send(`You searched for ${search_text} in ${category}`);
});

// register
router.get('/register', (req,res) => res.render('register'));
router.post('/registered', (req,res) => {
  const { first = '', last = '', email = '' } = req.body;
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!first || !last || !ok) return res.status(400).send('Missing/invalid fields.');
  res.render('registered', { first, last, email });
});

// order (fix Cannot GET /order)
router.get('/order', (req,res) =>
  res.render('order', { products, productCategories })
);

// show whatever the form sends
router.get('/order_result', (req,res) =>
  res.render('order_result', { ...req.query })
);

module.exports = router;
