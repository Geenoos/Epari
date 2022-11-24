import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Animated,
  Pressable,
  Dimensions,
} from 'react-native';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {
  capturedSubImage,
  picturedImage,
  resultPlant,
} from '../store/classification';
import AppText from '../components/AppText';
import {useNavigation} from '@react-navigation/native';

const AiSpareResult: React.FC = () => {
  const navigation = useNavigation();
  const picturedImageState = useRecoilValue(picturedImage);
  const capturedSubImageState = useRecoilValue(capturedSubImage);
  const setResultPlantState = useSetRecoilState(resultPlant);

  const picturedImageUrl = picturedImageState.uri;

  const scrollY = React.useRef(new Animated.Value(0)).current;

  const setPlantState = (item: any) => {
    const plantState = {
      plantId: item.plantId,
      plantName: item.plantName,
    };
    setResultPlantState(plantState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <AppText style={styles.text}>일치하는 식물을 선택해주세요</AppText>
      </View>
      <View style={styles.imageContainer}>
        <View>
          <Image source={{uri: picturedImageUrl}} style={styles.image} />
        </View>
        <View style={styles.carousel}>
          <Animated.FlatList
            data={capturedSubImageState}
            keyExtractor={(_, index) => index.toString()}
            snapToInterval={190}
            decelerationRate="fast"
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollY}}}],
              {useNativeDriver: true},
            )}
            renderItem={({item}) => {
              return (
                <Pressable
                  onPress={() => {
                    setPlantState(item);
                    navigation.navigate('AiRegister');
                  }}>
                  <Image
                    source={{uri: item.detailPictureUrl}}
                    style={styles.image}
                  />
                  <AppText style={styles.plantName}>
                    {(item.plantName || '').split('_', 1)}
                  </AppText>
                </Pressable>
              );
            }}
          />
          {capturedSubImageState.length > 1 ? (
            <View style={styles.pagination}>
              {capturedSubImageState.map((_, index) => {
                return <View key={index} style={[styles.dot]} />;
              })}
              <Animated.View
                style={[
                  styles.dotIndicator,
                  {
                    transform: [
                      {
                        translateY: Animated.divide(
                          scrollY,
                          ScreenWidth * 0.35 + ScreenHeight * 0.06,
                        ).interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, ScreenHeight * 0.07],
                        }),
                      },
                    ],
                  },
                ]}
              />
            </View>
          ) : null}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AppText style={styles.text}>일치하는 식물이 없나요?</AppText>
        <Pressable onPress={() => navigation.navigate('AiCapture')}>
          <View style={styles.button}>
            <AppText style={styles.buttonText}>다시 하기</AppText>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default AiSpareResult;

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF7F2',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: ScreenHeight * 0.025,
    padding: ScreenHeight * 0.02,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  carousel: {
    height: ScreenWidth * 0.35 + ScreenHeight * 0.06,
    overflow: 'hidden',
  },
  image: {
    width: ScreenWidth * 0.35,
    height: ScreenWidth * 0.35,
    borderWidth: 3,
    borderRadius: 12,
    borderColor: '#687798',
    margin: ScreenWidth * 0.03,
    resizeMode: 'cover',
  },
  plantName: {
    color: '#687798',
    fontSize: ScreenHeight * 0.018,
    margin: ScreenWidth * 0.01,
    textAlign: 'center',
    textShadowColor: '#99AEBB',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 1.8,
      height: 1.8,
    },
  },
  pagination: {
    position: 'absolute',
    top: ScreenHeight * 0.035,
    right: 1,
  },
  dot: {
    width: ScreenWidth * 0.01,
    height: ScreenHeight * 0.07,
    borderRadius: 8,
    backgroundColor: '#D3D3D3',
  },
  dotIndicator: {
    width: ScreenWidth * 0.01,
    height: ScreenHeight * 0.07,
    borderRadius: 8,
    backgroundColor: '#687798',
    position: 'absolute',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: ScreenWidth * 0.35,
    paddingVertical: ScreenHeight * 0.01,
    borderWidth: 5,
    borderRadius: 11,
    borderColor: '#D9D9D9',
    margin: ScreenWidth * 0.03,
    backgroundColor: '#687798',
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
