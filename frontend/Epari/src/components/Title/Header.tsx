import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export type TitleListHeaderProps = {
  navigation: any;
};

const TitleListHeader: React.FC<TitleListHeaderProps> = ({navigation}) => {
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
});

export default TitleListHeader;
