
const express = require('express');
const router = express.Router();
const Vendor = require('../models/Vendor');
const Membership = require('../models/Membership');
const auth = require('../middleware/auth');

// Add/Update Vendor
router.post('/vendor', auth(['admin']), async (req, res) => {
  const { vendor_name, membership_status } = req.body;

  try {
    let vendor = new Vendor({ vendor_name, membership_status });
    await vendor.save();
    res.json(vendor);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add/Update Membership
router.post('/membership', auth(['admin']), async (req, res) => {
  const { vendor_id, start_date, end_date } = req.body;

  try {
    let membership = new Membership({ vendor_id, start_date, end_date });
    await membership.save();
    res.json(membership);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
