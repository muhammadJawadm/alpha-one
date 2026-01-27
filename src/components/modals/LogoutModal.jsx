const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
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
                {/* Content */}
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">Logout</h2>
                    <p className="text-sm text-gray-400">
                        Are you sure you want to logout?
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={onClose}
                        className="flex-1 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium rounded-lg transition-colors"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
