import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../../types';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

export type ListItemScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'TotalList'
>;

export type ListItemProps = CompositeScreenProps<
  BottomTabScreenProps<AppStackParamList, 'HerbBook'>,
  MaterialTopTabScreenProps<AppStackParamList, 'TotalList'>
>;

export type ListItem = {
  id: number;
  plantName: string;
  description: string;
  detailPictureUrl: string;
  isCollected: boolean;
  navigation: any;
};

const ListItem: React.FC<ListItem> = ({
  id,
  plantName,
  description,
  detailPictureUrl,
  isCollected,
  navigation,
}) => {
  if (isCollected) {
    return (
      <View>
        <View style={styles.ListItem}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('HerbDetail', {
                id: id,
                plantName: plantName,
                description: description,
                detailPictureUrl: detailPictureUrl,
              })
            }>
            <Image style={styles.ImageItem} source={id} />
          </TouchableOpacity>
        </View>
        <View style={styles.plantNameContainerCollect}>
          <Text style={styles.fontNameCollect}>{plantName}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <View style={styles.ListItem}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('HerbDetail', {
                id: id,
                plantName: plantName,
                description: description,
                detailPictureUrl: detailPictureUrl,
              })
            }>
            <Image
              style={styles.ImageItem}
              source={require('Epari/src/asset/icons/question_mark.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.plantNameContainer}>
          <Text style={styles.fontName}>{plantName}</Text>
        </View>
      </View>
    );
  }
};

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  ListItem: {
    margin: ScreenWidth * 0.03,
    width: ScreenWidth * 0.17,
    height: ScreenWidth * 0.17,
    borderRadius: 12,
    fontFamily: 'NeoDGM-Regular',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: ScreenWidth * 0.006,
    backgroundColor: '#FFFFFF',
  },
  ImageItem: {
    width: ScreenWidth * 0.14,
    height: ScreenWidth * 0.14,
  },
  ItemName: {
    alignSelf: 'center',
    borderWidth: 1,
  },
  plantNameContainer: {
    marginTop: -ScreenWidth * 0.023,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#687798',
    borderRadius: 30,
    width: ScreenWidth * 0.2,
    height: ScreenHeight * 0.014,
    alignSelf: 'center',
  },
  plantNameContainerCollect: {
    marginTop: -ScreenWidth * 0.023,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFAAAA',
    borderRadius: 30,
    width: ScreenWidth * 0.2,
    height: ScreenHeight * 0.0146,
    alignSelf: 'center',
  },
  fontName: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: ScreenWidth * 0.023,
    color: '#FFFFFF',
  },
  fontNameCollect: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: ScreenWidth * 0.023,
    color: '#110105',
  },
});

export default ListItem;
