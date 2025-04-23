import { create } from "zustand";

interface CategoryIdStore {
  id: number | null;
  setCategoryId: (id: number) => void;
}

const useCategoryIdStore = create<CategoryIdStore>((set) => ({
  id: null,
  setCategoryId: (idInput: number) => set(() => ({ id: idInput })),
}));

export default useCategoryIdStore;
