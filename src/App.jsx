import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import ProfileSettings from './pages/ProfileSettings';
import ChangePassword from './pages/ChangePassword';
import Subscriptions from './pages/Subscriptions';
import LanguagePreferences from './pages/LanguagePreferences';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Subscription from './pages/Subscription';
import Payment from './pages/Payment';
import LoginScreen from './pages/LoginScreen';
import Employees from './pages/Employees';
import EmployeeDetails from './pages/EmployeeDetails';
import Missions from './pages/Missions';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Register Page - First page user sees */}
        <Route path="/" element={<Register />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<LoginScreen />} />


        {/* Dashboard and other pages with layout */}
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="employees/:employeeId" element={<EmployeeDetails />} />
          <Route path="missions" element={<Missions />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="settings/profile" element={<ProfileSettings />} />
          <Route path="settings/change-password" element={<ChangePassword />} />
          <Route path="settings/subscriptions" element={<Subscriptions />} />
          <Route path="settings/language" element={<LanguagePreferences />} />
          <Route path="settings/terms" element={<TermsConditions />} />
          <Route path="settings/privacy" element={<PrivacyPolicy />} />

        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
