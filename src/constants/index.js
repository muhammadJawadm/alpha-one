export const APP_NAME = 'Alpha One';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  SUBSCRIPTION: '/subscription',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings',
};

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const SIDEBAR_ITEMS = [
  { name: 'Dashboards', path: '/dashboard', icon: 'dashboard' },
  { name: 'Employees', path: '/employees', icon: 'employees' },
  { name: 'Missions', path: '/missions', icon: 'missions' },
];

export const SIDEBAR_BOTTOM_ITEMS = [
  { name: 'Settings', path: '/settings', icon: 'settings' },
];

// Export colors
export { COLORS, getColor } from './colors';
