import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppStackParamList} from '../types';
import {
  HerbCollectionList,
  HerbDetailHeader,
  HerbInfo,
} from '../components/HerbDetail';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type DetailScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'HerbDetail'
>;

const HerbDetail: React.FC<DetailScreenProps> = ({
  route,
  navigation,
}: DetailScreenProps) => {
  const id = route.params.id;
  const description = route.params.description;
  const detailPictureUrl = route.params.detailPictureUrl;
  const plantName = route.params.plantName;
  const [collectionList, setCollectionList] = React.useState([]);
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
          const url = `http://j7a201.p.ssafy.io/epari/v1/collection/`;
          let pathURL = `${url}${id}`;
          // console.log(pathURL);
          await fetch(pathURL, requestOptions)
            .then(response => {
              response.json().then(res => setCollectionList(res));
            })

            .catch(error => console.log(error));
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [id]);

  return (
    <View style={styles.background}>
      <HerbDetailHeader navigation={navigation} />
      <HerbInfo
        plantName={plantName}
        description={description}
        detailPictureUrl={detailPictureUrl}
      />
      <HerbCollectionList id={id} collection={collectionList} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF7F2',
    justifyContent: 'flex-start',
  },
});
export default HerbDetail;
