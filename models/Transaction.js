
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  status: { type: String, enum: ['pending', 'completed', 'canceled'], required: true },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
