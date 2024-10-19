import axios from 'axios';
import { RegisterData, LoginData, ForgotPasswordData } from '@/types/libType';

const API_URL = process.env.REACT_APP_API_URL || 'http://199.188.238.224:5000';

const authService = {
  register: async (data: RegisterData) => {
    return axios.post(`${API_URL}/api/auth/register`, data);
  },

  login: async (data: LoginData) => {
    return axios.post(`${API_URL}/api/auth/login`, data);
  },

  forgotPassword: async (data: ForgotPasswordData) => {
    return axios.post(`${API_URL}/api/auth/forgot-password`, data);
  },
};

// Export the named variable instead of an anonymous default export
export default authService;
