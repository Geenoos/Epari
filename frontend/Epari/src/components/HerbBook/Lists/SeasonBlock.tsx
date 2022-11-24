import React from 'react';
import {View, StyleSheet, Dimensions, ScrollView, Text} from 'react-native';
import {HerbBookStackParamList} from '../../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListItem from './ListItem';
import {useIsFocused} from '@react-navigation/native';

export type GetListScreenProps = NativeStackScreenProps<
  HerbBookStackParamList,
  'Season'
>;

const SeasonBlock: React.FC<GetListScreenProps> = ({navigation}) => {
  const [bookList, setBookList] = React.useState([]);
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const getData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('GoogleAccessToken');
        if (storedToken !== null) {
          const requestOptions = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: storedToken,
            },
          };

          await fetch(
            'http://j7a201.p.ssafy.io/epari/v1/collection/',
            requestOptions,
          )
            .then(response => response.json())
            .then(result => {
              let temp_List: any = [];
              result.map((item: any, i: number) => {
                temp_List.push({
                  id: item.plantId,
                  plantName: item.plantName,
                  imageSrc: imageList[i],
                  season: item.season,
                  isCollected: item.isCollected,
                  plantDescription: item.plantDescription,
                  detailPictureUrl: item.detailPictureUrl,
                });
              });

              setBookList(temp_List);
            })
            .catch(error => console.log('error', error));
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [isFocused]);
  return (
    <ScrollView style={styles.background}>
      <View style={styles.spring}>
        <View>
          <Text style={styles.textStyle}>봄</Text>
        </View>
        <View style={styles.container}>
          {bookList.map((item: any) => {
            if (
              item.season.includes(['3']) ||
              item.season.includes(['4']) ||
              item.season.includes(['5'])
            ) {
              return (
                <ListItem
                  id={item.imageSrc}
                  navigation={navigation}
                  key={item.id}
                  description={item.plantDescription}
                  detailPictureUrl={item.detailPictureUrl}
                  plantName={item.plantName}
                  isCollected={item.isCollected}
                />
              );
            }
          })}
        </View>
      </View>
      <View style={styles.summer}>
        <View>
          <Text style={styles.textStyle}>여름</Text>
        </View>
        <View style={styles.container}>
          {bookList.map((item: any) => {
            if (
              item.season.includes(['6']) ||
              item.season.includes(['7']) ||
              item.season.includes(['8'])
            ) {
              return (
                <ListItem
                  id={item.imageSrc}
                  navigation={navigation}
                  key={item.id}
                  description={item.plantDescription}
                  detailPictureUrl={item.detailPictureUrl}
                  plantName={item.plantName}
                  isCollected={item.isCollected}
                />
              );
            }
          })}
        </View>
      </View>
      <View style={styles.fall}>
        <View>
          <Text style={styles.textStyle}>가을</Text>
        </View>
        <View style={styles.container}>
          {bookList.map((item: any) => {
            if (
              item.season.includes(['9']) ||
              item.season.includes(['10']) ||
              item.season.includes(['11'])
            ) {
              return (
                <ListItem
                  id={item.imageSrc}
                  navigation={navigation}
                  key={item.id}
                  description={item.plantDescription}
                  detailPictureUrl={item.detailPictureUrl}
                  plantName={item.plantName}
                  isCollected={item.isCollected}
                />
              );
            }
          })}
        </View>
      </View>
      <View style={styles.winter}>
        <View>
          <Text style={styles.textStyle}>겨울</Text>
        </View>
        <View style={styles.container}>
          {bookList.map((item: any) => {
            if (
              item.season.includes(['12']) ||
              item.season.includes(['1']) ||
              item.season.includes(['2'])
            ) {
              return (
                <ListItem
                  id={item.imageSrc}
                  navigation={navigation}
                  key={item.id}
                  description={item.plantDescription}
                  detailPictureUrl={item.detailPictureUrl}
                  plantName={item.plantName}
                  isCollected={item.isCollected}
                />
              );
            }
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default SeasonBlock;

// let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF7F2',
  },
  spring: {
    width: ScreenWidth * 0.95,
    marginLeft: ScreenWidth * 0.025,
    borderRadius: 30,
    borderColor: '#111111',
    backgroundColor: '#FBD786',
    margin: ScreenWidth * 0.02,
    paddingBottom: ScreenWidth * 0.03,
  },
  summer: {
    width: ScreenWidth * 0.95,
    marginLeft: ScreenWidth * 0.025,
    borderRadius: 30,
    borderColor: '#111111',
    backgroundColor: '#7ee0b4',
    margin: ScreenWidth * 0.02,
    paddingBottom: ScreenWidth * 0.03,
  },
  fall: {
    width: ScreenWidth * 0.95,
    marginLeft: ScreenWidth * 0.025,
    borderRadius: 30,
    borderColor: '#111111',
    backgroundColor: '#FC7281',
    margin: ScreenWidth * 0.02,
    paddingBottom: ScreenWidth * 0.03,
  },
  winter: {
    width: ScreenWidth * 0.95,
    marginLeft: ScreenWidth * 0.025,
    borderRadius: 30,
    borderColor: '#111111',
    backgroundColor: '#C6F5EF',
    margin: ScreenWidth * 0.02,
    paddingBottom: ScreenWidth * 0.03,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    overflow: 'scroll',
    justifyContent: 'center',
    borderColor: '#110105',
  },
  textStyle: {
    color: 'black',
    textAlign: 'center',
    marginTop: ScreenWidth * 0.02,
    paddingTop: ScreenWidth * 0.01,
    fontSize: ScreenWidth * 0.06,
    fontFamily: 'NeoDGM-Regular',
    borderColor: '#110105',
  },
});

const imageList = [
  require('Epari/src/asset/activeIcons/active_0010.png'),
  require('Epari/src/asset/activeIcons/active_0020.png'),
  require('Epari/src/asset/activeIcons/active_0030.png'),
  require('Epari/src/asset/activeIcons/active_0040.png'),
  require('Epari/src/asset/activeIcons/active_0050.png'),
  require('Epari/src/asset/activeIcons/active_0060.png'),
  require('Epari/src/asset/activeIcons/active_0070.png'),
  require('Epari/src/asset/activeIcons/active_0080.png'),
  require('Epari/src/asset/activeIcons/active_0090.png'),
  require('Epari/src/asset/activeIcons/active_0100.png'),
  require('Epari/src/asset/activeIcons/active_0110.png'),
  require('Epari/src/asset/activeIcons/active_0120.png'),
  require('Epari/src/asset/activeIcons/active_0130.png'),
  require('Epari/src/asset/activeIcons/active_0140.png'),
  require('Epari/src/asset/activeIcons/active_0150.png'),
  require('Epari/src/asset/activeIcons/active_0160.png'),
  require('Epari/src/asset/activeIcons/active_0170.png'),
  require('Epari/src/asset/activeIcons/active_0180.png'),
  require('Epari/src/asset/activeIcons/active_0190.png'),
  require('Epari/src/asset/activeIcons/active_0200.png'),
  require('Epari/src/asset/activeIcons/active_0210.png'),
  require('Epari/src/asset/activeIcons/active_0220.png'),
  require('Epari/src/asset/activeIcons/active_0230.png'),
  require('Epari/src/asset/activeIcons/active_0240.png'),
  require('Epari/src/asset/activeIcons/active_0250.png'),
  require('Epari/src/asset/activeIcons/active_0260.png'),
  require('Epari/src/asset/activeIcons/active_0270.png'),
  require('Epari/src/asset/activeIcons/active_0280.png'),
  require('Epari/src/asset/activeIcons/active_0290.png'),
  require('Epari/src/asset/activeIcons/active_0300.png'),
  require('Epari/src/asset/activeIcons/active_0310.png'),
  require('Epari/src/asset/activeIcons/active_0320.png'),
  require('Epari/src/asset/activeIcons/active_0330.png'),
  require('Epari/src/asset/activeIcons/active_0340.png'),
  require('Epari/src/asset/activeIcons/active_0350.png'),
  require('Epari/src/asset/activeIcons/active_0360.png'),
  require('Epari/src/asset/activeIcons/active_0370.png'),
  require('Epari/src/asset/activeIcons/active_0380.png'),
  require('Epari/src/asset/activeIcons/active_0390.png'),
  require('Epari/src/asset/activeIcons/active_0400.png'),
  require('Epari/src/asset/activeIcons/active_0410.png'),
  require('Epari/src/asset/activeIcons/active_0420.png'),
  require('Epari/src/asset/activeIcons/active_0430.png'),
  require('Epari/src/asset/activeIcons/active_0440.png'),
  require('Epari/src/asset/activeIcons/active_0450.png'),
  require('Epari/src/asset/activeIcons/active_0460.png'),
  require('Epari/src/asset/activeIcons/active_0470.png'),
  require('Epari/src/asset/activeIcons/active_0480.png'),
  require('Epari/src/asset/activeIcons/active_0490.png'),
  require('Epari/src/asset/activeIcons/active_0500.png'),
  require('Epari/src/asset/activeIcons/active_0510.png'),
  require('Epari/src/asset/activeIcons/active_0520.png'),
  require('Epari/src/asset/activeIcons/active_0530.png'),
  require('Epari/src/asset/activeIcons/active_0540.png'),
  require('Epari/src/asset/activeIcons/active_0550.png'),
  require('Epari/src/asset/activeIcons/active_0560.png'),
  require('Epari/src/asset/activeIcons/active_0570.png'),
  require('Epari/src/asset/activeIcons/active_0580.png'),
  require('Epari/src/asset/activeIcons/active_0590.png'),
  require('Epari/src/asset/activeIcons/active_0600.png'),
  require('Epari/src/asset/activeIcons/active_0610.png'),
  require('Epari/src/asset/activeIcons/active_0620.png'),
  require('Epari/src/asset/activeIcons/active_0630.png'),
  require('Epari/src/asset/activeIcons/active_0640.png'),
  require('Epari/src/asset/activeIcons/active_0650.png'),
  require('Epari/src/asset/activeIcons/active_0660.png'),
  require('Epari/src/asset/activeIcons/active_0670.png'),
];
