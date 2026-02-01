const express = require('express');
const fs = require('fs');
const app = express();
const core = require('cors');

app.use(core());
app.use(express.json());

const CartRoutes = require('./Controllers/cart')

app.post('/cart', CartRoutes.AddtoCart);
app.get('/cart', CartRoutes.getcart);
app.delete('/cart/:id', CartRoutes.DeleteItem);
module.exports = app;