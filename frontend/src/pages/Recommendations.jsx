import { useState, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { Star, Sparkles, Filter } from 'lucide-react';

export default function Recommendations() {
  const { currency, symbol } = useCurrency();
  const [recommendations, setRecommendations] = useState([]);
  const [insight, setInsight] = useState('');

  useEffect(() => {
    // In production, fetch from /api/recommendations?currency=${currency}
    // We mock the service here to demonstrate real-time frontend conversion bounds
    const R = { INR: 1, USD: 0.012, EUR: 0.011, GBP: 0.0095 };
    const S = { INR: '₹', USD: '$', EUR: '€', GBP: '£' };

    const mockData = [
      {
        id: 1, name: "Embroidered Silk Blend Kurta", brand: "Myntra Specials",
        basePrice: 3499, category: "Festive Wear", match: 98, tags: ["Diwali Ready", "Premium"],
        image: "https://images.unsplash.com/photo-1583391733959-b151249b5ae7?q=80&w=400&fit=crop"
      },
      {
        id: 2, name: "Oversized Cotton T-Shirt", brand: "Zara India",
        basePrice: 1290, category: "Daily Wear", match: 95, tags: ["Summer Essential"],
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&fit=crop"
      },
      {
        id: 3, name: "Slim Fit Chinos", brand: "Ajio Core",
        basePrice: 1899, category: "Casual", match: 92, tags: ["Office to Party"],
        image: "https://images.unsplash.com/photo-1624378439575-d1ead6bb17da?q=80&w=400&fit=crop"
      }
    ];

    const convert = (inr) => {
      if (currency === 'INR') return inr.toLocaleString('en-IN');
      return (Math.round(inr * R[currency] * 100) / 100).toFixed(2);
    };

    setRecommendations(mockData.map(item => ({
      ...item,
      displayPrice: convert(item.basePrice),
      isGlobal: currency !== 'INR'
    })));

    setInsight(currency !== 'INR' 
      ? `Displaying global pricing. All internal retail transactions are preserved in base currency (INR ₹).` 
      : `Based on your typical ₹2000 budget, we've found great local alternatives to international luxury brands.`);

  }, [currency]);

  return (
    <div className="px-5 py-8 pb-32 pt-24 font-sans max-w-md mx-auto relative">
      <header className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Stylist</h1>
          <p className="text-sm text-gray-500">Tailored for your budget ({symbol})</p>
        </div>
        <button className="bg-gray-100 p-2 rounded-full text-gray-700 shadow-sm hover:bg-gray-200">
            <Filter size={20} />
        </button>
      </header>

      {/* AI Smart Suggestion Alert */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700/90 rounded-2xl p-5 mb-8 text-white shadow-xl shadow-blue-500/20 backdrop-blur-md">
        <div className="flex items-start gap-3">
          <Sparkles className="text-yellow-300 shrink-0" size={24} />
          <div>
            <h3 className="font-bold text-sm mb-1 uppercase tracking-wide text-blue-100">Smart Insight</h3>
            <p className="text-xs leading-relaxed text-blue-50">
              {insight}
            </p>
          </div>
        </div>
      </div>

      {/* Categories / Filters */}
      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide mb-2 -mx-5 px-5">
        <button className="px-5 py-2.5 bg-black text-white rounded-full text-xs font-semibold whitespace-nowrap shadow-md">All Items</button>
        <button className="px-5 py-2.5 bg-orange-100 text-orange-700 border border-orange-200 rounded-full text-xs font-semibold whitespace-nowrap flex items-center gap-1">🪔 Diwali Edits</button>
        <button className="px-5 py-2.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-full text-xs font-semibold whitespace-nowrap">Daily Wear</button>
      </div>

      {/* Product List */}
      <div className="space-y-5 mt-4">
        {recommendations.map(item => (
          <div key={item.id} className="flex gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 relative group">
            
            <div className="w-28 h-36 rounded-xl overflow-hidden shrink-0 relative bg-gray-100 shadow-inner">
               <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
               <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-blue-600 text-[10px] font-bold px-2 py-1 rounded-md shadow-sm border border-white/50">
                 {item.match}% Fit
               </div>
            </div>
            
            <div className="flex flex-col py-1 pr-2 w-full justify-between">
               <div>
                 <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{item.brand}</span>
                 <h3 className="font-semibold text-sm text-gray-900 leading-tight mt-1 mb-2 line-clamp-2">{item.name}</h3>
                 
                 <div className="flex flex-wrap gap-1">
                   {item.tags.map(tag => (
                     <span key={tag} className="text-[9px] font-medium bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded-md">{tag}</span>
                   ))}
                 </div>
               </div>

               <div className="flex justify-between items-end mt-4">
                 <div>
                   {/* DYNAMIC CURRENCY DISPLAY: USD (INR) OR PURE INR */}
                   <p className="font-bold text-lg text-gray-900 leading-none">
                     {symbol}{item.displayPrice}
                   </p>
                   {item.isGlobal && (
                     <p className="text-[10px] font-semibold text-gray-400 mt-1">
                       (₹{item.basePrice.toLocaleString('en-IN')})
                     </p>
                   )}
                 </div>

                 <button className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-md active:scale-95">
                   <Star size={14} />
                 </button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
