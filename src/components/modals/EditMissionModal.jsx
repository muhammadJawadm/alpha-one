import { useState, useEffect } from 'react';

const EditMissionModal = ({ isOpen, onClose, mission }) => {
    const [formData, setFormData] = useState({
        missionName: '',
        location: '',
        employee: '',
        date: '',
        startTime: '',
        endTime: '',
        document: null,
        image: null

    });

    // Pre-populate form with mission data when modal opens
    useEffect(() => {
        if (mission) {
            setFormData({
                missionName: mission.missionName || '',
                location: mission.location || '',
                employee: mission.employee || '',
                date: mission.date || '2026-01-09',
                startTime: mission.startTime || '11:00',
                endTime: mission.endTime || '15:00',
                document: null
            });
        }
    }, [mission]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            document: file
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            image: file
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updating mission:', formData);
        // Add your mission update logic here
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
            <div className="relative bg-[#2B3544] rounded-lg w-full max-w-md mx-4 p-6 my-auto max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-white">Edit a Mission</h2>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Mission Name */}
                    <div>
                        <input
                            type="text"
                            name="missionName"
                            value={formData.missionName}
                            onChange={handleChange}
                            placeholder="Mission Name"
                            className="w-full px-4 py-3 bg-[#1A2332] text-white placeholder-gray-500 rounded-lg border border-transparent focus:border-[#3B82F6] focus:outline-none transition-colors"
                            required
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Location"
                            className="w-full px-4 py-3 bg-[#1A2332] text-white placeholder-gray-500 rounded-lg border border-transparent focus:border-[#3B82F6] focus:outline-none transition-colors"
                            required
                        />
                    </div>

                    {/* Employee Dropdown */}
                    <div className="relative">
                        <select
                            name="employee"
                            value={formData.employee}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#1A2332] text-white placeholder-gray-500 rounded-lg border border-transparent focus:border-[#3B82F6] focus:outline-none transition-colors appearance-none cursor-pointer"
                            required
                        >
                            <option value="" className="bg-[#1A2332]">Employee</option>
                            <option value="John" className="bg-[#1A2332]">John</option>
                            <option value="Michael" className="bg-[#1A2332]">Michael</option>
                            <option value="Sarah" className="bg-[#1A2332]">Sarah</option>
                            <option value="Lucas" className="bg-[#1A2332]">Lucas</option>
                            <option value="Emma" className="bg-[#1A2332]">Emma</option>
                            <option value="David" className="bg-[#1A2332]">David</option>
                            <option value="Olivia" className="bg-[#1A2332]">Olivia</option>
                            <option value="Alice" className="bg-[#1A2332]">Alice</option>
                            <option value="Alex" className="bg-[#1A2332]">Alex</option>
                            <option value="James" className="bg-[#1A2332]">James</option>
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            name="date"
                            value={formData.date}
                            onFocus={(e) => e.target.type = 'date'} // Switch to date input when focused
                            onBlur={(e) => {
                                // If the value is empty, switch it back to text to retain placeholder
                                if (!e.target.value) e.target.type = 'text';
                            }}
                            onChange={handleChange}
                            placeholder="Select Date"
                            className="w-full px-4 py-3 bg-[#1A2332] text-white placeholder-gray-500 rounded-lg border border-transparent focus:border-[#3B82F6] focus:outline-none transition-colors"
                            required
                        />
                        {/* Date Icon */}
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#3B82F6] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>

                    {/* Start Time and End Time */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                name="startTime"
                                value={formData.startTime}
                                onFocus={(e) => e.target.type = 'time'} // Switch to time input when focused
                                onBlur={(e) => {
                                    // If the value is empty, switch it back to text to retain placeholder
                                    if (!e.target.value) e.target.type = 'text';
                                }}
                                onChange={handleChange}
                                placeholder="Start Time"
                                className="w-full px-4 py-3 bg-[#1A2332] text-white placeholder-gray-500 rounded-lg border border-transparent focus:border-[#3B82F6] focus:outline-none transition-colors"
                                required
                            />
                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#3B82F6] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                name="endTime"
                                value={formData.endTime}
                                onFocus={(e) => e.target.type = 'time'} // Switch to time input when focused
                                onBlur={(e) => {
                                    // If the value is empty, switch it back to text to retain placeholder
                                    if (!e.target.value) e.target.type = 'text';
                                }}
                                onChange={handleChange}
                                placeholder="End Time"
                                className="w-full px-4 py-3 bg-[#1A2332] text-white placeholder-gray-500 rounded-lg border border-transparent focus:border-[#3B82F6] focus:outline-none transition-colors"
                                required
                            />
                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#3B82F6] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Upload Document */}
                    <div className="relative">
                        <label className="block">
                            <div className="w-full px-4 py-2 bg-[#1A2332] rounded-lg border-2 border-dashed border-gray-600 hover:border-[#3B82F6] transition-colors cursor-pointer text-center">
                                <div className="flex flex-col items-center gap-4">
                                    <span className="text-gray-400 text-sm font-medium mb-1">Upload Document</span>
                                    <svg className="w-12 h-12 text-[#3B82F6] mb-2 p-3 bg-gray-700 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <span className="text-gray-400 text-xs">Csv (.xlsx), PDF, Excel (.csv)</span>
                                </div>
                            </div>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                accept=".csv,.xlsx,.pdf"
                                className="hidden"
                            />
                        </label>
                        {formData.document && (
                            <p className="mt-2 text-sm text-gray-300">Selected: {formData.document.name}</p>
                        )}
                    </div>

                    <div className="relative">
                        <label className="block">
                            <div className="w-full px-4 py-2 bg-[#1A2332] rounded-lg border-2 border-dashed border-gray-600 hover:border-[#3B82F6] transition-colors cursor-pointer text-center">
                                <div className="flex flex-col items-center gap-4">
                                    <span className="text-gray-400 text-sm font-medium mb-1">Upload Image</span>
                                    <svg className="w-12 h-12 text-[#3B82F6] mb-2 p-3 bg-gray-700 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <span className="text-gray-400 text-xs">Jpg, PNG, Gif, Svg</span>
                                </div>
                            </div>
                            <input
                                type="file"
                                onChange={handleImageChange}
                                accept=".jpg,.png,.gif,.svg"
                                className="hidden"
                            />
                        </label>
                        {formData.image && (
                            <p className="mt-2 text-sm text-gray-300">Selected: {formData.image.name}</p>
                        )}
                    </div>


                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium rounded-lg transition-colors mt-6"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditMissionModal;
