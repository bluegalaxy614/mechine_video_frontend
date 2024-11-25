import axios from 'axios';
import { RegisterData, LoginData, ForgotPasswordData } from '@/types/libType';

const API_URL = process.env.REACT_APP_API_URL || 'http://160.251.181.158';

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

export default authService;
