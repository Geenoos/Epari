import {atom} from 'recoil';
import {HerbType} from '../graphql/herb';

export const getHerbList = atom<HerbType[]>({
  key: 'getHerbState',
  default: [],
});

export const flowerCntState = atom({
  key: 'flowerCntState',
  default: 0,
});

export const herbCntState = atom({
  key: 'herbCntState',
  default: 0,
});
export const totalCntState = atom({
  key: 'totalCntState',
  default: 0,
});
