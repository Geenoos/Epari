import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppStackParamList} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  BackgroundImageList,
  Bottom,
  Header,
  SampleCollection,
} from '../components/Home';

export type HomeScreenProps = NativeStackScreenProps<AppStackParamList, 'Home'>;

const Home: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackgroundImageList />
      <Header />
      <SampleCollection />
      <Bottom navigation={navigation} />
    </View>
  );
};

// let ScreenWidth = Dimensions.get('window').width;
// let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#687798',
  },
});

export default Home;
