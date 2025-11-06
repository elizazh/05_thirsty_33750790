const express = require('express');
const router = express.Router();

const productCategories = ['Hot drinks', 'Cold drinks', 'Snacks'];
const products = [
  { id: 'tea', name: 'Tea', price: 1.50, category: 'Hot drinks' },
  { id: 'coffee', name: 'Coffee', price: 2.00, category: 'Hot drinks' },
  { id: 'cola', name: 'Cola', price: 1.20, category: 'Cold drinks' },
  { id: 'water', name: 'Water', price: 1.00, category: 'Cold drinks' },
  { id: 'crisps', name: 'Crisps', price: 1.30, category: 'Snacks' },
  { id: 'cookie', name: 'Cookie', price: 1.20, category: 'Snacks' },
];

router.get('/', (req,res)=> res.render('index', { productCategories }));
router.get('/about', (req,res)=> res.render('about'));
router.get('/menu', (req,res)=> res.render('menu', { products }));
router.get('/product/:id', (req,res)=>{
  const p = products.find(x=>x.id===req.params.id);
  if(!p) return res.status(404).send('Product not found');
  res.render('product', { p });
});

// 5c
router.get('/search', (req,res)=> res.render('search'));
router.get('/search_result', (req,res)=>{
  res.send(`You searched for ${req.query.search_text} in ${req.query.category}`);
});

// 5d
router.get('/register', (req,res)=> res.render('register'));
router.post('/registered', (req,res)=>{
  const { first='', last='', email='' } = req.body;
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if(!ok) return res.status(400).send('Missing/invalid fields.');
  res.render('registered', { first, last, email });
});

module.exports = router;   // <- don’t forget this
