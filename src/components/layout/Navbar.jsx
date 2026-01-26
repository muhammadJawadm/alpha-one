import React from 'react';

const Navbar = () => {
  return (
    <nav className="border-gray-700/50">
      <div className="px-8 py-5">
        <div className="flex justify-between items-center">
          {/* Page Title and Subtitle */}
          <div>
            <h1 className="text-2xl font-bold text-white">Dashboards</h1>
            <p className="text-sm text-gray-400 mt-1">Monitor employee operations in Realtime</p>
          </div>

          {/* Right Section - Notification & User */}
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            {/* User Avatar */}
            <div className="w-10 h-10 bg-[#2B78B6] rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">A</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
