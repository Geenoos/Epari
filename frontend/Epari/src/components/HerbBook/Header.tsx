import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {titleState} from '../../store/user';
import {useRecoilValue} from 'recoil';

export type HerbBookHeaderProps = {
  navigation: any;
};
const HerbBookHeader: React.FC<HerbBookHeaderProps> = ({navigation}) => {
  const user = auth().currentUser;
  const titleValue = useRecoilValue(titleState);
  return (
    <View style={styles.header}>
      <View style={styles.leftIconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={styles.lefticon}
            source={require('Epari/src/asset/icons/lefticon.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.userInfo}>
        {titleValue.length > 1 ? (
          <Text style={styles.title}>{titleValue}</Text>
        ) : null}
        <Text style={styles.name}>{user?.displayName}</Text>
      </View>
    </View>
  );
};

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#687798',
    height: ScreenHeight * 0.07,
    flexDirection: 'row',
  },
  fontTest: {
    fontFamily: 'NeoDGM-Regular',
  },
  leftIconContainer: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    left: ScreenWidth * 0.02,
    top: ScreenWidth * 0.02,
  },
  lefticon: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
  },
  userInfo: {
    wrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    left: ScreenWidth * 0.35,
  },
  title: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: ScreenWidth * 0.05,
    color: '#FFAAAA',
    backgroundColor: '#43262D',
    borderRadius: 6,
    padding: 3,
  },
  name: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: ScreenWidth * 0.05,
    color: '#FFF7F2',
  },
});
export default HerbBookHeader;
