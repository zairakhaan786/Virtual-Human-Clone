import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    // Bypass real auth for MVP, jump to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col h-screen px-6 py-12 justify-center pb-32">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Virtual Clone 🇮🇳</h1>
        <p className="text-sm text-gray-500">Your AI Fashion Assistant for Indian Trends</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-6">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        
        <form onSubmit={handleAuth} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">FULL NAME</label>
              <input type="text" placeholder="Aditi Sharma" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500" />
            </div>
          )}
          
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">EMAIL ADDRESS</label>
            <input type="email" placeholder="you@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500" required />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">PASSWORD</label>
            <input type="password" placeholder="••••••••" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500" required />
          </div>

          <button type="submit" className="w-full bg-black text-white font-semibold py-3 rounded-xl mt-4 hover:bg-gray-800 transition-colors">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} className="font-semibold text-blue-600 hover:underline">
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}
