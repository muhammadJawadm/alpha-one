import { useState } from 'react';
import CreateMissionModal from '../components/modals/CreateMissionModal';
import EditMissionModal from '../components/modals/EditMissionModal';
import DeleteMissionModal from '../components/modals/DeleteMissionModal';
import MissionDetailModal from '../components/modals/MissionDetailModal';

const Missions = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [selectedMission, setSelectedMission] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [openActionMenu, setOpenActionMenu] = useState(null);

    // Mock mission data
    const [missions, setMissions] = useState([
        {
            id: 1,
            missionName: 'Construction',
            location: 'Site A – Downtown Plaza',
            employee: 'Alex',
            h60: 'Acknowledged',
            h0: 'Check-In',
            startTime: '11:00 AM',
            endTime: '03:00 PM',
            date: '01/09/2026',
            document: 'Mission2.pdf',
            image: 'Construction img.png'
        },
        {
            id: 2,
            missionName: 'Project Management',
            location: 'Site E – Coastal Harbor',
            employee: 'Michael',
            h60: 'Inactive',
            h0: 'Check-In',
            startTime: '11:30 AM',
            endTime: '03:30 PM',
            date: '2026-01-09'
        },
        {
            id: 3,
            missionName: 'Safety Standards',
            location: 'Site G – Green Valley',
            employee: 'Sarah',
            h60: 'Acknowledged',
            h0: 'Missed',
            startTime: '12:00 PM',
            endTime: '04:00 PM',
            date: '2026-01-09'
        },
        {
            id: 4,
            missionName: 'Sustainability',
            location: 'Site D – Mountain Ridge',
            employee: 'Lucas',
            h60: 'Acknowledged',
            h0: 'Check-In',
            startTime: '11:00 AM',
            endTime: '03:00 PM',
            date: '2026-01-09'
        },
        {
            id: 5,
            missionName: 'Urban Planning',
            location: 'Site F – Urban Heights',
            employee: 'Emma',
            h60: 'Acknowledged',
            h0: 'Check-In',
            startTime: '12:30 PM',
            endTime: '05:00 PM',
            date: '2026-01-09'
        },
        {
            id: 6,
            missionName: 'Engineering',
            location: 'Site C – Riverside Park',
            employee: 'David',
            h60: 'Acknowledged',
            h0: 'Missed',
            startTime: '10:00 AM',
            endTime: '05:30 PM',
            date: '2026-01-09'
        },
        {
            id: 7,
            missionName: 'Building Materials',
            location: 'Site H – Historic District',
            employee: 'Olivia',
            h60: 'Inactive',
            h0: 'Check-In',
            startTime: '01:00 PM',
            endTime: '06:00 PM',
            date: '2026-01-09'
        },
        {
            id: 8,
            missionName: 'Architecture',
            location: 'Site B – City Center',
            employee: 'Alice',
            h60: 'Acknowledged',
            h0: 'Missed',
            startTime: '09:30 AM',
            endTime: '04:30 PM',
            date: '2026-01-09'
        },
        {
            id: 9,
            missionName: 'Cost Estimation',
            location: 'Site I – Suburban Square',
            employee: 'John',
            h60: 'Acknowledged',
            h0: 'Missed',
            startTime: '10:30 AM',
            endTime: '06:30 PM',
            date: '2026-01-09'
        },
        {
            id: 10,
            missionName: 'Construction',
            location: 'Site A – Downtown Plaza',
            employee: 'James',
            h60: 'Acknowledged',
            h0: 'Check-In',
            startTime: '09:00 AM',
            endTime: '02:30 PM',
            date: '2026-01-09'
        },
    ]);

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

    const handleViewDetails = (mission) => {
        setSelectedMission(mission);
        setIsDetailModalOpen(true);
        setOpenActionMenu(null);
    };

    const handleEdit = (mission) => {
        setSelectedMission(mission);
        setIsEditModalOpen(true);
        setOpenActionMenu(null);
    };

    const handleDelete = (mission) => {
        setSelectedMission(mission);
        setIsDeleteModalOpen(true);
        setOpenActionMenu(null);
    };

    const confirmDelete = () => {
        if (selectedMission) {
            setMissions(missions.filter(m => m.id !== selectedMission.id));
            setSelectedMission(null);
        }
    };

    const handleImportFile = () => {
        console.log('Import file clicked');
        // Add import file logic here
    };

    const filteredMissions = missions.filter(mission =>
        mission.missionName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mission.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mission.employee.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {/* Header */}

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#2B78B6] hover:bg-[#3a67c7] text-white text-sm font-medium rounded-lg transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create New Mission
                </button>
                <button
                    onClick={handleImportFile}
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#2B78B6] hover:bg-[#3a67c7] text-white text-sm font-medium rounded-lg transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    Import File
                </button>
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
                                <th className="px-6 py-4 text-left text-sm font-medium text-white border border-[#3B82F6]">Employee</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white border border-[#3B82F6]">H-60</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white border border-[#3B82F6]">H-0</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white border border-[#3B82F6]">Start Time</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white border border-[#3B82F6]">End Time</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white border border-[#3B82F6]">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMissions.map((mission) => (
                                <tr
                                    key={mission.id}
                                    onClick={() => handleViewDetails(mission)}
                                    className="border-b border-[#2B3544] hover:bg-[#2B3544]/30 transition-colors cursor-pointer"
                                >
                                    <td className="px-6 py-4 text-sm text-white border border-[#3B82F6]">{mission.missionName}</td>
                                    <td className="px-6 py-4 text-sm text-gray-300 border border-[#3B82F6]">{mission.location}</td>
                                    <td className="px-6 py-4 text-sm text-gray-300 border border-[#3B82F6]">{mission.employee}</td>
                                    <td className="px-6 py-4 border border-[#3B82F6]">{getStatusBadge(mission.h60)}</td>
                                    <td className="px-6 py-4 border border-[#3B82F6]">{getStatusBadge(mission.h0)}</td>
                                    <td className="px-6 py-4 text-sm text-gray-300 border border-[#3B82F6]">{mission.startTime}</td>
                                    <td className="px-6 py-4 text-sm text-gray-300 border border-[#3B82F6]">{mission.endTime}</td>
                                    <td className="px-6 py-4 relative border border-[#3B82F6]">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setOpenActionMenu(openActionMenu === mission.id ? null : mission.id);
                                            }}
                                            className="p-1 hover:bg-white/10 rounded transition-colors"
                                        >
                                            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                                <circle cx="12" cy="5" r="2" />
                                                <circle cx="12" cy="12" r="2" />
                                                <circle cx="12" cy="19" r="2" />
                                            </svg>
                                        </button>

                                        {/* Action Dropdown */}
                                        {openActionMenu === mission.id && (
                                            <div className="absolute left-36 mt-2 w-24 bg-[#2B3544] rounded-lg shadow-lg border border-gray-600 z-10">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                    }}
                                                    className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10 transition-colors rounded-b-lg"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleEdit(mission);
                                                    }}
                                                    className="w-full px-4 py-2 text-left text-sm text-white hover:bg-[#3B82F6] transition-colors rounded-t-lg"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDelete(mission);
                                                    }}
                                                    className="w-full px-4 py-2 text-left text-sm text-white hover:bg-red-500/20 transition-colors rounded-b-lg"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modals */}
            <MissionDetailModal
                isOpen={isDetailModalOpen}
                onClose={() => setIsDetailModalOpen(false)}
                mission={selectedMission}
            />
            <CreateMissionModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
            />
            <EditMissionModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                mission={selectedMission}
            />
            <DeleteMissionModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                missionName={selectedMission?.missionName}
            />
        </div>
    );
};

export default Missions;
