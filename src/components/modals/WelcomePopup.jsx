import React from 'react';
import Button from '../common/Button';

const WelcomePopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-5 overflow-y-auto" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <div className="bg-[#1E2A3A] rounded-xl shadow-2xl px-6 py-12 w-[420px] max-w-full flex flex-col items-center my-auto max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-white mb-5 text-center">
          Welcome to AlphaOne
        </h2>
        <p className="text-[#9CA3B4] text-center text-sm leading-relaxed mb-10 px-2">
          Your supervisor account is now active. From here, you can manage workers, assign missions, track real-time status, and handle exceptions efficiently.
        </p>
        <Button
          variant="primary"
          fullWidth
          onClick={onClose}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default WelcomePopup;
