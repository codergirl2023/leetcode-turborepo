import { adminName} from './admin';
import {selector} from "recoil";

export const adminNameState = selector({
  key: 'adminNameState',
  get: ({get}) => {
    const state = get(adminState);

    return state.username;
  },
});