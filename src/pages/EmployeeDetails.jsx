import { useState, useRef, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import EditMissionModal from '../components/modals/EditMissionModal';

const EmployeeDetails = () => {
    const { employeeId } = useParams();
    const location = useLocation();
    const email = location.state?.email || 'John32@gmail.com';
    const [searchQuery, setSearchQuery] = useState('');
    const [openMenuIndex, setOpenMenuIndex] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedMission, setSelectedMission] = useState(null);
    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenuIndex(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Mock mission data
    const missions = [
        {
            missionName: 'Construction',
            location: 'Site A – Downtow...',
            h60: 'Acknowledged',
            h0: 'Check-In',
            startTime: '09:00 AM',
            endTime: '02:30 PM'
        },
        {
            missionName: 'Project Management',
            location: 'Site E – Coastal Ha...',
            h60: 'Inactive',
            h0: 'Check-In',
            startTime: '11:30 AM',
            endTime: '03:30 PM'
        },
        {
            missionName: 'Safety Standards',
            location: 'Site G – Green Vall...',
            h60: 'Acknowledged',
            h0: 'Missed',
            startTime: '12:00 PM',
            endTime: '04:00 PM'
        },
        {
            missionName: 'Sustainability',
            location: 'Site D – Mountain...',
            h60: 'Acknowledged',
            h0: 'Check-In',
            startTime: '11:00 AM',
            endTime: '03:00 PM'
        },
        {
            missionName: 'Urban Planning',
            location: 'Site F – Urban Hei...',
            h60: 'Acknowledged',
            h0: 'Check-In',
            startTime: '12:30 PM',
            endTime: '05:00 PM'
        },
        {
            missionName: 'Engineering',
            location: 'Site C – Riverside...',
            h60: 'Acknowledged',
            h0: 'Missed',
            startTime: '10:00 AM',
            endTime: '05:30 PM'
        },
        {
            missionName: 'Building Materials',
            location: 'Site H – Historic Ol...',
            h60: 'Inactive',
            h0: 'Check-In',
            startTime: '01:00 PM',
            endTime: '06:00 PM'
        },
        {
            missionName: 'Architecture',
            location: 'Site B – City Cente...',
            h60: 'Acknowledged',
            h0: 'Missed',
            startTime: '09:30 AM',
            endTime: '04:30 PM'
        },
        {
            missionName: 'Cost Estimation',
            location: 'Site I – Suburban S...',
            h60: 'Acknowledged',
            h0: 'Missed',
            startTime: '10:30 AM',
            endTime: '06:30 PM'
        },
        {
            missionName: 'Construction',
            location: 'Site A – Downtow...',
            h60: 'Acknowledged',
            h0: 'Check-In',
            startTime: '09:00 AM',
            endTime: '02:30 PM'
        },
    ];

    const handleEdit = (mission, index) => {
        setSelectedMission(mission);
        setOpenMenuIndex(null);
        setIsEditModalOpen(true);
    };

    const handleDelete = (mission, index) => {
        console.log('Delete mission:', mission);
        setOpenMenuIndex(null);
        // Add your delete logic here
    };

    const toggleMenu = (index) => {
        setOpenMenuIndex(openMenuIndex === index ? null : index);
    };

    const getStatusBadge = (status) => {
        const statusStyles = {
            'Acknowledged': 'bg-[#3B82F6] text-white',
            'Check-In': 'bg-[#10B981] text-white',
            'Missed': 'bg-[#EF4444] text-white',
            'Inactive': 'bg-[#94A3B8] text-white'
        };

        return (
            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${statusStyles[status]}`}>
                {status}
            </span>
        );
    };

    const filteredMissions = missions.filter(mission =>
        mission.missionName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mission.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-2 w-full">
            {/* Header */}
            <div className="mb-8">
                <p className="text-gray-400 text-sm">
                    ID # {employeeId} | {email}
                </p>
            </div>

            {/* Search and Date */}
            <div className="flex items-center justify-between mb-6 gap-4">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                    <svg
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search Missions"
                        className="w-full pl-10 pr-4 py-2.5 bg-[#1A2332] text-white placeholder-gray-500 rounded-lg border border-transparent focus:border-[#3B82F6] focus:outline-none transition-colors"
                    />
                </div>

                {/* Date Display */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1A2332] rounded-lg border border-[#2B3544]">
                    <svg className="w-5 h-5 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-white text-sm font-medium">01/15/2026</span>
                </div>
            </div>

            {/* Mission Table */}
            <div className="bg-[#1A2332] rounded-lg overflow-hidden border border-[#2B3544]">
                <div className="overflow-x-auto">
                    <table className="w-[93%]">
                        <thead>
                            <tr className="border-b border-[#2B3544]">
                                <th className="px-6 py-4 text-left text-sm font-medium text-white border border-[#3B82F6]">Mission Name</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white border border-[#3B82F6]">Location</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white border border-[#3B82F6]">H-60</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white border border-[#3B82F6]">H-0</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white border border-[#3B82F6]">Start Time</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white border border-[#3B82F6]">End Time</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white border border-[#3B82F6]">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMissions.map((mission, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-[#2B3544] hover:bg-[#2B3544]/30 transition-colors"
                                >
                                    <td className="px-6 py-4 text-sm text-white border border-[#3B82F6]">{mission.missionName}</td>
                                    <td className="px-6 py-4 text-sm text-gray-300 border border-[#3B82F6]">{mission.location}</td>
                                    <td className="px-6 py-4 border border-[#3B82F6]">{getStatusBadge(mission.h60)}</td>
                                    <td className="px-6 py-4 border border-[#3B82F6]">{getStatusBadge(mission.h0)}</td>
                                    <td className="px-6 py-4 text-sm text-gray-300 border border-[#3B82F6]">{mission.startTime}</td>
                                    <td className="px-6 py-4 text-sm text-gray-300 border border-[#3B82F6]">{mission.endTime}</td>
                                    <td className="px-6 py-4 border border-[#3B82F6]">
                                        <div className="relative" ref={openMenuIndex === index ? menuRef : null}>
                                            <button
                                                onClick={() => toggleMenu(index)}
                                                className="p-1 hover:bg-white/10 rounded transition-colors"
                                            >
                                                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <circle cx="12" cy="5" r="2" />
                                                    <circle cx="12" cy="12" r="2" />
                                                    <circle cx="12" cy="19" r="2" />
                                                </svg>
                                            </button>

                                            {/* Popup Menu */}
                                            {openMenuIndex === index && (
                                                <div className="absolute left-36 top-0 z-50 pl-2 justify-center items-center w-24 bg-[#1A2332] border border-[#3B82F6] rounded-lg shadow-lg overflow-hidden">
                                                    <button
                                                        onClick={() => handleEdit(mission, index)}
                                                        className="w-full px-5 py-4 text-left text-sm  text-white hover:bg-[#3B82F6] transition-colors flex items-center gap-2"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(mission, index)}
                                                        className="w-full px-4 py-3 text-left text-sm text-white hover:bg-[#EF4444] transition-colors flex items-center gap-2 border-t border-[#2B3544]"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Edit Mission Modal */}
            <EditMissionModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                mission={selectedMission}
            />
        </div>
    );
};

export default EmployeeDetails;
