import { useState } from 'react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import logo from '../assets/logo.png'
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    companyEmail: '',
    category: '',
    totalEmployees: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    navigate('/subscription');
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center gap-50">
        {/* Left Side - Logo */}
        <div className="flex flex-col items-center hidden md:block">
          <img className='w-40 h-40' src={logo} alt="AlphaOne Logo" />
        </div>

        {/* Right Side - Form */}
        <div className="w-full  md:w-2/3 lg:w-[55%]">
          <div className="bg-[#1A2332] rounded-xl shadow-2xl p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Register your Company to Alphaone
              </h2>
              <p className="text-[#8B92A7] text-sm">
                Create a company account to manage workers and missions under AlphaOne.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-[#0F1419] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-sm"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="companyEmail"
                  placeholder="Company Email"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-[#0F1419] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-sm"
                  required
                />
              </div>

              <div className="relative">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-[#0F1419] text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer text-sm"
                  required
                >
                  <option value="">Category</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
                <IoIosArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  name="totalEmployees"
                  value={formData.totalEmployees}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-[#0F1419] text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer text-sm"
                  required
                >
                  <option value="">Total Employees</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value="1000+">1000+</option>
                </select>
                <IoIosArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              <div>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-[#0F1419] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-sm"
                  required
                />
              </div>

              <Button
                fullWidth
                type="submit"
                variant="primary"

                onClick={handleSubmit}
              >
                Continue Registration
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
