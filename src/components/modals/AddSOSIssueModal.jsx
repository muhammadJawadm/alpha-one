import React, { useState } from 'react';
import Button from '../common/Button';

const AddSOSIssueModal = ({ onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [issue, setIssue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && issue.trim()) {
            onSubmit({ name, issue });
            setName('');
            setIssue('');
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 p-5 overflow-y-auto"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            onClick={onClose}
        >
            <div
                className="bg-[#2A3441] rounded-xl shadow-2xl p-10 w-full max-w-md my-auto max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-6 ">
                    <h2 className="text-xl font-semibold text-white">Incident Report</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="John Martinez"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-[#0F1419] text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Issue Textarea */}
                    <div className="mb-6">
                        <textarea
                            placeholder="Mission completion time is less. We need more time to complete the construction"
                            value={issue}
                            onChange={(e) => setIssue(e.target.value)}
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg bg-[#0F1419] text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    {/* <Button
                        type="submit"
                        fullWidth
                        variant="primary"
                    >
                        Submit Report
                    </Button> */}
                </form>
            </div>
        </div>
    );
};

export default AddSOSIssueModal;
