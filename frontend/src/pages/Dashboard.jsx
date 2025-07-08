import { useState, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { RefreshCcw, Bell } from 'lucide-react';
import { LineChart, Line, XAxis, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';

export default function RetailIntelligence() {
  const { currency, symbol } = useCurrency();
  const [data, setData] = useState(null);

  useEffect(() => {
    // In production, this would fetch from /api/analytics?currency=${currency}
    const mockData = {
      conversion: "24.8%",
      conversionSpike: "+3.2%",
      tryOns: "128.4K",
      tryOnSpike: "+12%",
      tension: "High",
      returnRate: "12.4%",
      accuracy: "98.2%",
      demandForecast: [
        { name: 'OCT 24', pv: 2400 },
        { name: 'NOV 01', pv: 1398 },
        { name: 'NOV 10', pv: 4800 },
        { name: 'NOV 20', pv: 3908 },
        { name: 'NOV 30', pv: 4800 },
        { name: 'DEC 10', pv: 3800 },
        { name: 'DEC 20', pv: 4300 },
      ],
      accuracyIndex: [
        { name: "Oversized Tech Shell", rec: "8.2K units", actual: "7.9K units", match: "96.3%" },
        { name: "Modular Cargo Pant", rec: "5.1K units", actual: "4.8K units", match: "94.1%" }
      ]
    };
    setData(mockData);
  }, [currency]);

  if (!data) return <div className="p-8 text-white">Loading...</div>;

  return (
    <div className="bg-[#0f0f11] min-h-screen text-white px-5 py-6 pb-28 font-sans">
      
      {/* Header */}
      <header className="flex justify-between items-start mb-6 pt-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Retail Intelligence</h1>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
            <p className="text-xs text-gray-400">Live Global Analytics ({currency})</p>
          </div>
        </div>
        <button className="bg-[#1a1a1c] p-2 rounded-full border border-gray-800 text-gray-400 shadow-sm">
          <Bell size={18} />
        </button>
      </header>

      {/* Top Quick Stats */}
      <div className="flex gap-3 mb-6">
        <div className="flex-1 bg-[#1a1a1c] rounded-2xl p-4 border border-gray-800 shadow-lg">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Clone Conversion</p>
          <div className="flex items-end gap-2">
            <h2 className="text-2xl font-bold text-cyan-400">{data.conversion}</h2>
            <span className="text-xs text-green-500 mb-1">{data.conversionSpike}</span>
          </div>
        </div>
        <div className="flex-1 bg-[#1a1a1c] rounded-2xl p-4 border border-gray-800 shadow-lg">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Virtual Try-Ons</p>
          <div className="flex items-end gap-2">
            <h2 className="text-2xl font-bold text-white">{data.tryOns}</h2>
            <span className="text-xs text-green-500 mb-1">{data.tryOnSpike}</span>
          </div>
        </div>
      </div>

      {/* Fit Trends Analysis Heatmap */}
      <div className="bg-[#1a1a1c] rounded-3xl p-5 border border-gray-800 mb-6 relative overflow-hidden shadow-xl">
        <div className="flex justify-between items-center mb-6 z-10 relative">
          <div>
            <h3 className="text-sm font-bold text-white">Fit Trends Analysis</h3>
            <p className="text-[10px] text-gray-400">Regional tension & sizing issues</p>
          </div>
          <span className="bg-cyan-900/30 text-cyan-400 text-[10px] font-bold px-2 py-1 rounded border border-cyan-800/50">LIVE</span>
        </div>

        {/* Heatmap Graphic Mock */}
        <div className="h-64 bg-black/40 rounded-xl border border-gray-800/50 flex items-center justify-center relative mb-4">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzMzMiLz48L3N2Zz4=')] opacity-30"></div>
          
          {/* Mock Body Silhouette */}
          <div className="relative w-16 h-48 border-l border-r border-gray-700/30 rounded-full">
            {/* Heatmap glow spots */}
            <div className="absolute top-8 -left-8 w-24 h-24 bg-red-500/40 rounded-full blur-xl mix-blend-screen"></div>
            <div className="absolute top-8 left-0 w-8 h-8 bg-red-500/80 rounded-full blur-md"></div>
            
            <div className="absolute top-24 -left-6 w-20 h-20 bg-cyan-400/30 rounded-full blur-xl mix-blend-screen"></div>
            <div className="absolute top-24 left-1 w-6 h-6 bg-cyan-400/80 rounded-full blur-md"></div>

            <div className="absolute top-36 -left-4 w-16 h-16 bg-yellow-500/30 rounded-full blur-xl mix-blend-screen"></div>
          </div>

          {/* Tooltips */}
          <div className="absolute left-4 top-16 text-xs font-bold text-white">
            CHEST TIGHTNESS<br/><span className="text-red-400 text-[10px]">High Risk (82%)</span>
          </div>
          <div className="absolute right-4 top-28 text-xs font-bold text-white text-right">
            WAIST OPTIMAL<br/><span className="text-cyan-400 text-[10px]">Good Fit (94%)</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center border-t border-gray-800 pt-3">
          <div>
            <p className="text-[9px] text-gray-500 uppercase font-bold">Tension</p>
            <p className="text-xs font-bold text-red-400">{data.tension}</p>
          </div>
          <div className="border-l border-r border-gray-800">
            <p className="text-[9px] text-gray-500 uppercase font-bold">Return Rate</p>
            <p className="text-xs font-bold text-white">{data.returnRate}</p>
          </div>
          <div>
            <p className="text-[9px] text-gray-500 uppercase font-bold">Accuracy</p>
            <p className="text-xs font-bold text-cyan-400">{data.accuracy}</p>
          </div>
        </div>
      </div>

      {/* Demand Forecasting Graph */}
      <div className="bg-[#1a1a1c] border border-gray-800 rounded-3xl p-5 mb-6 shadow-xl relative overflow-hidden">
         <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-sm font-bold text-white">Demand Forecasting</h3>
            <p className="text-[10px] text-gray-400">Next 30 days projection</p>
          </div>
          <button className="text-xs bg-gray-800/50 text-gray-300 px-3 py-1 rounded shadow-sm border border-gray-700">Streetwear ⌄</button>
        </div>

        <div className="h-32 w-full mt-2 relative">
          <div className="absolute right-0 top-0 bg-cyan-400 text-black text-[9px] font-bold px-2 py-0.5 rounded shadow-[0_0_10px_rgba(34,211,238,0.8)] z-10 transition-transform hover:scale-110 cursor-pointer">+42% SPIKE</div>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.demandForecast}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 8, fill: '#6b7280' }} dy={10} />
              <RechartsTooltip contentStyle={{ backgroundColor: '#1a1a1c', border: '1px solid #374151', borderRadius: '8px', fontSize: '10px' }} />
              <Line type="monotone" dataKey="pv" stroke="#22d3ee" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Accuracy Index */}
      <div className="mb-4">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-sm font-bold text-white">AI Accuracy Index</h3>
          <span className="text-[9px] font-bold text-cyan-400 uppercase tracking-widest cursor-pointer hover:underline">Report</span>
        </div>
        
        <div className="space-y-3">
          {data.accuracyIndex.map((item, idx) => (
            <div key={idx} className="bg-[#1a1a1c] border border-gray-800 p-3 rounded-2xl flex items-center justify-between shadow-md">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-white rounded-lg p-1.5 flex items-center justify-center">
                   <div className="w-full h-full bg-black mask-shirt">👕</div>
                 </div>
                 <div>
                   <h4 className="text-xs font-bold text-white mb-1">{item.name}</h4>
                   <div className="flex gap-3 text-[9px]">
                     <span className="text-gray-500">RECOMMENDED <br/><span className="text-cyan-400 font-bold">{item.rec}</span></span>
                     <span className="text-gray-500">ACTUAL SALES <br/><span className="text-white font-bold">{item.actual}</span></span>
                   </div>
                 </div>
               </div>
               <div className="text-right">
                 <p className="text-xs font-bold text-green-500">{item.match}</p>
                 <p className="text-[8px] text-gray-500 uppercase">Match</p>
               </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
