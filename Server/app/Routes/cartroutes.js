const express = require('express');
const routes = express.Router();

const { AddtoCart, getcart } = require('../Controllers/cart');

routes.post('/cart', AddtoCart);
routes.get('/cart', getcart);

module.exports = routes;