// Real-time Forex API mockup service
// In a production environment, this would call exchangerate-api.com
// For consistent testing and MVP, we use relative accurate static rates against base INR 

const RATES = {
  INR: 1,
  USD: 0.012, // 1 INR = 0.012 USD (~$83 per USD)
  EUR: 0.011, // 1 INR = 0.011 EUR
  GBP: 0.0095 // 1 INR = 0.0095 GBP
};

const SYMBOLS = {
  INR: '₹',
  USD: '$',
  EUR: '€',
  GBP: '£'
};

const convertCurrency = (amountInr, targetCurrency = 'INR') => {
  if (!RATES[targetCurrency]) targetCurrency = 'INR';
  
  const convertedAmount = amountInr * RATES[targetCurrency];
  
  // Return rounded to 2 decimal places if not INR
  return {
    baseAmount: amountInr,
    convertedAmount: targetCurrency === 'INR' ? amountInr : Number(convertedAmount.toFixed(2)),
    baseCurrency: 'INR',
    targetCurrency,
    symbol: SYMBOLS[targetCurrency]
  };
};

module.exports = { convertCurrency, RATES, SYMBOLS };
