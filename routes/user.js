// routes/user.js
const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Order = require('../models/Order');
const auth = require('../middleware/auth');

// Add to Cart
router.post('/cart', auth(['user']), async (req, res) => {
  const { item_id, quantity } = req.body;

  try {
    let cart = new Cart({ user_id: req.user.id, item_id, quantity });
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// View Orders
router.get('/orders', auth(['user']), async (req, res) => {
  try {
    const orders = await Order.find({ user_id: req.user.id });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
