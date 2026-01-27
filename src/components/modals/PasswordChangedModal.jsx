const PasswordChangedModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-[#2B3544] rounded-lg w-full max-w-sm mx-4 p-8 my-auto max-h-[90vh] overflow-y-auto">
                {/* Lock Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <svg className="w-10 h-10 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Content */}
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">Password Changed</h2>
                    <p className="text-sm text-gray-400">
                        Your password has been successfully changed
                    </p>
                </div>

                {/* Continue Button */}
                <button
                    onClick={onClose}
                    className="w-full py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium rounded-lg transition-colors"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default PasswordChangedModal;
