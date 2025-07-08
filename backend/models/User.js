const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: {
    height: { type: Number }, // in cm
    weight: { type: Number }, // in kg
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    budget: { type: Number }, // in INR
    bodyType: { type: String, enum: ['Ectomorph', 'Mesomorph', 'Endomorph', 'Unknown'], default: 'Unknown' },
    size: { type: String, enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], default: 'M' }
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
