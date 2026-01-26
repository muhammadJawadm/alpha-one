import { Link, useLocation } from 'react-router-dom';
import { SIDEBAR_ITEMS, SIDEBAR_BOTTOM_ITEMS } from '../../constants';
import { classNames } from '../../utils/helpers';
import logo from '../../assets/logo2.png';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  // Icon components
  const DashboardIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );

  const EmployeesIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const MissionsIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );

  const SettingsIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'dashboard': return <DashboardIcon />;
      case 'employees': return <EmployeesIcon />;
      case 'missions': return <MissionsIcon />;
      case 'settings': return <SettingsIcon />;
      default: return null;
    }
  };

  return (
    <aside className={`
      w-52 bg-[#1A2332] h-screen flex flex-col overflow-hidden
      fixed md:relative z-40
      transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      {/* Logo Section */}
      <div className="p-6 pb-8 flex-shrink-0 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="AlphaOne Logo" className="w-40 h-12" />
        </div>

        {/* Close button - Only visible on mobile */}
        <button
          onClick={onClose}
          className="md:hidden text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main Navigation - Scrollable */}
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose} // Close sidebar on mobile when link is clicked
              className={classNames(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm',
                isActive
                  ? 'bg-[#2B78B6] text-white font-medium'
                  : 'text-gray-400 hover:bg-[#3a67c7] hover:text-gray-200'
              )}
            >
              {getIcon(item.icon)}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Navigation (Settings) - Always Visible */}
      <div className="px-4 pb-6 space-y-1 flex-shrink-0">
        {SIDEBAR_BOTTOM_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose} // Close sidebar on mobile when link is clicked
              className={classNames(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm',
                isActive
                  ? 'bg-[#2563EB] text-white font-medium'
                  : 'text-gray-400 hover:bg-[#243447] hover:text-gray-200'
              )}
            >
              {getIcon(item.icon)}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
