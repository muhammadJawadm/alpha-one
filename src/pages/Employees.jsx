import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddEmployeeModal from '../components/modals/AddEmployeeModal';
import CreateTeamModal from '../components/modals/CreateTeamModal';
import EmployeeLimitModal from '../components/modals/EmployeeLimitModal';

const Employees = () => {
    const navigate = useNavigate();
    const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
    const [isCreateTeamModalOpen, setIsCreateTeamModalOpen] = useState(false);
    const [isLimitModalOpen, setIsLimitModalOpen] = useState(false);

    // Mock employee data
    const employees = [
        { id: '354677', name: 'John', team: 'Team A', email: 'John32@gmail.com', status: 'Active' },
        { id: '354682', name: 'Michael', team: 'Team A', email: 'Michael2@gmail.com', status: 'Active' },
        { id: '354683', name: 'Sarah', team: 'Team B', email: 'Sarah@gmail.com', status: 'Pending' },
        { id: '354680', name: 'Lucas', team: 'Team B', email: 'Lucas5@gmail.com', status: 'Active' },
        { id: '354685', name: 'Emma', team: 'Team A', email: 'Emma78@gmail.com', status: 'Active' },
        { id: '354678', name: 'David', team: 'Team B', email: 'David65@gmail.com', status: 'Pending' },
        { id: '354681', name: 'Olivia', team: 'Team B', email: 'Olivia@gmail.com', status: 'Active' },
        { id: '354684', name: 'Alice', team: 'Team A', email: 'Alice@gmail.com', status: 'Active' },
        { id: '354679', name: 'John', team: 'Team B', email: 'John32@gmail.com', status: 'Active' },
        { id: '354677', name: 'James', team: 'Team A', email: 'James@gmail.com', status: 'Active' },
    ];

    const handleRowClick = (employeeId, email) => {
        navigate(`/employees/${employeeId}`, { state: { email } });
    };

    return (
        <div className="min-h-screen bg-[#0F1729] p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-semibold text-white mb-2">Employees</h1>
                <p className="text-gray-400 text-sm">Manage employees and their access to AlphaOne</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
                <button
                    onClick={() => setIsAddEmployeeModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium rounded-lg transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add New Employee
                </button>
                <button
                    onClick={() => setIsCreateTeamModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium rounded-lg transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create New Team
                </button>
            </div>

            {/* Employee Table */}
            <div className="bg-[#1A2332] rounded-lg overflow-hidden border border-[#2B3544]">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#2B3544]">
                                <th className="px-6 py-4 text-left text-sm font-medium text-white">Employee Id</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white">Name</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white">Team</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white">Email</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee, index) => (
                                <tr
                                    key={`${employee.id}-${index}`}
                                    onClick={() => handleRowClick(employee.id, employee.email)}
                                    className="border-b border-[#2B3544] hover:bg-[#2B3544]/30 cursor-pointer transition-colors"
                                >
                                    <td className="px-6 py-4 text-sm text-gray-300">ID # {employee.id}</td>
                                    <td className="px-6 py-4 text-sm text-white">{employee.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-300">{employee.team}</td>
                                    <td className="px-6 py-4 text-sm text-gray-300">{employee.email}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${employee.status === 'Active'
                                                    ? 'bg-green-500/20 text-green-400'
                                                    : 'bg-orange-500/20 text-orange-400'
                                                }`}
                                        >
                                            {employee.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                console.log('Actions for', employee.name);
                                            }}
                                            className="p-1 hover:bg-white/10 rounded transition-colors"
                                        >
                                            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                                <circle cx="12" cy="5" r="2" />
                                                <circle cx="12" cy="12" r="2" />
                                                <circle cx="12" cy="19" r="2" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modals */}
            <AddEmployeeModal
                isOpen={isAddEmployeeModalOpen}
                onClose={() => setIsAddEmployeeModalOpen(false)}
            />
            <CreateTeamModal
                isOpen={isCreateTeamModalOpen}
                onClose={() => setIsCreateTeamModalOpen(false)}
            />
            <EmployeeLimitModal
                isOpen={isLimitModalOpen}
                onClose={() => setIsLimitModalOpen(false)}
            />
        </div>
    );
};

export default Employees;
