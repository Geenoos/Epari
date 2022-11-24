import React, {useEffect} from 'react';
import {View, Pressable, StyleSheet, Dimensions, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useRecoilValue} from 'recoil';
import {picturedImage} from '../store/classification';
import AppText from '../components/AppText';

const AiError: React.FC = ({navigation}) => {
  const picturedImageState = useRecoilValue(picturedImage);
  const picturedImageUrl = picturedImageState.uri;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: picturedImageUrl}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <AppText style={styles.text}>인식 결과가 없어요</AppText>
        <AppText style={styles.text}>다시 시도해 볼까요?</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <View style={[styles.button, styles.cancelButton]}>
            <AppText style={styles.buttonText}>그만 하기</AppText>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('AiCapture')}>
          <View style={[styles.button, styles.rightButton]}>
            <AppText style={styles.buttonText}>다시 하기</AppText>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default AiError;

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF7F2',
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: ScreenWidth * 0.35,
    height: ScreenWidth * 0.35,
    borderWidth: 3,
    borderRadius: 12,
    borderColor: '#687798',
    margin: ScreenWidth * 0.03,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: ScreenHeight * 0.025,
    margin: ScreenHeight * 0.0015,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: ScreenHeight * 0.01,
  },
  button: {
    width: ScreenWidth * 0.35,
    paddingVertical: ScreenHeight * 0.01,
    borderWidth: 5,
    borderRadius: 11,
    marginVertical: ScreenWidth * 0.01,
    marginHorizontal: ScreenWidth * 0.03,
  },
  cancelButton: {
    backgroundColor: '#D9D9D9',
    borderColor: '#A7B3CC',
  },
  rightButton: {
    backgroundColor: '#687798',
    borderColor: '#D9D9D9',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: ScreenHeight * 0.025,
    textShadowColor: '#3A4A40',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 1.8,
      height: 1.8,
    },
  },
});
