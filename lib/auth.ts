import axios from 'axios';
import { RegisterData, LoginData, ForgotPasswordData,LogOutData } from '@/types/libType';

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:5000';

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

  logout: async (data : LogOutData) => {
    return axios.post(`${API_URL}/api/auth/logout`,data);
  }
};

export default authService;
