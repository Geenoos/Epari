import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const Header: React.FC = () => {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.Header}>EPARI</Text>
      <View>
        <Text style={styles.font_2}>
          <Text style={styles.capital}>E</Text>ducated{' '}
          <Text style={styles.capital}>P</Text>lant{' '}
          <Text style={styles.capital}>A</Text>i{' '}
          <Text style={styles.capital}>R</Text>ecognition{' '}
          <Text style={styles.capital}>I</Text>llustrated book
        </Text>
      </View>
    </View>
  );
};

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  HeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Header: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFF7F2',
    textShadowColor: '#FFAAAA',
    textShadowRadius: 2,
    textShadowOffset: {
      width: ScreenWidth * 0.015,
      height: ScreenHeight * 0.01,
    },
    fontSize: ScreenWidth * 0.3,
  },
  capital: {
    fontSize: ScreenWidth * 0.07,
    color: 'rgb(151, 141, 255)',
  },
  font_2: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFFFFF',
    fontSize: ScreenWidth * 0.035,
    textShadowColor: 'rgb(244, 182, 255)',
    textShadowRadius: 2,
    textShadowOffset: {
      width: ScreenWidth * 0.005,
      height: ScreenHeight * 0.003,
    },
  },
});
export default Header;
