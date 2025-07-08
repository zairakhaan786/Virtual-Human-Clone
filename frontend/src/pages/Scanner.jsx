import { useState, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';

export default function SmartMirror() {
  const { currency, symbol } = useCurrency();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-[#2B3131] min-h-screen text-white relative font-sans overflow-hidden pattern-grid">
      
      {/* Background Grid Pattern (simulating mirror grid) */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#4b5563 1px, transparent 1px), linear-gradient(90deg, #4b5563 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Very faint background gradient to simulate mirror reflection */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3E4545]/40 to-[#1D2122]/90 pointer-events-none"></div>
      <div className="absolute bottom-32 -left-20 w-96 h-96 bg-cyan-900/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 p-5 h-full flex flex-col justify-between pt-10 pb-40">
        
        {/* Top Header */}
        <div className="flex justify-between items-start">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
               <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
               <p className="text-[10px] font-bold text-cyan-400 tracking-widest uppercase shadow-sm">Live Scanning Active</p>
            </div>
            <h1 className="text-3xl font-normal text-white drop-shadow-md">Smart Mirror</h1>
            <h2 className="text-2xl font-bold text-white drop-shadow-md">v2.4</h2>
          </div>
          
          <div className="bg-[#212628]/80 backdrop-blur-md border border-gray-700 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
             <div className="text-cyan-400 text-xs">📶</div>
             <p className="text-[8px] font-bold tracking-widest uppercase text-gray-300 leading-tight">SYNC:<br/>ONLINE</p>
          </div>
        </div>

        {/* Center UI Overlay */}
        <div className="flex-grow relative mt-[5vh]">
          
          {/* Cyan alignment corners */}
          <div className="absolute top-0 right-1/4 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
          <div className="absolute top-0 right-1/2 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
          <div className="absolute bottom-20 left-1/4 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
          <div className="absolute bottom-20 left-1/2 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>

          {/* Left Column Data Cards */}
          <div className="flex flex-col gap-3 max-w-[140px] relative z-20">
            
            <div className="bg-[#2D3337]/90 backdrop-blur-md border-l-2 border-cyan-400 p-3 shadow-xl">
               <p className="text-[8px] font-bold text-gray-400 uppercase leading-tight mb-2">PREDICTED<br/>CHEST</p>
               <h3 className="text-3xl font-bold tracking-tight">98.2<span className="text-xs text-cyan-400 ml-1">cm</span></h3>
            </div>
            
            <div className="bg-[#2D3337]/90 backdrop-blur-md border-l-2 border-cyan-400 p-3 shadow-xl">
               <p className="text-[8px] font-bold text-gray-400 uppercase leading-tight mb-2">PREDICTED<br/>WAIST</p>
               <h3 className="text-3xl font-bold tracking-tight">81.5<span className="text-xs text-cyan-400 ml-1">cm</span></h3>
            </div>

            <div className="bg-[#2D3337]/90 backdrop-blur-md border-l-2 border-cyan-400 p-3 shadow-xl">
               <p className="text-[8px] font-bold text-gray-400 uppercase leading-tight mb-2">PREDICTED<br/>INSEAM</p>
               <h3 className="text-3xl font-bold tracking-tight">79.0<span className="text-xs text-cyan-400 ml-1">cm</span></h3>
            </div>

            {/* Fit Confidence Card */}
            <div className="bg-[#1C2C2F]/80 backdrop-blur-md border border-cyan-900/50 rounded-xl p-3 shadow-xl mt-4 relative overflow-hidden">
               <div className="flex items-center gap-1.5 mb-2">
                 <div className="bg-cyan-400 text-black rounded-full w-3 h-3 flex items-center justify-center text-[8px] font-bold">i</div>
                 <p className="text-[9px] font-bold text-white uppercase leading-tight">FIT<br/>CONFIDENCE</p>
               </div>
               <div className="w-full bg-cyan-950 rounded-full h-1 mb-1">
                 <div className="bg-cyan-400 h-1 rounded-full" style={{width: '94.3%'}}></div>
               </div>
               <p className="text-[9px] font-bold text-cyan-400">94.3% Accurate</p>
            </div>
          </div>

          {/* Right Column Action Buttons */}
          <div className="absolute right-0 top-1/4 flex flex-col gap-3 z-20">
             <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest text-right mb-1">VERIFICATION</p>
             
             <button className="bg-[#487161]/90 hover:bg-[#487161] backdrop-blur-md rounded-2xl p-4 shadow-lg w-28 border border-green-600/30 transition-transform hover:scale-105 active:scale-95">
                <div className="bg-green-400 rounded-full w-5 h-5 flex items-center justify-center mx-auto mb-2 text-black text-xs">✓</div>
                <p className="text-[9px] font-bold text-white uppercase text-center">PERFECT FIT</p>
             </button>

             <button className="bg-[#997B49]/90 hover:bg-[#997B49] backdrop-blur-md rounded-2xl p-4 shadow-lg w-28 border border-yellow-600/30 transition-transform hover:scale-105 active:scale-95">
                <div className="text-yellow-400 text-lg text-center mb-1">📏</div>
                <p className="text-[9px] font-bold text-white uppercase text-center">TOO TIGHT</p>
             </button>

             <button className="bg-[#4D5A6F]/90 hover:bg-[#4D5A6F] backdrop-blur-md rounded-2xl p-4 shadow-lg w-28 border border-blue-600/30 transition-transform hover:scale-105 active:scale-95">
                <div className="text-blue-300 text-lg text-center mb-1 flex flex-col items-center leading-none">
                  <span>⌃</span><span className="-mt-2">⌄</span>
                </div>
                <p className="text-[9px] font-bold text-white uppercase text-center mt-1">TOO LOOSE</p>
             </button>
          </div>
        </div>

      </div>

      {/* Bottom Sticky Actions */}
      <div className="fixed bottom-24 left-0 w-full px-5 z-40 bg-gradient-to-t from-[#1D2122] via-[#1D2122]/90 to-transparent pb-4 pt-10">
        <div className="flex gap-3 mb-4">
           <button className="flex-1 bg-[#1A1F22] hover:bg-[#20262a] border border-cyan-900/50 rounded-2xl p-4 flex items-center justify-center gap-2 shadow-xl backdrop-blur-md transition-colors">
              <span className="text-cyan-400">👓</span>
              <span className="text-[10px] font-bold uppercase text-white tracking-wider">VIEW VIRTUAL<br/>TRY-ON</span>
           </button>
           <button className="flex-1 bg-[#1A1F22] hover:bg-[#20262a] border border-cyan-900/50 rounded-2xl p-4 flex items-center justify-center gap-2 shadow-xl backdrop-blur-md transition-colors">
              <span className="text-cyan-400">🛍️</span>
              <span className="text-[10px] font-bold uppercase text-white tracking-wider">DIFFERENT SIZE</span>
           </button>
        </div>
        
        <button className="w-full bg-cyan-300 hover:bg-cyan-200 text-black rounded-3xl p-5 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(103,232,249,0.4)] transition-transform hover:scale-[1.02] active:scale-[0.98]">
           <span className="font-bold text-lg">✓</span>
           <span className="font-bold tracking-widest uppercase">CONFIRM FINAL FIT</span>
        </button>
      </div>

    </div>
  );
}
