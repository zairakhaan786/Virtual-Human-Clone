const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { convertCurrency } = require('../services/currencyService');

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'No token' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET || 'secret123').user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token invalid' });
  }
};

// Get personalized recommendations for Indian market with Global Currency convert
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const profile = user.profile || {};
    const targetCurrency = req.query.currency || 'INR';
    
    // Base budget ranges in INR
    const budget = profile.budget || 5000;
    
    // Core Indian logic: luxury vs daily wear and budget constraints
    const maxBudget = budget + (budget * 0.2); // 20% flexibility
    
    // We filter clothing matching size and budget
    let query = { price: { $lte: maxBudget } };
    
    const suggested = await Product.find(query).limit(10).sort({ price: -1 });

    // Format products with currency service
    const formattedProducts = suggested.map(product => {
      const conversion = convertCurrency(product.price, targetCurrency);
      return {
        _id: product._id,
        name: product.name,
        brand: product.brand,
        category: product.category,
        imageUrl: product.imageUrl,
        fitTags: product.fitTags,
        pricing: conversion // Contains baseAmount (INR) and convertedAmount
      };
    });

    // Artificial Intelligence Mock Insights
    const insights = [
      budget < 2500 ? "You usually buy under ₹2500, check out these trending daily wear styles from Ajio and Myntra!" : "We noticed you prefer premium segments, exploring Zara India luxury edits.",
      "Diwali festive collections are trending in your size!"
    ];

    res.json({
      success: true,
      currency: targetCurrency,
      recommended_outfits: formattedProducts,
      ai_insights: insights
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
