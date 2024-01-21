import { create } from "zustand";

type BaseStore = {
  currentPage: string;
  setCurrentPage: (page: string) => void;
};

export const useBaseStore = create<BaseStore>()((set) => ({
  currentPage: 'home',
  setCurrentPage: (page) => set({ currentPage: page }),
}));
