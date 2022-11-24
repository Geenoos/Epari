import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

type HerbInfoProps = {
  description: string;
  detailPictureUrl: string;
  plantName: string;
};

const HerbInfo: React.FC<HerbInfoProps> = ({
  plantName,
  description,
  detailPictureUrl,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image style={styles.DetailImage} source={{uri: detailPictureUrl}} />
      </View>
      <View style={styles.nameContatiner}>
        <Text style={styles.nameFont}>{plantName}</Text>
      </View>
      <View style={styles.DesContainer}>
        <ScrollView>
          <Text style={styles.desFont}>{description}</Text>
        </ScrollView>
      </View>
    </View>
  );
};
let ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginTop: ScreenWidth * 0.04,
    alignItems: 'center',
    backgroundColor: '#FFF7F2',
  },
  ImageContainer: {
    marginTop: ScreenWidth * 0.01,
  },
  nameContatiner: {
    marginTop: ScreenWidth * 0.02,
    padding: ScreenWidth * 0.01,
    backgroundColor: '#687798',
    borderRadius: 5,
  },
  DesContainer: {
    marginTop: ScreenWidth * 0.02,
    padding: ScreenWidth * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    width: ScreenWidth * 0.9,
    backgroundColor: '#F6EDD9',
    borderRadius: 5,
  },
  DetailImage: {
    width: ScreenWidth * 0.5,
    height: ScreenWidth * 0.5,
    borderRadius: 20,
  },
  nameFont: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: ScreenWidth * 0.05,
    color: '#FFF7F2',
  },
  desFont: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: ScreenWidth * 0.033,
  },
  textContainer: {
    marginTop: ScreenWidth * 0.02,
    padding: ScreenWidth * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFont: {fontFamily: 'NeoDGM-Regular', fontSize: ScreenWidth * 0.033},
});
export default HerbInfo;
