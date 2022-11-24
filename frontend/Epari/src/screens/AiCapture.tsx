import React from 'react';
import {StyleSheet, Dimensions, View, Image} from 'react-native';
import AiCamera from '../components/AiCapture/AiCamera';
import AiPhotos from '../components/AiCapture/AiPhotos';
import AppText from '../components/AppText';

const AiCapture: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <AppText style={styles.text}>어떤 식물인지 알고 싶나요?</AppText>
        <AppText style={styles.text}>사진으로 판별해 봐요!</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <View>
          <AiCamera
            name={'사진 찍기'}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
          <Image
            source={require('Epari/src/asset/AiCapture/camera.png')}
            style={styles.cameraImage}
          />
        </View>
        <View>
          <AiPhotos
            name={'사진 선택'}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
          <Image
            source={require('Epari/src/asset/AiCapture/folder.png')}
            style={styles.folderImage}
          />
        </View>
      </View>
    </View>
  );
};

export default AiCapture;

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#687798',
  },
  text: {
    textAlign: 'center',
    color: '#FFF7F2',
    fontSize: ScreenHeight * 0.02,
    marginVertical: ScreenHeight * 0.002,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: ScreenHeight * 0.2,
  },
  cameraImage: {
    width: ScreenWidth * 0.1,
    height: ScreenWidth * 0.11,
    position: 'absolute',
    top: -ScreenHeight * 0.02,
    left: -ScreenWidth * 0.03,
  },
  folderImage: {
    width: ScreenWidth * 0.1,
    height: ScreenWidth * 0.065,
    position: 'absolute',
    top: -ScreenHeight * 0.01,
    left: -ScreenWidth * 0.03,
  },
  button: {
    justifyContent: 'center',
    padding: ScreenWidth * 0.01,
    width: ScreenWidth * 0.4,
    height: ScreenWidth * 0.3,
    borderWidth: 5,
    borderRadius: 11,
    borderColor: '#FFD6D6',
    backgroundColor: '#FFAAAA',
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF7F2',
    textShadowColor: '#E1F1FF',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 1.8,
      height: 1.8,
    },
    fontSize: ScreenHeight * 0.055,
  },
});
