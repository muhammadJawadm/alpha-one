import { useState, useEffect } from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import apiService from '../services/api';
import { formatDate } from '../utils/helpers';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const data = await apiService.fetchUserProfile();
    setProfile(data);
    setFormData({
      name: data.name,
      email: data.email,
      role: data.role,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await apiService.updateProfile(formData);
    setProfile({ ...profile, ...formData });
    setIsEditing(false);
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Profile</h1>
        <p className="text-gray-400 mt-1">Manage your personal information</p>
      </div>

      <Card
        title="Personal Information"
        headerAction={
          !isEditing && (
            <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
              Edit Profile
            </Button>
          )
        }
      >
        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            />
            <div className="flex space-x-3">
              <Button type="submit" variant="primary">
                Save Changes
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setIsEditing(false);
                  setFormData({
                    name: profile.name,
                    email: profile.email,
                    role: profile.role,
                  });
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src={'https://ui-avatars.com/api/?name=' + encodeURIComponent(profile.name) + '&background=3B82F6&color=fff'}
                alt={profile.name}
                className="h-20 w-20 rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold text-white">{profile.name}</h3>
                <p className="text-gray-400">{profile.email}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div>
                <p className="text-sm text-gray-400">Role</p>
                <p className="text-base font-medium text-white">{profile.role}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Joined Date</p>
                <p className="text-base font-medium text-white">{formatDate(profile.joinedDate)}</p>
              </div>
            </div>
          </div>
        )}
      </Card>

      <Card title="Account Statistics">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">24</p>
            <p className="text-sm text-gray-400 mt-1">Projects Created</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-400">87%</p>
            <p className="text-sm text-gray-400 mt-1">Completion Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-400">156</p>
            <p className="text-sm text-gray-400 mt-1">Tasks Completed</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
