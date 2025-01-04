const express = require('express');
const router = express.Router();

let cart = []; // Temporary cart for simplicity

router.get('/', (req, res) => {
  res.json(cart);
});

router.post('/', (req, res) => {
  cart.push(req.body);
  res.status(201).send('Item added to cart');
});

router.delete('/:itemId', (req, res) => {
  cart = cart.filter((item) => item.id !== req.params.itemId);
  res.send('Item removed from cart');
});

module.exports = router;