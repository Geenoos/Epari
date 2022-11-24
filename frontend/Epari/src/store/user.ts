import {atom, selector} from 'recoil';

export type GoogleUserInform = {
  displayName: string;
  email: string;
  name: string;
  phoneNumber: string;
  photoURL: string;
};

export const loginState = atom({
  key: 'loginState',
  default: false,
});

export const userTokenState = atom({
  key: 'userTokenState',
  default: '123',
});

export const getLoginState = selector({
  key: 'getLoginState',
  get: ({get}) => get(loginState),
});

export const titleState = atom({
  key: 'titleState',
  default: '',
});
