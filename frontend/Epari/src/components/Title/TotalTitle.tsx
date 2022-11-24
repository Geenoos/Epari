import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Dimensions, Pressable} from 'react-native';
import {AppStackParamList} from '../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import AppText from '../AppText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {useSetRecoilState} from 'recoil';
import {titleState} from '../../store/user';

export type TotalListScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'TotalTitle'
>;

const TotalTitle: React.FC<TotalListScreenProps> = ({navigation}) => {
  const [titles, setTitles] = useState([]);
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [profileimg, setProfileimg] = useState('');
  const [reptitle, setReptitle] = useState(0);
  const setTitleState = useSetRecoilState(titleState);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [titles]);

  async function fetchToken() {
    const user = auth().currentUser;
    await user
      ?.getIdToken(true)
      .then(idToken => {
        AsyncStorage.removeItem('GoogleAccessToken');
        AsyncStorage.setItem('GoogleAccessToken', idToken);
        // console.log('idToken', idToken);
      })
      .catch(error => console.log(error));
  }

  const getData = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('GoogleAccessToken');
      if (storedToken !== null) {
        // console.log('storedToken : ', storedToken);
        setToken(storedToken);
        getTitles(storedToken);
        const user = auth().currentUser;
        // console.log('user', user);
        setUsername(user.email.substring(0, user.email.indexOf('@')));
        setProfileimg(user.photoURL);
      }
    } catch (e) {
      console.log(e);
    }
  };
  // getData();
  // console.log('토큰', token);

  // const titleList = async () => {
  //   await fetchToken();
  //   fetch('http://j7a201.p.ssafy.io/epari/v1/titles', {
  //     headers: {
  //       Authorization: AsyncStorage.getItem('GoogleAccessToken'),
  //     }
  //   })

  const getTitles = async storedToken => {
    // await fetchToken();
    // const token = await AsyncStorage.getItem('GoogleAcessToken')
    // token.then(response => console.log(response))
    // console.log('제발', storedToken);
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: storedToken,
      },
    };
    fetch('http://j7a201.p.ssafy.io/epari/v1/titles/', requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log('토큰토큰', token)
        // console.log('칭호', result);
        setTitles(result);
        result.map(each => {
          if (each.isRep) {
            setReptitle(each.titleId);
            setTitleState(each.titleName);
          }
        });
      });
  };

  // getTitles();
  // console.log('titles', titles);

  const setRep = async titleId => {
    const rep = new FormData();
    rep.append('titleId', titleId);
    const requestPut = {
      method: 'PUT',
      body: rep,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token,
      },
    };
    fetch('http://j7a201.p.ssafy.io/epari/v1/titles/', requestPut)
      .then(response => response.json())
      .then(result => {
        // console.log('토큰토큰', token)
        // console.log('칭호', result);
        setReptitle(titleId);
        getTitles(token);
      });
  };

  return (
    <View style={styles.background}>
      <View style={styles.profilecontainer}>
        {reptitle ? (
          <View style={styles.profile}>
            <AppText style={styles.reptitle}>
              {titles[reptitle - 1].titleName}, {username}님!
            </AppText>
            <Image source={{uri: profileimg}} style={styles.Profileimg} />
          </View>
        ) : (
          <View style={styles.profile}>
            <AppText style={styles.reptitle}>
              {username}님, 칭호를 획득해보세요!
            </AppText>
            <Image source={{uri: profileimg}} style={styles.Profileimg} />
          </View>
        )}
      </View>
      <View style={styles.fencebox}>
        <Image
          source={require('Epari/src/asset/icons/fence.png')}
          style={styles.fence}
        />
        <Image
          source={require('Epari/src/asset/icons/fence.png')}
          style={styles.fence}
        />
        <Image
          source={require('Epari/src/asset/icons/fence.png')}
          style={styles.fence}
        />
        <Image
          source={require('Epari/src/asset/icons/fence.png')}
          style={styles.fence}
        />
        <Image
          source={require('Epari/src/asset/icons/fence.png')}
          style={styles.fence}
        />
        <Image
          source={require('Epari/src/asset/icons/fence.png')}
          style={styles.fence}
        />
        <Image
          source={require('Epari/src/asset/icons/fence.png')}
          style={styles.fence}
        />
        <Image
          source={require('Epari/src/asset/icons/fence.png')}
          style={styles.fence}
        />
        <Image
          source={require('Epari/src/asset/icons/fence.png')}
          style={styles.fence}
        />
      </View>
      <View style={styles.container}>
        {titles.length ? (
          titles.map(title => (
            <View key={title.titleId} style={styles.Item}>
              <Image
                source={{uri: title.titlePictureUrl}}
                style={styles.ImageItem}
              />
              <View style={styles.Text}>
                <AppText style={styles.TitleItem}>{title.titleName}</AppText>
                <AppText style={styles.TextItem}>
                  {title.titleDescription}
                </AppText>
              </View>

              <View>
                {title.isObtained ? (
                  title.isRep ? (
                    <Pressable style={[styles.button, styles.repButton]}>
                      <AppText
                        onPress={() => {
                          setRep(title.titleId);
                        }}>
                        대표
                      </AppText>
                    </Pressable>
                  ) : (
                    <Pressable style={[styles.button, styles.activeButton]}>
                      <AppText
                        onPress={() => {
                          setRep(title.titleId);
                        }}>
                        획득
                      </AppText>
                    </Pressable>
                  )
                ) : (
                  <Pressable style={[styles.button, styles.passiveButton]}>
                    <AppText>미획득</AppText>
                  </Pressable>
                )}
              </View>
            </View>
          ))
        ) : (
          <AppText>아직 획득한 칭호가 없습니다.</AppText>
        )}
      </View>
    </View>
  );
};

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFF7F2',
    height: ScreenHeight,
  },
  profilecontainer: {
    display: 'flex',
    alignItems: 'flex-end',
    marginRight: ScreenWidth * 0.05,
  },
  container: {
    display: 'flex',
    // flexWrap: 'wrap',
    // overflow: 'scroll',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Profileimg: {
    width: ScreenWidth * 0.16,
    height: ScreenWidth * 0.16,
    borderRadius: 50,
    borderWidth: 2.4,
    borderColor: 'black',
    backgroundColor: '#FFFFFF',
    marginLeft: ScreenWidth * 0.025,
  },
  reptitle: {
    marginVertical: ScreenHeight * 0.05,
    fontSize: ScreenHeight * 0.025,
  },
  fencebox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fence: {
    width: ScreenWidth * 0.1,
    height: ScreenWidth * 0.1,
  },
  Item: {
    height: ScreenWidth * 0.23,
    width: ScreenWidth * 0.95,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: ScreenHeight * 0.015,
    marginHorizontal: ScreenWidth * 0.025,
    borderRadius: 12,
    borderWidth: 2.4,
    backgroundColor: '#E6F4F1',
    padding: ScreenWidth * 0.025,
  },
  ImageItem: {
    width: ScreenWidth * 0.16,
    height: ScreenWidth * 0.16,
    borderRadius: 12,
    borderWidth: 2.4,
    borderColor: 'black',
    backgroundColor: '#FFFFFF',
  },
  Text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  TitleItem: {
    fontSize: ScreenHeight * 0.025,
    marginBottom: ScreenHeight * 0.005,
    color: '#687798',
  },
  TextItem: {
    width: ScreenWidth * 0.5,
  },
  button: {
    alignItems: 'center',
    width: ScreenWidth * 0.17,
    padding: ScreenWidth * 0.02,
    borderRadius: 10,
    borderWidth: 2,
  },
  repButton: {
    backgroundColor: '#FFAAAA',
    color: '#FFF7F2',
  },
  activeButton: {
    backgroundColor: '#687798',
    borderRadius: 10,
    borderWidth: 2,
    color: '#FFF7F2',
  },
  passiveButton: {
    backgroundColor: '#FFF7F2',
    color: '#687798',
  },
});

export default TotalTitle;
