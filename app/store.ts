import { create } from 'zustand';

export const useStore = create((set) => ({
  selectedCategories: [],
  setSelectedCategories: (categories: string[]) =>
    set({ selectedCategories: categories }),
}));
