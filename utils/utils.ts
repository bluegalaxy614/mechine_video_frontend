import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export interface DecodedToken {
  exp: number;
  [key: string]: any; // Allow additional properties
}

// Function to set the token in localStorage and Axios headers
export const setSession = (accessToken: string | null): void => {
  if (accessToken) {
    // Store token in localStorage
    localStorage.setItem('jwt_access_token', accessToken);
    // Set default Axios header
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  } else {
    // Remove token from localStorage
    localStorage.removeItem('jwt_access_token');
    // Delete the Authorization header from Axios defaults
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Function to check if the token is valid
export const isAuthTokenValid = (accessToken: string | null): boolean => {
  if (!accessToken) {
    return false;
  }

  try {
    const decoded: DecodedToken = jwtDecode<DecodedToken>(accessToken);
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
  return localStorage.getItem('jwt_access_token');
};
