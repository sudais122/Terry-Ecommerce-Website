const express = require('express');
const app = express();
const core = require('cors');

app.use(core());
app.use(express.json());

const CartRoutes = require('./Controllers/cart')

app.post('/cart', CartRoutes.AddtoCart);
app.get('/cart', CartRoutes.getcart);
module.exports = app;