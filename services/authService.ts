import axios from 'axios';
import { RegisterData, LoginData, ForgotPasswordData } from '@/types/authTypes';

const API_URL = '/api/auth/';

const register = async (data: RegisterData) => {
  return axios.post(`${API_URL}register`, data);
};

const login = async (data: LoginData) => {
  return axios.post(`${API_URL}login`, data);
};

const forgotPassword = async (data: ForgotPasswordData) => {
  return axios.post(`${API_URL}forgot-password`, data);
};

export default { register, login, forgotPassword };
