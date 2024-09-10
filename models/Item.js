// models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  vendor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  item_name: { type: String, required: true },
  status: { type: String, enum: ['available', 'unavailable'], required: true },
});

module.exports = mongoose.model('Item', ItemSchema);
