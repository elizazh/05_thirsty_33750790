const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

// make shop name available to all views
app.locals.shopName = 'Thirsty Student';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // for /style.css etc

// mount the router you just created
const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

app.listen(port, '0.0.0.0', () => {
  console.log(`Thirsty Student on ${port}`);
});
