import { create } from 'zustand';
import { User, StorageState } from '../types/storeType';

// Define the structure of the store

// Create the Zustand store
export const useStore = create<StorageState>((set) => {
  // Load user from localStorage on initial state
  const savedUser = localStorage.getItem('user');
  const initialUser = savedUser ? JSON.parse(savedUser) : null;

  return {
    user: initialUser, // initial user state from localStorage
    setUser: (user: User | null) => {
      set({ user }); // update the state
      // Update localStorage whenever the user changes
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user'); // Remove user from localStorage if null
      }
    },
  };
});
