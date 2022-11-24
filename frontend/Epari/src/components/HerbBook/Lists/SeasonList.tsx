import React from 'react';
import {View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import SeasonStack from '../../../navigation/SeasonStack';
import {SeasonStackParamList} from '../../../types/SeasonStackParamList';

export type GetListScreenProps = NativeStackScreenProps<
  SeasonStackParamList,
  'SeasonList'
>;

const SeasonList: React.FC<GetListScreenProps> = () => {
  return (
    <View>
      <SeasonStack />
    </View>
  );
};

export default SeasonList;
