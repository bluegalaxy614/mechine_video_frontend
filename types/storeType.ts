export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface StorageState {
  user: User | null;
  setUser: (user: User | null) => void; // user can be null
}
