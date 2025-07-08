const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Purchase = require('../models/Purchase');
const Product = require('../models/Product');
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

// Get user specific smart analytics
router.get('/dashboard', auth, async (req, res) => {
  try {
    const targetCurrency = req.query.currency || 'INR';

    // In a real app we'd aggregate purchase histories and views.
    // For MVP, we pass mock analytics for React Recharts graphs.
    
    // Base INR mock data
    const rawBudgetVsSpending = [
      { month: 'Jan', budget: 5000, spent: 4200 },
      { month: 'Feb', budget: 5000, spent: 5800 },
      { month: 'Mar', budget: 6000, spent: 3400 }
    ];

    // Convert to requested currency
    const budget_vs_spending = rawBudgetVsSpending.map(data => ({
      month: data.month,
      budget: convertCurrency(data.budget, targetCurrency).convertedAmount,
      spent: convertCurrency(data.spent, targetCurrency).convertedAmount
    }));
    
    const analytics = {
      currency: targetCurrency,
      budget_vs_spending,
      brand_popularity: [
        { brand: 'Myntra', views: 400 },
        { brand: 'Zara India', views: 300 },
        { brand: 'Ajio', views: 200 }
      ],
      trending_now: [
        { item: 'Festive Kurta Set', category: 'Ethnic', surge: '+45%' },
        { item: 'Oversized Streetwear T-shirt', category: 'Casual', surge: '+20%' }
      ]
    };

    res.json(analytics);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
