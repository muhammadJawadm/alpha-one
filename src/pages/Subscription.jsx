import { useState } from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const Subscription = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 'starter',
      name: 'Starter Plan',
      agents: 'up to 20 Agents',
      price: 59.99,
      description: 'Ideal for small teams managing daily operations'
    },
    {
      id: 'pro',
      name: 'Pro Plan',
      agents: 'up to 50 Agents',
      price: 99.99,
      description: 'Designed for growing teams with higher mission volume'
    }
  ];

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
    console.log('Selected plan:', planId);
    // Navigate to dashboard or next step
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="mb-16">
        <img className="w-40 h-auto mx-auto mb-4" src={logo} alt="AlphaOne Logo" />
        
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-black/20 border border-[#2B78B6] rounded-lg p-8 shadow-xl hover:border-blue-500 transition-colors"
          >
            <div className="mb-3">
              <h2 className="text-2xl font-bold text-white mb-3">{plan.name}</h2>
              <p className="text-gray-400 text-sm mt-2">{plan.agents}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400 ml-2">/ month</span>
              </div>
            </div>

            <p className="text-gray-300 mb-8 min-h-12">
              {plan.description}
            </p>

            <Button
              onClick={() => handleSelectPlan(plan.id)}
              fullWidth
              variant="primary"
            >
              Select
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
