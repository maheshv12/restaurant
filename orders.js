const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  const { userId, items, status } = req.body;
  const order = new Order({ userId, items, status });
  await order.save();
  res.status(201).send('Order placed');
});

router.get('/:userId', async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId });
  res.json(orders);
});

module.exports = router;