import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddPaymentModal from '../components/modals/AddPaymentModal';
import Button from '../components/common/Button';

const Subscriptions = () => {
    const navigate = useNavigate();
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const handleAddPaymentMethod = () => {
        setIsPaymentModalOpen(true);
    };

    const handleSelectPlan = (plan) => {
        console.log(`Selected plan: ${plan}`);
        // Add plan selection logic here
    };

    return (
        <div>
            {/* Subscription Card */}
            <div className="max-w-5xl mx-auto bg-[#2B3544] rounded-lg md:p-8 p-4 ">
                {/* Payment Method Section */}
                <div className="mb-8 bg-[#1A2332] rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Payment Method</h2>
                    <div className="flex md:flex-row flex-col gap-4">
                        {/* Current Card */}
                        <div className="flex-1 flex items-center gap-4 p-4 bg-[#1A2332] rounded-lg border border-[#3B82F6]">
                            {/* VISA Logo */}
                            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                                <span className="text-[#1A1F71] font-bold text-sm">VISA</span>
                            </div>
                            <div>
                                <p className="text-white font-medium">•••• •••• •••• 1234</p>
                                <p className="text-gray-400 text-sm">Expires on 09/27</p>
                            </div>
                        </div>

                        {/* Add Payment Method Button */}
                        <button
                            onClick={handleAddPaymentMethod}
                            className="flex items-center gap-2 px-6 py-4 bg-[#1A2332] hover:bg-[#374151] rounded-lg border border-[#3B82F6] transition-colors"
                        >
                            <div className="w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <span className="text-white font-medium">Add Payment Method</span>
                        </button>
                    </div>
                </div>

                {/* Subscription Plans */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Starter Plan */}
                    <div className="bg-[#2B78B6] hover:bg-[#3a67c7] rounded-lg p-6">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-white mb-1">Starter Plan</h3>
                            <p className="text-blue-100 text-sm">up to 20 Agents</p>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-baseline">
                                <span className="text-5xl font-bold text-white">$59.99</span>
                                <span className="text-blue-100 ml-2">/ month</span>
                            </div>
                        </div>

                        <p className="text-blue-50 text-sm mb-6">
                            Ideal for small teams managing daily operations
                        </p>

                        <button
                            onClick={() => handleSelectPlan('starter')}
                            className="w-full py-3 bg-[#1F2937] hover:bg-[#111827] text-white font-medium rounded-lg transition-colors"
                        >
                            Renew Subscription
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-[#1A2332] rounded-lg p-6 border border-[#3B82F6]">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-white mb-1">Pro Plan</h3>
                            <p className="text-gray-400 text-sm">up to 50 Agents</p>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-baseline">
                                <span className="text-5xl font-bold text-white">$99.99</span>
                                <span className="text-gray-400 ml-2">/ month</span>
                            </div>
                        </div>

                        <p className="text-gray-300 text-sm mb-6">
                            Designed for growing teams with higher mission volume
                        </p>

                        <Button
                            onClick={() => handleSelectPlan('pro')}
                            variant='primary'
                            fullWidth

                        >
                            Select
                        </Button>
                    </div>
                </div>
            </div>

            {/* Add Payment Modal */}
            <AddPaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
            />
        </div>
    );
};

export default Subscriptions;
