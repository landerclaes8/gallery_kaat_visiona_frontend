import { create } from "zustand";

interface CategoryIdStore {
  id: number | null;
  setCategoryId: (id: number) => void;
}

export const useCategoryIdStore = create<CategoryIdStore>((set) => ({
  id: null,
  setCategoryId: (idInput: number) => set(() => ({ id: idInput })),
}));

interface AlbumIdStore {
  albumId: number | null;
  setAlbumId: (id: number) => void;
}

export const useAlbumIdStore = create<AlbumIdStore>((set) => ({
  albumId: null,
  setAlbumId: (idInput: number) => set(() => ({ albumId: idInput })),
}));

export default useCategoryIdStore;
