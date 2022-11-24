import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SeasonStackParamList} from '../../../../types/SeasonStackParamList';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ListItem from './../ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type GetListScreenProps = NativeStackScreenProps<
  SeasonStackParamList,
  'WinterList'
>;

const WinterList: React.FC<GetListScreenProps> = ({navigation}) => {
  const [bookList, setBookList] = React.useState([]);

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
  }, []);
  return (
    <ScrollView style={styles.background}>
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
    </ScrollView>
  );
};

export default WinterList;

// let ScreenWidth = Dimensions.get('window').width;
// let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF7F2',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    overflow: 'scroll',
    justifyContent: 'center',
    backgroundColor: '#FFF7F2',
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
