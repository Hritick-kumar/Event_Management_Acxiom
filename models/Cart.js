// models/Cart.js
const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model('Cart', CartSchema);
