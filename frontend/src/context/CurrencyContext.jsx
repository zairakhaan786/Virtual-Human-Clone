import { createContext, useState, useContext, useEffect } from 'react';

const CurrencyContext = createContext();

export const SYMBOLS = {
  INR: '₹',
  USD: '$',
  EUR: '€',
  GBP: '£'
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('INR'); // Always INR base

  useEffect(() => {
    const saved = localStorage.getItem('user_currency');
    if (saved) {
      setCurrency(saved);
    } else {
      // Auto-detect user currency via IP
      fetch('https://ipapi.co/currency/')
        .then(response => response.text())
        .then(detectedCurrency => {
          if (SYMBOLS[detectedCurrency]) {
            setCurrency(detectedCurrency);
            localStorage.setItem('user_currency', detectedCurrency);
          }
        })
        .catch(err => console.log('Location detection failed, defaulting to INR:', err));
    }
  }, []);

  const changeCurrency = (code) => {
    setCurrency(code);
    localStorage.setItem('user_currency', code);
  };

  return (
    <CurrencyContext.Provider value={{ currency, symbol: SYMBOLS[currency], changeCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
