export interface User {
  name: string;
  email: string;
  avatar: string;
  role: string;
  token: string;
  paymentStatus:boolean;
  cardNumber:string;
}

export interface StorageState {
  user: User | null;
  setUser: (user: User | null) => void; // user can be null
  message: string;
  setMessage: (message: string) => void;
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
  unread: boolean;
  setUnread: (unread: boolean) => void;
  paymentStatus:boolean;
  setPaymentStatus :(paymentStatus: boolean) => void;
  cardNumber:string;
  setCardNumber:(cardNumber:string) => void;
}
