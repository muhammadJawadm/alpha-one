import { useState } from 'react';

const CreateTeamModal = ({ isOpen, onClose }) => {
    const [teamName, setTeamName] = useState('');
    const [selectedMembers, setSelectedMembers] = useState(['Alex', 'Kim']);
    const [code, setCode] = useState('');
    const [showMemberDropdown, setShowMemberDropdown] = useState(false);

    // Mock available members - in real app this would come from props or API
    const availableMembers = ['Alex', 'Kim', 'John', 'Sarah', 'Michael', 'Emma', 'David', 'Olivia'];

    const handleRemoveMember = (memberToRemove) => {
        setSelectedMembers(selectedMembers.filter(member => member !== memberToRemove));
    };

    const handleAddMember = (member) => {
        if (!selectedMembers.includes(member)) {
            setSelectedMembers([...selectedMembers, member]);
        }
        setShowMemberDropdown(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Creating team:', { teamName, selectedMembers, code });
        // Add your team creation logic here
        onClose();
        setTeamName('');
        setSelectedMembers(['Alex', 'Kim']);
        setCode('');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-[#2B3544] rounded-lg w-full max-w-md mx-4 p-6">
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
                    <h2 className="text-xl font-semibold text-white mb-2">Create Team</h2>
                    <p className="text-sm text-gray-400">Manage your employee's team</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Team Name */}
                    <div>
                        <input
                            type="text"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                            placeholder="Team A"
                            className="w-full px-4 py-3 bg-[#1A2332] text-white placeholder-gray-500 rounded-lg border border-transparent focus:border-[#3B82F6] focus:outline-none transition-colors"
                            required
                        />
                    </div>

                    {/* Member Selection with Tags */}
                    <div className="relative">
                        <div
                            onClick={() => setShowMemberDropdown(!showMemberDropdown)}
                            className="w-full min-h-[48px] px-4 py-2 bg-[#1A2332] text-white rounded-lg border border-transparent focus-within:border-[#3B82F6] cursor-pointer"
                        >
                            <div className="flex flex-wrap gap-2 items-center">
                                {selectedMembers.map((member) => (
                                    <span
                                        key={member}
                                        className="inline-flex items-center gap-1 px-2 py-1 bg-[#2B3544] text-white text-sm rounded"
                                    >
                                        {member}
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleRemoveMember(member);
                                            }}
                                            className="hover:text-red-400 transition-colors"
                                        >
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </span>
                                ))}
                                {selectedMembers.length === 0 && (
                                    <span className="text-gray-500 text-sm">Select members</span>
                                )}
                                <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* Dropdown */}
                        {showMemberDropdown && (
                            <div className="absolute z-10 w-full mt-1 bg-[#1A2332] rounded-lg border border-gray-600 max-h-48 overflow-y-auto">
                                {availableMembers
                                    .filter(member => !selectedMembers.includes(member))
                                    .map((member) => (
                                        <div
                                            key={member}
                                            onClick={() => handleAddMember(member)}
                                            className="px-4 py-2 hover:bg-[#2B3544] cursor-pointer text-white text-sm"
                                        >
                                            {member}
                                        </div>
                                    ))}
                                {availableMembers.filter(member => !selectedMembers.includes(member)).length === 0 && (
                                    <div className="px-4 py-2 text-gray-500 text-sm">All members selected</div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Code */}
                    <div>
                        <input
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="Code"
                            className="w-full px-4 py-3 bg-[#1A2332] text-white placeholder-gray-500 rounded-lg border border-transparent focus:border-[#3B82F6] focus:outline-none transition-colors"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium rounded-lg transition-colors mt-6"
                    >
                        Add Employee
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateTeamModal;
