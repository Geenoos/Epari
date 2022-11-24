import {gql} from 'graphql-tag';

export type HerbType = {
  plantId: string;
  plantName: string;
  collectionCnt: number;
};

export type HerbDetailType = {
  plantName: String;
  detailPictureUrl: String;
  collectPictureUrl: String;
  collectDate: String;
  collectContent: String;
  collectPlace: String;
  plantDescription: String;
};

export type HerbList = {
  HerbList: HerbType[];
};

export const GET_HERBLIST = gql`
  query GET_HERBLIST($id: string) {
    plantId
    plantName
    collectionCnt
  }
`;

export const GET_HERBDETAIL = gql`
  query GET_HERBDETAIL($id: string) {
    plantName
    detailPictureUrl
    collectPictureUrl
    collectDate
    collectContent
    collectPlace
    plantDescription
  }
`;
