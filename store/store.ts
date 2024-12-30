import { create } from 'zustand';
import { User, StorageState } from '../types/storeType';
import { deleteSession, setSession } from '@/utils/utils';

export const useStore = create<StorageState>((set) => ({
  user:
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('user') || 'null')
      : null,
  setUser: (user: User | null) => {
    set({ user });
    if (typeof window !== 'undefined' && user) {
      localStorage.setItem('user', JSON.stringify(user));
      setSession(user?.token);
    } else if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
      deleteSession();
    }
  },

  message: '',
  setMessage: (message: string) => {
    set({ message });
  },

  errorMessage: '',
  setErrorMessage: (errorMessage: string) => {
    set({ errorMessage });
  },

  unread: false,
  setUnread: (unread: boolean) => {
    set({ unread });
  },
  paymentStatus:false,
  setPaymentStatus: (paymentStatus: boolean) => {
    set({ paymentStatus });
  },
  cardNumber:'',
  setCardNumber: (cardNumber : string) => {
    set({cardNumber})
  }
}));
