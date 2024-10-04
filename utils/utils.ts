import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '@/types/libType';

// Function to set the token in localStorage and Axios headers
export const setSession = (access_token: string | null): void => {
  if (access_token) {
    // Store token in localStorage
    localStorage.setItem('jwt_access_token', access_token);
    // Set default Axios header
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
  } else {
    // Remove token from localStorage
    localStorage.removeItem('jwt_access_token');
    // Delete the Authorization header from Axios defaults
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Function to check if the token is valid
export const isAuthTokenValid = (access_token: string | null): boolean => {
  if (!access_token) {
    return false;
  }

  try {
    const decoded: DecodedToken = jwtDecode(access_token);
    const currentTime = Date.now() / 1000; // Current time in seconds

    if (decoded.exp < currentTime) {
      console.warn('Access token expired');
      return false;
    }

    return true;
  } catch (error) {
    console.error('Invalid token', error);
    return false;
  }
};

// Function to get the token from localStorage
export const getAccessToken = (): string | null => {
  return window.localStorage.getItem('jwt_access_token');
};
