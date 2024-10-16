import { create } from 'zustand';
import { User, StorageState } from '../types/storeType';

export const useStore = create<StorageState>((set) => ({
  user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || 'null') : null,
  setUser: (user: User | null) => {
    set({ user });
    if (typeof window !== 'undefined' && user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
  },

  message: '',
  setMessage: (message: string) => {
    set({ message });
  },

  errorMessage: '',
  setErrorMessage: (errorMessage: string) => {
    set({ errorMessage });
  }
}));
