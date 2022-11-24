import React from 'react';
import auth from '@react-native-firebase/auth';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useRecoilState} from 'recoil';
import {loginState} from '../../store/user';

type BottomProps = {
  navigation: any;
};

const Bottom: React.FC<BottomProps> = ({navigation}) => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  async function movePageAI() {
    navigation.navigate('AiCapture');
  }
  async function movePageBook() {
    navigation.navigate('HerbBook');
  }
  async function movePageTitle() {
    navigation.navigate('TitleList');
  }
  async function movePageLogin() {
    auth()
      .signOut()
      .then(() => {
        setIsLogin(!isLogin);
      });
  }

  return (
    <View style={styles.bottomContainer}>
      <View style={styles.bottomBox}>
        <TouchableOpacity onPress={() => movePageAI()}>
          <View style={styles.leftButton1}>
            <Text style={styles.font_3}>A I</Text>
            <Text style={styles.font_2}>이 꽃이 무슨꽃인가?</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => movePageBook()}>
          <View style={styles.rightButton1}>
            <Text style={styles.font_3}>Book</Text>
            <Text style={styles.font_2}>내가 수집한 꽃 보여줘!</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBox}>
        <TouchableOpacity onPress={() => movePageTitle()}>
          <View style={styles.leftButton2}>
            <Text style={styles.font_3}>Title</Text>
            <Text style={styles.font_2}>내가 획득한 칭호는?</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => movePageLogin()}>
          <View style={styles.rightButton2}>
            <Text style={styles.font_4}>Log ! Out ?</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  font_1: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFF7F2',
  },
  font_2: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFF7F2',
    fontSize: ScreenWidth * 0.03,
    textShadowColor: '#474747',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 1.8,
      height: 1.8,
    },
  },
  font_3: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFF7F2',
    fontSize: ScreenWidth * 0.15,
    textShadowColor: '#110105',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 1.8,
      height: 1.8,
    },
  },
  font_4: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFF7F2',
    fontSize: ScreenWidth * 0.11,
    textShadowColor: '#110105',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 1.8,
      height: 1.8,
    },
  },
  bottomContainer: {
    position: 'relative',
    top: ScreenHeight * 0.03,
  },
  bottomBox: {
    flexDirection: 'row',
    marginBottom: ScreenHeight * 0.02,
  },
  leftButton1: {
    width: ScreenWidth * 0.38,
    height: ScreenWidth * 0.28,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F89B00',
    borderRadius: 15,
    borderWidth: 7,
    borderColor: '#FFDCB8',
    left: -ScreenWidth * 0.07,
  },
  rightButton1: {
    width: ScreenWidth * 0.38,
    height: ScreenWidth * 0.28,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#218200',
    borderRadius: 15,
    borderWidth: 7,
    borderColor: '#CEEAC0',

    right: -ScreenWidth * 0.07,
  },
  leftButton2: {
    width: ScreenWidth * 0.38,
    height: ScreenWidth * 0.28,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3561F1',
    borderRadius: 15,
    borderWidth: 7,
    borderColor: '#99DBE9',
    left: -ScreenWidth * 0.07,
  },
  rightButton2: {
    width: ScreenWidth * 0.38,
    height: ScreenWidth * 0.28,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#720000',
    borderRadius: 15,
    borderWidth: 7,
    borderColor: '#FFAAAA',
    right: -ScreenWidth * 0.07,
  },
});
export default Bottom;
