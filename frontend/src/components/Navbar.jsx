import { useState } from 'react';
import { useCurrency, SYMBOLS } from '../context/CurrencyContext';
import { Globe, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const { currency, changeCurrency } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);

  const currencies = ['INR', 'USD', 'EUR', 'GBP'];

  return (
    <div className="fixed top-0 w-full max-w-md bg-white/80 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center shadow-sm">
      <div className="font-bold text-lg text-gray-900 flex items-center gap-2">
        V-Clone <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">GLOBAL</span>
      </div>
      
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700 transition"
        >
          <Globe size={14} className="text-blue-600" />
          {currency} ({SYMBOLS[currency]})
          <ChevronDown size={14} className="text-gray-400" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden py-1">
            {currencies.map(c => (
              <button
                key={c}
                onClick={() => { changeCurrency(c); setIsOpen(false); }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition ${currency === c ? 'font-bold text-blue-600 bg-blue-50/50' : 'text-gray-600'}`}
              >
                {c} ({SYMBOLS[c]})
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
