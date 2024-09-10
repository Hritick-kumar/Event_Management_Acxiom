
const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  vendor_name: { type: String, required: true },
  membership_status: { type: String, enum: ['active', 'inactive'], required: true },
});

module.exports = mongoose.model('Vendor', VendorSchema);
