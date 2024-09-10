// routes/vendor.js
const express = require('express');
const router = express.Router();
const Item = require('../models/Item');
const Transaction = require('../models/Transaction');
const auth = require('../middleware/auth');

// Add New Item
router.post('/item', auth(['vendor']), async (req, res) => {
  const { vendor_id, item_name, status } = req.body;

  try {
    let item = new Item({ vendor_id, item_name, status });
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// View Transactions
router.get('/transactions', auth(['vendor']), async (req, res) => {
  try {
    const transactions = await Transaction.find({ vendor_id: req.user.id });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
