import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const LanguagePreferences = () => {
    const navigate = useNavigate();
    const [selectedLanguage, setSelectedLanguage] = useState('english');

    const handleLanguageChange = () => {
        console.log('Language changed to:', selectedLanguage);
        // Add language change logic here
        navigate('/settings');
    };

    return (
        <div>
            {/* Language Selection Card */}
            <div className="max-w-5xl mx-auto bg-[#2B3544] rounded-lg p-8">
                <h2 className="text-xl font-semibold text-white mb-6">Select Language</h2>

                <div className="space-y-4 mb-32 max-w-3xl">
                    {/* English Option */}
                    <label className="flex items-center gap-4 p-4 bg-[#1A2332] rounded-lg cursor-pointer hover:bg-[#374151] transition-colors">
                        <input
                            type="radio"
                            name="language"
                            value="english"
                            checked={selectedLanguage === 'english'}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            className="w-5 h-5 appearance-none rounded-full border-2 border-gray-500 cursor-pointer checked:border-[#3B82F6] checked:bg-[#3B82F6]"
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
                            className="w-5 h-5 appearance-none rounded-full border-2 border-gray-500 cursor-pointer checked:border-[#3B82F6] checked:bg-[#3B82F6]"
                        />
                        <span className="text-white font-medium">French</span>
                    </label>
                </div>

                {/* Change Language Button */}
                <div className="flex justify-end">
                    <Button
                        onClick={handleLanguageChange}
                        variant="primary"
                    >
                        Change Language
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LanguagePreferences;
