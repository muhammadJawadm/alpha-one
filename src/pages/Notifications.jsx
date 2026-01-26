import { useNavigate } from 'react-router-dom';

const Notifications = () => {
    const navigate = useNavigate();

    // Sample notifications data
    const checkIns = [
        { id: 1, name: 'John Martinez', location: 'Downtown Corporate Plaza', time: '09:00 AM - 02:30 PM', status: 'Checked-In', statusColor: 'bg-green-500' },
        { id: 2, name: 'Sarah Chen', location: 'Downtown Corporate Plaza', time: '09:00 AM - 02:30 PM', status: 'Confirmed', statusColor: 'bg-blue-500' },
        { id: 3, name: 'David Lee', location: 'Downtown Corporate Plaza', time: '09:00 AM - 02:30 PM', status: 'Checked-In', statusColor: 'bg-green-500' },
    ];

    const alerts = [
        { id: 1, message: 'Worker did not confirm H-60 for mission at Tech Hub Building A', employee: 'Michael Rodriguez', time: '09:00 AM' },
        { id: 2, message: 'Worker did not confirm H-60 for mission at Tech Hub Building A', employee: 'Michael Rodriguez', time: '09:00 AM' },
        { id: 3, message: 'Worker did not confirm H-60 for mission at Tech Hub Building A', employee: 'Michael Rodriguez', time: '09:00 AM' },
    ];

    return (
        <div className="rounded-lg">
            {/* Notifications Container */}
            <div className="max-w-full space-y-6">
                {/* Check-ins Section */}
                {checkIns.map((checkIn) => (
                    <div
                        key={checkIn.id}
                        className="bg-[#0F1729] rounded-xl p-6 border border-[#2B3544] flex items-center justify-between hover:bg-[#2B3544]/30 transition-colors"
                    >
                        <div className="flex-1">
                            <h3 className="text-white font-semibold text-lg mb-1">{checkIn.name}</h3>
                            <p className="text-gray-400 text-sm">{checkIn.location}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <p className={`px-2 py-1 ${checkIn.statusColor} text-white text-sm font-medium rounded-full`}>
                                {checkIn.status}
                            </p>
                            <p className="text-gray-400 text-sm">{checkIn.time}</p>
                        </div>
                    </div>
                ))}

                {/* Alert Notifications */}
                {alerts.map((alert) => (
                    <div
                        key={alert.id}
                        className="bg-[#0F1729] rounded-lg p-6 border border-[#2B3544] flex items-start gap-4 hover:bg-[#2B3544]/30 transition-colors"
                    >
                        {/* Alert Icon */}
                        <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>

                        {/* Alert Content */}
                        <div className="flex-1">
                            <p className="text-white text-base mb-1">{alert.message}</p>
                            <p className="text-gray-400 text-sm">{alert.employee}</p>
                        </div>

                        {/* Alert Time */}
                        <div className="text-gray-400 text-sm pt-7">
                            {alert.time}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notifications;
