import React from 'react';
import {StyleSheet, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import axios from 'axios';
// import LogoutButton from './LogoutButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userTokenState, loginState} from '../../store/user';
import {useRecoilState} from 'recoil';

type GoogleSignInProps = {navigation: any};
const GoogleSignIn: React.FC<GoogleSignInProps> = ({navigation}) => {
  // const [modalVisible, setModalVisible] = useState(false);
  const [userIdToken, setUserIdToken] = useRecoilState(userTokenState);
  const [isLogin, setIsLogin] = useRecoilState(loginState);

  async function fetchToken() {
    const user = auth().currentUser;
    // console.log('fetch Token');
    await user?.getIdToken(true).then(idToken => postToken(idToken));
    // console.log(user);
  }

  const storeData = async (token: string | number | boolean | undefined) => {
    try {
      await AsyncStorage.setItem('GoogleAccessToken', token);
      // console.log('token', token);
    } catch (e) {
      console.log(e);
    }
  };

  async function postToken(idToken: any) {
    axios
      // .post('http://10.0.2.2:8000/epari/v1/accounts/login', {}, {
      // .post(
      //   'http://127.0.0.1:8000/epari/v1/accounts/login',
      //   {},
      //   {
      .post(
        'http://j7a201.p.ssafy.io/epari/v1/accounts/login',
        {},
        {
          // userId: header,
          // userPassword: user.password,
          headers: {
            Authorization: idToken,
          },
        },
      )
      .then(function (response) {
        // console.log('456:', response);
        setIsLogin(!isLogin);
        storeData(response.config.headers.Authorization);
      })
      .catch(error => {
        console.log('error : ', error.message);
      });
  }

  // 구글 로그인 과정
  async function onGoogleButtonPress() {
    // console.log('로그인한다');
    const {idToken} = await GoogleSignin.signIn();
    // const userInfo = await GoogleSignin.signIn();
    const accessToken = (await GoogleSignin.getTokens()).accessToken;
    // storeData(idToken);
    // storeData(accessToken);
    // console.log('idToken', idToken);
    setUserIdToken(accessToken);
    // console.log(userInfo);
    // console.log('accessToken', accessToken);
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // console.log('googleCredential');
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
  return (
    <View style={styles.header}>
      <GoogleSigninButton
        style={styles.gbtn}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        // size={GoogleSigninButton.Size.Icon}
        onPress={() =>
          onGoogleButtonPress()
            .then(() => {
              // console.log('Signed in with Google!');
              fetchToken();
            })
            .then(() => {})
        }
      />
      {/* <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <GoogleSigninButton
              style={styles.gbtn}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              // size={GoogleSigninButton.Size.Icon}
              onPress={() =>
                onGoogleButtonPress().then(() => {
                  console.log('Signed in with Google!');
                  tokenToken();
                })
              }
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>로그인 안 해</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>로그인 필요!!</Text>
      </Pressable> */}
      {/* <LogoutButton /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  lefticon: {
    marginTop: -100,
    marginBottom: 100,
    width: 200,
    height: 200,
  },
  gbtn: {
    width: 240,
    height: 60,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default GoogleSignIn;
