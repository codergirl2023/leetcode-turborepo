import {atom} from "recoil";

export const adminState = atom<{
    isLoading: boolean;
    email: string | null
}>({
  key: 'adminState',
  default: {
    isLoading: true,
    email: null
  },
});