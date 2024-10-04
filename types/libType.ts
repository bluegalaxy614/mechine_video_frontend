export interface DecodedToken {
  exp: number; // Expiration time in seconds
  [key: string]: any; // Optional, to handle any other properties
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface UploadFileData {
  fileName: string;
  fileType: string;
}
