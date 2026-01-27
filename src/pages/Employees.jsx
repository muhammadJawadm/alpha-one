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
    const [openMenuId, setOpenMenuId] = useState(null);

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

    const toggleMenu = (employeeId, e) => {
        e.stopPropagation();
        setOpenMenuId(openMenuId === employeeId ? null : employeeId);
    };

    const handleViewDetails = (employee, e) => {
        e.stopPropagation();
        navigate(`/employees/${employee.id}`, { state: { email: employee.email } });
        setOpenMenuId(null);
    };

    const handleActivate = (employee, e) => {
        e.stopPropagation();
        console.log('Activating employee:', employee.name);
        // Add activation logic here
        setOpenMenuId(null);
    };

    const handleDeactivate = (employee, e) => {
        e.stopPropagation();
        console.log('Deactivating employee:', employee.name);
        // Add deactivation logic here
        setOpenMenuId(null);
    };

    const handleDelete = (employee, e) => {
        e.stopPropagation();
        console.log('Deleting employee:', employee.name);
        // Add delete confirmation and logic here
        setOpenMenuId(null);
    };

    return (
        <div>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                    onClick={() => setIsAddEmployeeModalOpen(true)}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2B78B6] hover:bg-[#3a67c7] text-white text-sm font-medium rounded-lg transition-colors w-full sm:w-auto"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add New Employee
                </button>
                <button
                    onClick={() => setIsCreateTeamModalOpen(true)}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2B78B6] hover:bg-[#3a67c7] text-white text-sm font-medium rounded-lg transition-colors w-full sm:w-auto"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create New Team
                </button>
            </div>

            {/* Employee Table */}
            <div className="bg-[#1A2332] rounded-lg overflow-hidden border border-[#2B3544]">
                {/* Make table horizontally scrollable on mobile */}
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px]">
                        <thead>
                            <tr className="border-b border-[#2B3544]">
                                <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-medium text-white border border-[#3B82F6]">Employee Id</th>
                                <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-medium text-white border border-[#3B82F6]">Name</th>
                                <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-medium text-white border border-[#3B82F6]">Team</th>
                                <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-medium text-white border border-[#3B82F6]">Email</th>
                                <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-medium text-white border border-[#3B82F6]">Status</th>
                                <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-medium text-white border border-[#3B82F6]">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee, index) => (
                                <tr
                                    key={`${employee.id}-${index}`}
                                    onClick={() => handleRowClick(employee.id, employee.email)}
                                    className="border-b border-[#2B3544] hover:bg-[#2B3544]/30 cursor-pointer transition-colors"
                                >
                                    <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-gray-300 border border-[#3B82F6]">ID # {employee.id}</td>
                                    <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-white border border-[#3B82F6]">{employee.name}</td>
                                    <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-gray-300 border border-[#3B82F6]">{employee.team}</td>
                                    <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-gray-300 border border-[#3B82F6]">{employee.email}</td>
                                    <td className="px-4 sm:px-6 py-4 border border-[#3B82F6]">
                                        <span
                                            className={`inline-block px-2 sm:px-3 py-1 text-xs font-medium rounded-full ${employee.status === 'Active'
                                                ? 'bg-[#10B981] text-white'
                                                : 'bg-[#F59E0B] text-white'
                                                }`}
                                        >
                                            {employee.status}
                                        </span>
                                    </td>
                                    <td className="px-4 sm:px-6 py-4 relative border border-[#3B82F6]">
                                        <button
                                            onClick={(e) => toggleMenu(`${employee.id}-${index}`, e)}
                                            className="p-1 hover:bg-white/10 rounded transition-colors"
                                        >
                                            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                                <circle cx="12" cy="5" r="2" />
                                                <circle cx="12" cy="12" r="2" />
                                                <circle cx="12" cy="19" r="2" />
                                            </svg>
                                        </button>

                                        {/* Dropdown Menu */}
                                        {openMenuId === `${employee.id}-${index}` && (
                                            <>
                                                {/* Backdrop to close menu */}
                                                <div
                                                    className="fixed inset-0 z-10"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setOpenMenuId(null);
                                                    }}
                                                />

                                                {/* Menu */}
                                                <div className="absolute right-0 top-full mt-1 w-56 bg-[#2B3544] rounded-lg shadow-lg border border-[#3B82F6] overflow-hidden z-20">
                                                    <button
                                                        onClick={(e) => handleViewDetails(employee, e)}
                                                        className="w-full px-4 py-3 text-left text-white hover:bg-[#374151] transition-colors border-b border-[#3B82F6] text-sm sm:text-base"
                                                    >
                                                        View Details
                                                    </button>
                                                    <button
                                                        onClick={(e) => handleActivate(employee, e)}
                                                        className="w-full px-4 py-3 text-left text-white hover:bg-[#374151] transition-colors border-b border-[#3B82F6] text-sm sm:text-base"
                                                    >
                                                        Activate
                                                    </button>
                                                    <button
                                                        onClick={(e) => handleDeactivate(employee, e)}
                                                        className="w-full px-4 py-3 text-left text-white hover:bg-[#374151] transition-colors border-b border-[#3B82F6] text-sm sm:text-base"
                                                    >
                                                        Deactivate
                                                    </button>
                                                    <button
                                                        onClick={(e) => handleDelete(employee, e)}
                                                        className="w-full px-4 py-3 text-left text-white hover:bg-[#374151] transition-colors text-sm sm:text-base"
                                                    >
                                                        Delete Permanently
                                                    </button>
                                                </div>
                                            </>
                                        )}
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
