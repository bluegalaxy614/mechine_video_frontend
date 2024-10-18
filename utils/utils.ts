import axios from 'axios';
import { categoryConfig } from '@/config/site';
export const setSession = (accessToken: string | null): void => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};
export const deleteSession = (): void => {
  delete axios.defaults.headers.common['Authorization'];
};

export const getCategoryLabelById = (id: string) => {
  // Search through the main categories
  const mainCategory = categoryConfig.find((category) => category.id === id);

  // If found in main category, return the label
  if (mainCategory) {
    return mainCategory.label;
  }

  // If not found in main category, search subcategories
  for (const category of categoryConfig) {
    const subCategory = category.subCategories.find((sub) => sub.id === id);

    // If found in subcategory, return its label
    if (subCategory) {
      return subCategory.label;
    }
  }

  // Return null if no match is found
  return null;
};

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
};
