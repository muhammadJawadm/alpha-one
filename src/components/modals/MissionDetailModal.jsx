const MissionDetailModal = ({ isOpen, onClose, mission }) => {
    if (!isOpen || !mission) return null;

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
                    <h2 className="text-xl font-semibold text-white">Mission Details</h2>
                </div>

                {/* Content */}
                <div className="space-y-4">
                    {/* Mission Name */}
                    <div className="w-full px-4 py-3 bg-[#1A2332] text-white rounded-lg border border-transparent">
                        {mission.missionName}
                    </div>

                    {/* Location */}
                    <div className="w-full px-4 py-3 bg-[#1A2332] text-white rounded-lg border border-transparent">
                        {mission.location}
                    </div>

                    {/* Employee Dropdown (Display Only) */}
                    <div className="relative">
                        <div className="w-full px-4 py-3 bg-[#1A2332] text-white rounded-lg border border-transparent flex items-center justify-between">
                            <span>{mission.employee}</span>
                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="w-full px-4 py-3 bg-[#1A2332] text-white rounded-lg border border-transparent">
                        {mission.date}
                    </div>

                    {/* Start Time and End Time */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="w-full px-4 py-3 bg-[#1A2332] text-white rounded-lg border border-transparent">
                            {mission.startTime}
                        </div>
                        <div className="w-full px-4 py-3 bg-[#1A2332] text-white rounded-lg border border-transparent">
                            {mission.endTime}
                        </div>
                    </div>

                    {/* Document Display */}
                    {mission.document && (
                        <div className="w-full px-4 py-3 bg-[#1A2332] text-white rounded-lg border border-transparent flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                                    <path d="M14 2v6h6M9 13h6M9 17h6" />
                                </svg>
                                <span className="text-sm">{mission.document}</span>
                            </div>
                            <button className="w-8 h-8 flex items-center justify-center bg-[#3B82F6] hover:bg-[#2563EB] rounded-full transition-colors">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Image Display */}
                    {mission.image && (
                        <div className="w-full px-4 py-3 bg-[#1A2332] text-white rounded-lg border border-transparent flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm">{mission.image}</span>
                            </div>
                            <button className="w-8 h-8 flex items-center justify-center bg-[#3B82F6] hover:bg-[#2563EB] rounded-full transition-colors">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MissionDetailModal;
