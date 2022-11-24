import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';

type TotalTitleItemProps = {
  children?: React.ReactNode;
  titleItem: {
    titleId: number;
    titleName: string;
    titleDescripiton: string;
    titlePictureUrl: string;
  };
  isrep: boolean;
};

const TitleItem: React.FC<TotalTitleItemProps> = ({titleItem, isRep}) => {
  return (
    <View>
      <View>
        <Text>{titleItem.titleDescripiton}</Text>
      </View>
      <View>
        <Image
          source={{uri: titleItem.titlePictureUrl}}
          style={styles.ImageItem}
        />
      </View>
    </View>
  );
};

let ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  ImageItem: {
    width: ScreenWidth * 0.13,
    heigh: ScreenWidth * 0.13,
  },
});

export default TitleItem;
