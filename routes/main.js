// PART C — GET Order form + result
router.get('/order', (req, res) => {
  res.render('order', { shopName, products });
});

router.get('/order_result', (req, res) => {
  const { item, qty } = req.query;
  const p = products.find(x => x.id === item);
  const q = parseInt(qty, 10);
  if (!p || !q || q < 1) return res.status(400).send('Please choose a product and a valid quantity.');
  const total = (p.price * q).toFixed(2);
  res.render('order_result', { shopName, product: p, q, total });
});

// PART D — POST Register form
router.get('/register', (req, res) => {
  res.render('register', { shopName });
});

router.post('/registered', (req, res) => {
  const { first = '', last = '', email = '' } = req.body;
  const ok = first.trim() && last.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!ok) return res.status(400).send('Missing/invalid fields.');
  res.render('registered', { shopName, first, last, email });
});
router.get('/search', (req, res) => {
  res.render('search', { shopName, productCategories });
});

router.get('/search_result', (req, res) => {
  // exact behaviour the brief demonstrates:
  res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});
