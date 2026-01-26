import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSettings = () => {
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState({
        companyName: 'Acne Constructions',
        email: 'company@gmail.com',
        companyType: 'Construction Company',
        employees: '30 Employees',
        location: 'Seine-Maritime'
    });

    const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({
            ...profileData,
            [name]: value
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        console.log('Saving profile data:', profileData);
        // Add save logic here
    };

    return (
        <div className="min-h-screen bg-[#0F1729] p-8">
            {/* Header with Back Button */}
            <div className="mb-8 flex items-center gap-4">
                <button
                    onClick={() => navigate('/settings')}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="text-3xl font-semibold text-white">Profile Setting</h1>
            </div>

            {/* Profile Form Card */}
            <div className="max-w-2xl mx-auto bg-[#2B3544] rounded-lg p-8">
                <form onSubmit={handleSave} className="space-y-6">
                    {/* Profile Picture */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                            <label className="absolute bottom-0 right-0 bg-[#3B82F6] hover:bg-[#2563EB] p-2 rounded-full cursor-pointer transition-colors">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </div>

                    {/* Company Name */}
                    <div>
                        <input
                            type="text"
                            name="companyName"
                            value={profileData.companyName}
                            onChange={handleChange}
                            placeholder="Company Name"
                            className="w-full px-4 py-3 bg-[#1A2332] text-white placeholder-gray-500 rounded-lg border border-transparent focus:border-[#3B82F6] focus:outline-none transition-colors"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full px-4 py-3 bg-[#1A2332] text-white placeholder-gray-500 rounded-lg border border-transparent focus:border-[#3B82F6] focus:outline-none transition-colors"
                            required
                        />
                    </div>

                    {/* Company Type */}
                    <div>
                        <input
                            type="text"
                            name="companyType"
                            value={profileData.companyType}
                            onChange={handleChange}
                            placeholder="Company Type"
                            className="w-full px-4 py-3 bg-[#1A2332] text-white placeholder-gray-500 rounded-lg border border-transparent focus:border-[#3B82F6] focus:outline-none transition-colors"
                            required
                        />
                    </div>

                    {/* Number of Employees Dropdown */}
                    <div className="relative">
                        <select
                            name="employees"
                            value={profileData.employees}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#1A2332] text-white placeholder-gray-500 rounded-lg border border-transparent focus:border-[#3B82F6] focus:outline-none transition-colors appearance-none cursor-pointer"
                            required
                        >
                            <option value="1-10 Employees" className="bg-[#1A2332]">1-10 Employees</option>
                            <option value="20 Employees" className="bg-[#1A2332]">20 Employees</option>
                            <option value="30 Employees" className="bg-[#1A2332]">30 Employees</option>
                            <option value="50 Employees" className="bg-[#1A2332]">50 Employees</option>
                            <option value="100+ Employees" className="bg-[#1A2332]">100+ Employees</option>
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    {/* Location */}
                    <div>
                        <input
                            type="text"
                            name="location"
                            value={profileData.location}
                            onChange={handleChange}
                            placeholder="Location"
                            className="w-full px-4 py-3 bg-[#1A2332] text-white placeholder-gray-500 rounded-lg border border-transparent focus:border-[#3B82F6] focus:outline-none transition-colors"
                            required
                        />
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium rounded-lg transition-colors"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileSettings;
