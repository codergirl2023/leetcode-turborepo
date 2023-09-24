import {atom} from "recoil";

export const userState = atom<{
    isLoading: boolean;
    username: string | null
}>({
  key: 'userState',
  default: {
    isLoading: true,
    username: null
  },
});