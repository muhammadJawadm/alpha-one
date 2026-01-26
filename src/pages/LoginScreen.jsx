import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import Button from '../components/common/Button';
import WelcomePopup from './WelcomePopup';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', email, password);

    // Show welcome popup after successful login
    setShowWelcomePopup(true);
  };

  const handleGetStarted = () => {
    setShowWelcomePopup(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="flex flex-col md:flex-row items-center gap-32 p-4">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center hidden md:block">
          <img className='w-64 h-auto' src={logo} alt="AlphaOne Logo" />
        </div>

        {/* Login Form */}
        <div className="bg-[#1A2332] rounded-xl shadow-2xl p-10 w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-white mb-2">Login to AlphaOne</h2>
          <p className="text-[#8B92A7] text-sm mb-8">
            Use the email and password provided by Admin.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-5 relative">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 rounded-lg bg-[#0F1419] text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                required
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
                </svg>
              </span>
            </div>

            <div className="mb-3 relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3.5 rounded-lg bg-[#0F1419] text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                required
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </span>
            </div>

            <div className="flex justify-end mb-16">
              <button
                type="button"
                className="text-xs text-[#E5E7EB] hover:text-white transition-colors"
              >
                Reset Password
              </button>
            </div>

            <Button
              type="submit"
              fullWidth
              variant="primary">
              Login
            </Button>
          </form>
        </div>
      </div>

      {/* Welcome Popup Overlay */}
      {showWelcomePopup && (
        <WelcomePopup onClose={handleGetStarted} />
      )}
    </div>
  );
};

export default LoginScreen;
