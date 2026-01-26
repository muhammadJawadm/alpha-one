import { useState } from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import { FaCreditCard } from 'react-icons/fa';
import visa from '../assets/Processor.png'
import master from '../assets/Processor-1.png'
import amercican from '../assets/Processor-2.png'
import discover from '../assets/Processor-3.png'

const Payment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment data:', formData);
    // Process payment and navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-10">
      <div className="w-full max-w-6xl flex items-center gap-4 lg:gap-10">
        {/* Left Side - Logo */}
        <div className="flex-1 flex-col items-center justify-center hidden md:flex">
          <img className="w-40 h-auto mx-auto mb-4" src={logo} alt="AlphaOne Logo" />
        </div>

        {/* Right Side - Payment Form */}
        <div className="flex-1 max-w-lg">
          <div className="bg-bg-secondary rounded-lg p-8 shadow-2xl">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Add Payment Details
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-bg-primary text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  maxLength="19"
                  className="w-full px-4 py-3 bg-bg-primary text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                  required
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1">
                  <img src={visa} alt="Visa" className="h-5" />
                  <img src={master} alt="Mastercard" className="h-5" />
                  <img src={amercican} alt="Amex" className="h-5" />
                  <img src={discover} alt="Discover" className="h-5" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <div>
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    maxLength="5"
                    className="w-full px-4 py-3 bg-bg-primary text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="cvc"
                    placeholder="CVC"
                    value={formData.cvc}
                    onChange={handleChange}
                    maxLength="4"
                    className="w-full px-4 py-3 bg-bg-primary text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                    required
                  />
                  <FaCreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <Button
                type="submit"
                fullWidth
                variant="primary"
                
              >
                Pay Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
