import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ onToggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define page titles and subtitles based on routes
  const getPageInfo = () => {
    const path = location.pathname;

    if (path === '/dashboard') return { title: 'Dashboards', subtitle: 'Monitor employee operations in Realtime', showBack: false };
    if (path === '/employees') return { title: 'Employees', subtitle: 'Manage employees and their access to AlphaOne', showBack: false };
    if (path === '/missions') return { title: 'Missions', subtitle: 'Track ongoing missions', showBack: false };
    if (path === '/notifications') return { title: 'Alerts and Notifications', subtitle: 'Monitor employee operations in Realtime', showBack: false };
    if (path === '/profile') return { title: 'Profile', subtitle: 'Manage your profile', showBack: false };
    if (path === '/settings') return { title: 'Settings', subtitle: 'Manage account preferences', showBack: false };
    if (path === '/settings/profile') return { title: 'Profile Setting', subtitle: '', showBack: true };
    if (path === '/settings/change-password') return { title: 'Change Password', subtitle: '', showBack: true };
    if (path === '/settings/subscriptions') return { title: 'Subscriptions', subtitle: '', showBack: true };
    if (path === '/settings/language') return { title: 'Subscriptions', subtitle: '', showBack: true };
    if (path === '/settings/terms') return { title: 'Terms & Conditions', subtitle: '', showBack: true };
    if (path === '/settings/privacy') return { title: 'Privacy Policy', subtitle: '', showBack: true };
    if (path.startsWith('/employees/')) return { title: 'Employee Details', subtitle: '', showBack: true };

    return { title: 'Dashboards', subtitle: 'Monitor employee operations in Realtime', showBack: false };
  };

  const { title, subtitle, showBack } = getPageInfo();

  const handleBack = () => {
    if (location.pathname.startsWith('/settings/')) {
      navigate('/settings');
    } else {
      navigate(-1);
    }
  };

  return (
    <nav className="border-gray-700/50">
      <div className="px-8 py-5">
        <div className="flex justify-between items-center">
          {/* Page Title and Subtitle */}
          <div className="flex items-center gap-4">
            {/* Hamburger Menu Button - Only visible on screens below lg */}
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {showBack && (
              <button
                onClick={handleBack}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <div>
              <h1 className="text-2xl font-bold text-white">{title}</h1>
              {subtitle && <p className="text-sm text-gray-400 mt-1">{subtitle}</p>}
            </div>
          </div>

          {/* Right Section - Notification & User */}
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <button
              onClick={() => navigate('/notifications')}
              className="relative p-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            {/* User Avatar */}
            <div className="w-10 h-10 bg-[#2B78B6] rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">A</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
