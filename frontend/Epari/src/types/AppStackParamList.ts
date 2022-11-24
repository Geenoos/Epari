export type AppStackParamList = {
  Home: undefined;
  Tab: undefined;
  AiCapture: undefined;
  AiResult: undefined;
  AiError: undefined;
  AiRegister: undefined;
  AiSpareResult: undefined;
  TotalList: undefined;
  GetList: undefined;
  NoGetList: undefined;
  HerbBook: undefined;
  HerbDetail: {
    id: number;
    plantName: string;
    description: string;
    detailPictureUrl: string;
  };
  Login: undefined;
  UserPage: {
    id: number;
  };
  TitleList: undefined;
  GetTitle: undefined;
  TotalTitle: undefined;
};
