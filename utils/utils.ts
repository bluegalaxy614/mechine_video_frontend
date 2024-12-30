import axios from 'axios';
import { categoryConfig } from '@/config/site';
export const setSession = (accessToken: string | null): void => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};
export const deleteSession = (): void => {
  delete axios.defaults.headers.common['Authorization'];
};

export const getCategoryLabelById = (id: string) => {
  const mainCategory = categoryConfig.find((category) => category.id === id);
  if (mainCategory) {
    return mainCategory.label;
  }
  for (const category of categoryConfig) {
    const subCategory = category.subCategories.find((sub) => sub.id === id);
    if (subCategory) {
      return subCategory.label;
    }
  }
  return null;
};

export const formatDate = (dateStr: string) => {
  console.log(dateStr)
  const date = new Date(dateStr);
  if(isNaN(date.getFullYear())) {
    return "-";
  }
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
};

export const getVideoSnapshot = (videoElement: HTMLVideoElement) => {
  const canvas = document.createElement('canvas');
  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;

  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
  }

  return canvas;
};
