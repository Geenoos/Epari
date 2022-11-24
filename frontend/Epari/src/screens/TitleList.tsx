import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import TitleListHeader from '../components/Title/Header';
// import TitleListStack from '../navigation/TitleListStack';
import TotalTitle from '../components/Title/TotalTitle';
import {AppStackParamList} from '../types';

export type TitleListScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'TitleList'
>;

const TitleList: React.FC<TitleListScreenProps> = ({navigation}) => {
  return (
    <View>
      <TitleListHeader navigation={navigation} />
      <TotalTitle navigation={navigation} />
    </View>
  );
};

export default TitleList;
