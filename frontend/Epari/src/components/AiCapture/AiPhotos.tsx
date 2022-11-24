import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSetRecoilState} from 'recoil';
import {
  picturedImage,
  capturedMainImage,
  capturedSubImage,
} from '../../store/classification';
import {useNavigation} from '@react-navigation/native';
import AppText from '../AppText';

const AiPhotos: React.FC = ({buttonStyle, textStyle, name}) => {
  const navigation = useNavigation();
  const setPicturedImage = useSetRecoilState(picturedImage);
  const setCapturedMainImage = useSetRecoilState(capturedMainImage);
  const setCapturedSubImage = useSetRecoilState(capturedSubImage);
  const [cancel, setCancel] = useState(true);
  const uploadImage = async () => {
    const image: imageType = {
      uri: '',
      type: '',
      name: '',
    };
    await launchImageLibrary({maxHeight: 600, maxWidth: 600}, res => {
      if (res.didCancel) {
        setCancel(res.didCancel);
        navigation.navigate('AiCapture');
      } else if (res.errorCode) {
        console.log('ImagePicker Error', res.errorCode);
        navigation.navigate('AiError');
      } else if (res.assets) {
        image.type = res.assets[0].type;
        image.uri = res.assets[0].uri;
        image.name = res.assets[0].fileName;
        setPicturedImage(image);
      }
    });
    const formdata = new FormData();
    formdata.append('capturedImg', image);

    const requestOptions = {
      method: 'POST',
      body: formdata,
      headers: {},
    };
    await fetch('http://j7a201.p.ssafy.io/ai/plantAi', requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.length === 0) {
          navigation.navigate('AiError');
        } else {
          const mainInfo = result.slice(0, 1);
          const subInfo = result.slice(1);
          setCapturedMainImage(...mainInfo);
          setCapturedSubImage(subInfo);
          navigation.navigate('AiResult');
        }
      })
      .catch(error => {
        if (cancel === false) {
          navigation.navigate('AiError');
        }
        console.log('cameraerror', error);
      });
  };

  return (
    <Pressable
      style={buttonStyle}
      onPress={() => {
        uploadImage();
      }}>
      <AppText style={textStyle}>{name}</AppText>
    </Pressable>
  );
};

export default AiPhotos;
