import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LanguagePreferences = () => {
    const navigate = useNavigate();
    const [selectedLanguage, setSelectedLanguage] = useState('english');

    const handleLanguageChange = () => {
        console.log('Language changed to:', selectedLanguage);
        // Add language change logic here
        navigate('/settings');
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
                <h1 className="text-3xl font-semibold text-white">Subscriptions</h1>
            </div>

            {/* Language Selection Card */}
            <div className="max-w-2xl mx-auto bg-[#2B3544] rounded-lg p-8">
                <h2 className="text-xl font-semibold text-white mb-6">Select Language</h2>

                <div className="space-y-4 mb-8">
                    {/* English Option */}
                    <label className="flex items-center gap-4 p-4 bg-[#1A2332] rounded-lg cursor-pointer hover:bg-[#374151] transition-colors">
                        <input
                            type="radio"
                            name="language"
                            value="english"
                            checked={selectedLanguage === 'english'}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            className="w-5 h-5 text-[#3B82F6] bg-transparent border-2 border-gray-500 focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-0"
                        />
                        <span className="text-white font-medium">English</span>
                    </label>

                    {/* French Option */}
                    <label className="flex items-center gap-4 p-4 bg-[#1A2332] rounded-lg cursor-pointer hover:bg-[#374151] transition-colors">
                        <input
                            type="radio"
                            name="language"
                            value="french"
                            checked={selectedLanguage === 'french'}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            className="w-5 h-5 text-[#3B82F6] bg-transparent border-2 border-gray-500 focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-0"
                        />
                        <span className="text-white font-medium">French</span>
                    </label>
                </div>

                {/* Change Language Button */}
                <div className="flex justify-end">
                    <button
                        onClick={handleLanguageChange}
                        className="px-8 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium rounded-lg transition-colors"
                    >
                        Change Language
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LanguagePreferences;
