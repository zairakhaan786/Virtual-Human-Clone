const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  pricePaid: { type: Number, required: true }, // in INR ₹
  status: { type: String, default: 'Completed' }
}, { timestamps: true });

module.exports = mongoose.model('Purchase', purchaseSchema);
