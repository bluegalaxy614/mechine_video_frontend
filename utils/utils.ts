import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Make sure to use this correctly without destructuring

// Interface for decoded JWT token
export interface DecodedToken {
  exp: number;
  [key: string]: any; // Allow additional properties
}

// Function to set session by storing access token and adding it to axios headers
export const setSession = (accessToken: string | null): void => {
  if (typeof window !== 'undefined' && accessToken) {
    // Check if in the browser
    console.log('Setting access token:', accessToken);
    localStorage.setItem('jwt_access_token', accessToken); // Store token in localStorage
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`; // Set axios header
  } else if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt_access_token'); // Remove token if not provided
    delete axios.defaults.headers.common['Authorization']; // Remove axios header
  }
};

// Function to check if the access token is still valid
export const isAuthTokenValid = (accessToken: string | null): boolean => {
  if (!accessToken) {
    return false; // Return false if no token is provided
  }

  try {
    const decoded: DecodedToken = jwtDecode<DecodedToken>(accessToken); // Decode the token
    const currentTime = Date.now() / 1000; // Current time in seconds

    if (decoded.exp < currentTime) {
      console.warn('Access token expired');
      return false; // Token expired
    }

    return true; // Token is valid
  } catch (error) {
    console.error('Invalid token', error); // Error decoding token
    return false;
  }
};

// Function to get the access token from localStorage
export const getAccessToken = (): string | null => {
  if (typeof window !== 'undefined') {
    // Check if in the browser
    return localStorage.getItem('jwt_access_token'); // Get token from localStorage
  }
  return null; // Return null if not in the browser
};
