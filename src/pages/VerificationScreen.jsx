import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import Button from '../components/common/Button';

import AccountCreatedPopup from '../components/modals/AccountCreatedPopup';

const VerificationScreen = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(55);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [showAccountCreatedPopup, setShowAccountCreatedPopup] = useState(false);


    useEffect(() => {
        // Focus first input on mount
        inputRefs[0].current?.focus();
    }, []);

    useEffect(() => {
        // Countdown timer
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const handleChange = (index, value) => {
        // Only allow single digit
        if (value.length > 1) {
            value = value[value.length - 1];
        }

        // Only allow numbers
        if (!/^\d*$/.test(value)) {
            return;
        }

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // Auto-focus next input
        if (value && index < 3) {
            inputRefs[index + 1].current?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs[index - 1].current?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 4);

        if (!/^\d+$/.test(pastedData)) {
            return;
        }

        const newCode = [...code];
        for (let i = 0; i < pastedData.length && i < 4; i++) {
            newCode[i] = pastedData[i];
        }
        setCode(newCode);

        // Focus the next empty input or the last input
        const nextEmptyIndex = newCode.findIndex((digit) => !digit);
        if (nextEmptyIndex !== -1) {
            inputRefs[nextEmptyIndex].current?.focus();
        } else {
            inputRefs[3].current?.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const verificationCode = code.join('');

        if (verificationCode.length !== 4) {
            alert('Please enter the complete 4-digit code');
            return;
        }

        // Handle verification logic here
        console.log('Verification code:', verificationCode);

        // Navigate to next screen after verification
        setShowAccountCreatedPopup(true);
        navigate('/verification');
    };

    const handleGetStarted = () => {
        setShowAccountCreatedPopup(false);
        navigate('/login');
    };

    const handleResendCode = () => {
        if (timer === 0) {
            // Resend code logic here
            console.log('Resending code...');
            setTimer(55);
            setCode(['', '', '', '']);
            inputRefs[0].current?.focus();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-bg-primary">
            <div className="flex flex-col md:flex-row items-center gap-32 md:p-4">
                {/* Logo and Brand */}
                <div className="flex flex-col items-center hidden md:block">
                    <img className='w-64 h-auto' src={logo} alt="AlphaOne Logo" />
                </div>

                {/* Verification Form */}
                <div className="bg-[#1A2332] rounded-xl shadow-2xl p-10">
                    <h2 className="text-2xl font-bold text-white mb-2">Verification</h2>
                    <p className="text-[#8B92A7] text-sm mb-8">
                        We've sent you 4 digit code to your email
                    </p>

                    <form onSubmit={handleSubmit}>
                        {/* Digit Input Boxes */}
                        <div className="flex justify-center gap-4 mb-6">
                            {code.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={inputRefs[index]}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onPaste={handlePaste}
                                    className="w-12 h-12 md:w-16 md:h-16 text-center text-2xl font-semibold rounded-lg  text-white border-2 border-[#2A3441] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    required
                                />
                            ))}
                        </div>

                        {/* Resend Code Section */}
                        <div className="text-center mb-16">
                            <p className="text-[#8B92A7] text-xs mb-1">
                                Didn't receive code?
                            </p>
                            <p className="text-xs">
                                {timer > 0 ? (
                                    <span className="text-[#8B92A7]">
                                        You can resend code in <span className="text-blue-400">{timer}s</span>
                                    </span>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handleResendCode}
                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        Resend Code
                                    </button>
                                )}
                            </p>
                        </div>

                        <Button
                            type="submit"
                            fullWidth
                            variant="primary">
                            Verify
                        </Button>
                    </form>
                </div>

                {/* Welcome Popup Overlay */}
                {showAccountCreatedPopup && (
                    <AccountCreatedPopup onClose={handleGetStarted} />
                )}
            </div>
        </div>
    );
};

export default VerificationScreen;
