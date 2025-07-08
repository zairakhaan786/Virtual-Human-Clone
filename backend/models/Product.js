const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true }, // e.g. Myntra, Ajio, Zara India, FabIndia
  category: { type: String, required: true }, // e.g. Daily Wear, Luxury, Festive
  price: { type: Number, required: true }, // in INR ₹
  imageUrl: { type: String },
  fitTags: [{ type: String }] // e.g. ['mesomorph', 'party', 'diwali']
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
