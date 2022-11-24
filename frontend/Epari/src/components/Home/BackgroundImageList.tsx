import React from 'react';
import {Image, Dimensions, View, StyleSheet} from 'react-native';

const BackgroundImageList: React.FC = () => {
  return (
    <View style={styles.Container}>
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0040.png')}
        style={styles.flowerImage1}
      />
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0080.png')}
        style={styles.flowerImage2}
      />
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0090.png')}
        style={styles.flowerImage3}
      />
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0190.png')}
        style={styles.flowerImage4}
      />

      <Image
        source={require('Epari/src/asset/loginpageicons/active_0200.png')}
        style={styles.flowerImage5}
      />

      <Image
        source={require('Epari/src/asset/loginpageicons/active_0240.png')}
        style={styles.flowerImage6}
      />

      <Image
        source={require('Epari/src/asset/loginpageicons/active_0300.png')}
        style={styles.flowerImage7}
      />

      <Image
        source={require('Epari/src/asset/loginpageicons/active_0320.png')}
        style={styles.flowerImage8}
      />

      <Image
        source={require('Epari/src/asset/loginpageicons/active_0370.png')}
        style={styles.flowerImage9}
      />

      <Image
        source={require('Epari/src/asset/loginpageicons/active_0400.png')}
        style={styles.flowerImage10}
      />

      <Image
        source={require('Epari/src/asset/loginpageicons/active_0410.png')}
        style={styles.flowerImage11}
      />

      <Image
        source={require('Epari/src/asset/loginpageicons/active_0470.png')}
        style={styles.flowerImage12}
      />

      <Image
        source={require('Epari/src/asset/loginpageicons/active_0670.png')}
        style={styles.flowerImage13}
      />

      <Image
        source={require('Epari/src/asset/loginpageicons/active_0140.png')}
        style={styles.flowerImage14}
      />

      <Image
        source={require('Epari/src/asset/icons/question_mark.png')}
        style={styles.question1}
      />

      <Image
        source={require('Epari/src/asset/icons/question_mark.png')}
        style={styles.question2}
      />

      <Image
        source={require('Epari/src/asset/icons/question_mark.png')}
        style={styles.question3}
      />

      <Image
        source={require('Epari/src/asset/icons/question_mark.png')}
        style={styles.question4}
      />

      <Image
        source={require('Epari/src/asset/icons/question_mark.png')}
        style={styles.question5}
      />

      <Image
        source={require('Epari/src/asset/icons/question_mark.png')}
        style={styles.question6}
      />
    </View>
  );
};

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flowerImage1: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    top: ScreenHeight * 0.03,
    left: -ScreenWidth * 0.37,
  },
  flowerImage2: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    top: ScreenHeight * 0.14,
    left: ScreenWidth * 0.25,
  },
  flowerImage3: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    top: ScreenHeight * 0.85,
    left: -ScreenWidth * 0.4,
  },
  flowerImage4: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: -ScreenWidth * 0.1,
    top: ScreenHeight * 0.8,
  },
  flowerImage5: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: ScreenWidth * 0.32,
    top: ScreenHeight * 0.07,
  },
  flowerImage6: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: ScreenWidth * 0.05,
    top: ScreenHeight * 0.55,
  },
  flowerImage7: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: -ScreenWidth * 0.4,
    top: ScreenHeight * 0.4,
  },
  flowerImage8: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: ScreenWidth * 0.13,
    top: ScreenHeight * 0.013,
  },
  flowerImage9: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: -ScreenWidth * 0.33,
    top: ScreenHeight * 0.71,
  },
  flowerImage10: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: ScreenWidth * 0.38,
    top: ScreenHeight * 0.26,
  },
  flowerImage11: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: ScreenWidth * 0.33,
    top: ScreenHeight * 0.73,
  },
  flowerImage12: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: -ScreenWidth * 0.45,
    top: ScreenHeight * 0.11,
  },
  flowerImage13: {
    width: ScreenWidth * 0.14,
    height: ScreenWidth * 0.14,
    position: 'absolute',
    left: ScreenWidth * 0.26,
    top: ScreenHeight * 0.58,
  },
  flowerImage14: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: -ScreenWidth * 0.38,
    top: ScreenHeight * 0.54,
  },
  question1: {
    width: ScreenWidth * 0.12,
    height: ScreenWidth * 0.12,
    position: 'absolute',
    left: ScreenWidth * 0.02,
    top: ScreenHeight * 0.08,
  },
  question2: {
    width: ScreenWidth * 0.12,
    height: ScreenWidth * 0.12,
    position: 'absolute',
    left: -ScreenWidth * 0.45,
    top: ScreenHeight * 0.25,
  },
  question3: {
    width: ScreenWidth * 0.12,
    height: ScreenWidth * 0.12,
    position: 'absolute',
    left: ScreenWidth * 0.14,
    top: ScreenHeight * 0.35,
  },
  question4: {
    width: ScreenWidth * 0.12,
    height: ScreenWidth * 0.12,
    position: 'absolute',
    left: -ScreenWidth * 0.2,
    top: ScreenHeight * 0.45,
  },
  question5: {
    width: ScreenWidth * 0.12,
    height: ScreenWidth * 0.12,
    position: 'absolute',
    left: ScreenWidth * 0.23,
    top: ScreenHeight * 0.85,
  },
  question6: {
    width: ScreenWidth * 0.12,
    height: ScreenWidth * 0.12,
    position: 'absolute',
    left: -ScreenWidth * 0.22,
    top: ScreenHeight * 0.9,
  },
  nameFont: {
    position: 'absolute',
    fontFamily: 'NeoDGM-Regular',
    color: '#99DBE9',
    fontSize: ScreenWidth * 0.03,
    textShadowColor: '#110105',
    textShadowRadius: 2,
    textShadowOffset: {
      width: ScreenWidth * 0.002,
      height: ScreenHeight * 0.0013,
    },
  },
  DoLarge: {},
  nameFontDolarge: {
    position: 'absolute',
    fontFamily: 'NeoDGM-Regular',
    color: '#720000',
    fontSize: ScreenWidth * 0.05,
    textShadowColor: '#FFAAAA',
    textShadowRadius: 2,
    textShadowOffset: {
      width: ScreenWidth * 0.003,
      height: ScreenHeight * 0.0023,
    },
  },
  questionFont: {
    position: 'absolute',
    fontFamily: 'NeoDGM-Regular',
    color: '#FFC67D',
    fontSize: ScreenWidth * 0.03,
    textShadowColor: '#720000',
    textShadowRadius: 2,
    textShadowOffset: {
      width: ScreenWidth * 0.002,
      height: ScreenHeight * 0.0013,
    },
  },
});
export default BackgroundImageList;
