import React from 'react';
import {ScrollView, View, Text, StyleSheet, Dimensions} from 'react-native';
import HerbCollectionItem from './HerbCollectionItem';

type HerbCollectionListProps = {
  children?: React.ReactNode;
  id: any;
  collection: {
    collectId: number;
    collectPictureUrl: string;
    collectDate: string;
    collectTitle: string;
    collectContent: string;
    collectPlace: string;
    plantId: number;
    userId: string;
    locationId: string;
  }[];
};

const HerbCollectionList: React.FC<HerbCollectionListProps> = ({
  id,
  collection,
}) => {
  return (
    <View style={styles.container}>
      {collection.length > 0 ? (
        <View style={styles.textContainer}>
          <Text style={styles.textFont}>↓ 내가 수집한 꽃 사진들 ↓</Text>
        </View>
      ) : null}
      <ScrollView>
        <Text>
          {collection.map(item => (
            <HerbCollectionItem
              id={id}
              collectionItem={item}
              key={item.collectId}
            />
          ))}
        </Text>
      </ScrollView>
    </View>
  );
};

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF7F2',
    marginTop: ScreenWidth * 0.02,
    alignItems: 'center',
    height: ScreenHeight * 0.35,
    justifyContent: 'center',
  },
  textContainer: {
    padding: ScreenWidth * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFont: {fontFamily: 'NeoDGM-Regular', fontSize: ScreenWidth * 0.033},
});

export default HerbCollectionList;
