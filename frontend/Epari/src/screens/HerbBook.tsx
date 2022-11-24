import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import HerbBookHeader from '../components/HerbBook/Header';
import AcheivePoint from '../components/HerbBook/AchievePoint';
import HerbBookStack from '../navigation/HerbBookStack';
import {AppStackParamList} from '../types';
import {StackScreenProps} from '@react-navigation/stack';

export type HerbBookScreenProps = StackScreenProps<
  AppStackParamList,
  'HerbBook'
>;

const HerbBook: React.FC<HerbBookScreenProps> = ({navigation}) => {
  return (
    <ScrollView style={styles.background}>
      <HerbBookHeader navigation={navigation} />
      <AcheivePoint />
      <HerbBookStack />
      {/* <SeasonStack /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFF7F2',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  fontTest: {
    fontFamily: 'NeoDGM-Regular',
  },
});

export default HerbBook;
