import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, User, ShoppingBag, PieChart, Camera } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Scanner from './pages/Scanner';
import Recommendations from './pages/Recommendations';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import { CurrencyProvider } from './context/CurrencyContext';

function App() {
  return (
    <CurrencyProvider>
      <Router>
        <div className="flex flex-col min-h-screen max-w-md mx-auto bg-white shadow-xl relative pb-20 overflow-x-hidden pt-16">
          <Navbar />
          {/* Main Content Area */}
          <main className="flex-grow overflow-y-auto">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/scan" element={<Scanner />} />
              <Route path="/recommendations" element={<Recommendations />} />
            </Routes>
          </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-200 rounded-t-3xl shadow-[0_-10px_20px_rgba(0,0,0,0.05)] px-6 py-4 flex justify-between items-center z-50">
          <Link to="/dashboard" className="flex flex-col items-center text-gray-400 hover:text-blue-600">
            <Home size={24} />
            <span className="text-[10px] font-semibold mt-1">HOME</span>
          </Link>
          <Link to="/recommendations" className="flex flex-col items-center text-gray-400 hover:text-blue-600">
            <ShoppingBag size={24} />
            <span className="text-[10px] font-semibold mt-1">WARDROBE</span>
          </Link>
          
          <Link to="/scan" className="relative -top-6">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40 text-white hover:scale-105 transition-transform">
              <Camera size={28} />
            </div>
            <span className="text-[10px] font-semibold text-gray-400 absolute -bottom-5 left-1/2 -translate-x-1/2">SCAN</span>
          </Link>

          <Link to="/dashboard" className="flex flex-col items-center text-gray-400 hover:text-blue-600">
            <PieChart size={24} />
            <span className="text-[10px] font-semibold mt-1">ANALYTICS</span>
          </Link>
          <Link to="/" className="flex flex-col items-center text-gray-400 hover:text-blue-600">
            <User size={24} />
            <span className="text-[10px] font-semibold mt-1">PROFILE</span>
          </Link>
        </nav>
      </div>
      </Router>
    </CurrencyProvider>
  );
}

export default App;
