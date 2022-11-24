import React from 'react';
import {Pressable, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSetRecoilState} from 'recoil';
import {picturedImage} from '../../store/classification';

const ImageChanger: React.FC = ({buttonStyle, imageUrl, imageStyle}) => {
  const setPicturedImage = useSetRecoilState(picturedImage);
  const updateImage = async () => {
    const image = {
      uri: '',
      type: '',
      name: '',
    };
    await launchImageLibrary({}, res => {
      if (res.didCancel) {
        // console.log('User Cancelled image picker');
      } else if (res.errorCode) {
        // console.log('ImagePicker Error', res.errorCode);
      } else if (res.assets) {
        // console.log('ImagePicker data', res.assets);
        image.type = res.assets[0].type;
        image.uri = res.assets[0].uri;
        image.name = res.assets[0].fileName;
        setPicturedImage(image);
      }
    });
    // const formdata = new FormData();
    // formdata.append('capturedImg', image);

    // const requestOptions = {
    //   method: 'POST',
    //   body: formdata,
    //   headers: {
    //     // 'Content-Type': 'multipart/form-data; ',
    //   },
    // };
    // // await fetch('http://127.0.0.1:8001/ai/plantAi', requestOptions)
    // await fetch('http://j7a201.p.ssafy.io/ai/plantAi', requestOptions)
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => console.log('error', error));
  };

  return (
    <Pressable style={buttonStyle} onPress={() => updateImage()}>
      <Image source={imageUrl} style={imageStyle} />
      {/* <AppText
        style={textStyle}
        onPress={() => {
          uploadImage();
          navigation.navigate('AiResult');
        }}>
        {name}
      </AppText> */}
    </Pressable>
  );
};

export default ImageChanger;
