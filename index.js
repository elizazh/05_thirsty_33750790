const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

app.locals.shopName = 'Thirsty Student';     // <- so header.ejs always has shopName

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

app.listen(port, '0.0.0.0', () => console.log(`Thirsty Student on ${port}`));
