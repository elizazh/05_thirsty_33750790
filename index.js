const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

// Make shopName available to all EJS templates
app.locals.shopName = 'Thirsty Student';

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));   // needed for POST /registered
app.use(express.static(path.join(__dirname, 'public'))); // serves /style.css etc.

// Routes
const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Thirsty Student on ${port}`);
});
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

app.locals.shopName = 'Thirsty Student';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

// ADD THIS so /style.css is served
app.use(express.static(path.join(__dirname, 'public')));

const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

app.listen(port, '0.0.0.0', () => console.log(`Thirsty Student on ${port}`));
