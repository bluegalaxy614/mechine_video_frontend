import axios from 'axios';

export const setSession = (accessToken: string | null): void => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}
export const deleteSession = (): void => {
  delete axios.defaults.headers.common['Authorization'];
}