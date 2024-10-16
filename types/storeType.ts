export interface User {
  name: string;
  email: string;
  avatar: string;
  role:string;
  token:string;
}

export interface StorageState {
  user: User | null;
  setUser: (user: User | null) => void; // user can be null
  message: string;
  setMessage: (message: string) => void;
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
}
