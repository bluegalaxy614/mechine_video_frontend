import axios from 'axios';
import { RegisterData, LoginData, ForgotPasswordData } from '@/types/libType';

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const register = async (data: RegisterData) => {
  return axios.post(`${API_URL}/api/auth/register`, data);
};

const login = async (data: LoginData) => {
  return axios.post(`${API_URL}/api/auth/login`, data);
};

const forgotPassword = async (data: ForgotPasswordData) => {
  return axios.post(`${API_URL}/api/auth/forgot-password`, data);
};

export default { register, login, forgotPassword };
