import { useState } from 'react';
import visa from '../../assets/Processor.png'
import master from '../../assets/Processor-1.png'
import amercican from '../../assets/Processor-2.png'
import discover from '../../assets/Processor-3.png'
import Button from '../common/Button'


const AddPaymentModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        cardNumber: '',
        expiry: '',
        cvc: ''
    });

    const [cardType, setCardType] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'cardNumber') {
            // Remove spaces and limit to 16 digits
            const cleaned = value.replace(/\s/g, '').replace(/\D/g, '');
            const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;

            // Detect card type
            if (cleaned.startsWith('4')) setCardType('visa');
            else if (cleaned.startsWith('5')) setCardType('mastercard');
            else if (cleaned.startsWith('3')) setCardType('amex');
            else if (cleaned.startsWith('6')) setCardType('discover');
            else setCardType('');

            setFormData({ ...formData, [name]: formatted.slice(0, 19) });
        } else if (name === 'expiry') {
            // Format as MM/YY
            const cleaned = value.replace(/\D/g, '');
            if (cleaned.length >= 2) {
                setFormData({ ...formData, [name]: cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4) });
            } else {
                setFormData({ ...formData, [name]: cleaned });
            }
        } else if (name === 'cvc') {
            setFormData({ ...formData, [name]: value.replace(/\D/g, '').slice(0, 4) });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Payment details:', formData);
        // Add logic to save payment method
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-[#2B3544] rounded-lg w-full max-w-md mx-4 p-8 my-auto max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-semibold text-white mb-6">Add Payment Details</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full px-4 py-3 bg-[#1A2332] text-white placeholder-gray-500 rounded-lg border border-transparent focus:border-[#3B82F6] focus:outline-none transition-colors"
                            required
                        />
                    </div>

                    {/* Card Number */}
                    <div className="relative">
                        <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="Card Number"
                            className="w-full px-4 py-3 pr-32 bg-[#1A2332] text-white placeholder-gray-500 rounded-lg border border-transparent focus:border-[#3B82F6] focus:outline-none transition-colors"
                            required
                        />
                        {/* Card Type Logos */}
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1">
                            <img src={visa} alt="Visa" className="h-5" />
                            <img src={master} alt="Mastercard" className="h-5" />
                            <img src={amercican} alt="Amex" className="h-5" />
                            <img src={discover} alt="Discover" className="h-5" />
                        </div>
                    </div>

                    {/* Expiry and CVC */}
                    <div className="grid grid-cols-2 gap-4 mb-10">
                        <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 bg-[#1A2332] text-white placeholder-gray-500 rounded-lg border border-transparent focus:border-[#3B82F6] focus:outline-none transition-colors"
                            required
                        />
                        <div className="relative">
                            <input
                                type="text"
                                name="cvc"
                                value={formData.cvc}
                                onChange={handleChange}
                                placeholder="CVC"
                                className="w-full px-4 py-3 pr-10 bg-[#1A2332] text-white placeholder-gray-500 rounded-lg border border-transparent focus:border-[#3B82F6] focus:outline-none transition-colors"
                                required
                            />
                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                    </div>

                    {/* Add Button */}
                    <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                    >
                        Add
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddPaymentModal;
