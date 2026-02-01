const express = require('express');
const fs = require('fs');
const routes = express.Router();

const { AddtoCart, getcart,DeleteItem } = require('../Controllers/cart');

routes.post('/cart', AddtoCart);
routes.get('/cart', getcart);
routes.delete('/cart/:id', DeleteItem);

module.exports = routes;