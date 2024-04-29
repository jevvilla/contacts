import {create} from 'zustand';
import {Contact} from '../types';

type Store = {
  contacts: Contact[];
  setContacts: (data: Contact[]) => void;
};

export const useContactStore = create<Store>(set => ({
  contacts: [],
  setContacts: data => set(() => ({contacts: data})),
}));
