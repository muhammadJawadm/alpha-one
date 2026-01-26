const EmployeeLimitModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-[#2B3544] rounded-lg w-full max-w-md mx-4 p-8">
                {/* Warning Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
                        <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Content */}
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">Employees Limit Reached</h2>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Your current subscription plan has reached its maximum number of employees. Upgrade your plan to add more employees.
                    </p>
                </div>

                {/* View Plans Button */}
                <button
                    onClick={() => {
                        console.log('Navigate to plans page');
                        // Add navigation to plans/subscription page
                        onClose();
                    }}
                    className="w-full py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium rounded-lg transition-colors"
                >
                    View Plans
                </button>
            </div>
        </div>
    );
};

export default EmployeeLimitModal;
