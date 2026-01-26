import { API_BASE_URL } from '../constants';

class ApiService {
  async login(email, password) {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email && password) {
          resolve({
            id: 1,
            name: 'John Doe',
            email: email,
            avatar: 'https://ui-avatars.com/api/?name=John+Doe'
          });
        }
      }, 1000);
    });
  }

  async fetchUserProfile() {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'John Doe',
          email: 'john@example.com',
          role: 'Administrator',
          joinedDate: '2024-01-15'
        });
      }, 500);
    });
  }

  async updateProfile(data) {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data });
      }, 1000);
    });
  }
}

export default new ApiService();
