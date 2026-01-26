import { Outlet } from 'react-router-dom';
import { APP_NAME } from '../constants';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">{APP_NAME}</h1>
          <p className="text-blue-100">Your trusted application</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
