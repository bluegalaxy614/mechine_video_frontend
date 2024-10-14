import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Correct the import by removing destructuring

// Interface for decoded JWT token
export interface DecodedToken {
  exp: number;
  [key: string]: any; // Allow additional properties
}

// Function to set session by storing access token and adding it to axios headers
export const setSession = (accessToken: string | null): void => {
  if (typeof window !== 'undefined' && accessToken) {
    // Check if running in the browser and token is provided
    console.log('Setting access token:', accessToken);
    localStorage.setItem('jwt_access_token', accessToken); // Store token in localStorage
    console.log(localStorage.getItem('jwt_access_token'));
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`; // Set axios header
  } else if (typeof window !== 'undefined') {
    // If running in the browser and no token is provided
    localStorage.removeItem('jwt_access_token'); // Remove token from localStorage
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
    // Check if running in the browser
    return localStorage.getItem('jwt_access_token'); // Get token from localStorage
  }
  return null; // Return null if not running in the browser
};
