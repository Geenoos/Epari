import React from 'react';
import {
  Image,
  Dimensions,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DoLargeModal from './DoLageModal';

const BackgroundImageList: React.FC = () => {
  const [flower1, setFlower1] = React.useState(false);
  const [flower2, setFlower2] = React.useState(false);
  const [flower3, setFlower3] = React.useState(false);
  const [flower4, setFlower4] = React.useState(false);
  const [flower5, setFlower5] = React.useState(false);
  const [flower6, setFlower6] = React.useState(false);
  const [flower7, setFlower7] = React.useState(false);
  const [flower8, setFlower8] = React.useState(false);
  const [flower9, setFlower9] = React.useState(false);
  const [flower10, setFlower10] = React.useState(false);
  const [flower11, setFlower11] = React.useState(false);
  const [flower12, setFlower12] = React.useState(false);
  const [flower13, setFlower13] = React.useState(false);
  const [flower14, setFlower14] = React.useState(false);
  const [question1, setQuestion1] = React.useState(false);
  const [question2, setQuestion2] = React.useState(false);
  const [question3, setQuestion3] = React.useState(false);
  const [question4, setQuestion4] = React.useState(false);
  const [question5, setQuestion5] = React.useState(false);
  const [question6, setQuestion6] = React.useState(false);
  const [DoLarge, setDoLarge] = React.useState(false);
  return (
    <View style={styles.Container}>
      <DoLargeModal DoLarge={DoLarge} setDoLarge={setDoLarge} />
      <TouchableOpacity
        style={styles.flowerContainer1}
        onPress={() => setFlower1(!flower1)}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0040.png')}
          style={styles.flowerImage1}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {flower1 ? (
          <View style={styles.flowerName_1}>
            <Text style={styles.nameFont}>금잔화</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.flowerContainer2}
        onPress={() => setFlower2(!flower2)}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0080.png')}
          style={styles.flowerImage2}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {flower2 ? (
          <View style={styles.flowerName_2}>
            <Text style={styles.nameFont}>절굿대</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.flowerContainer3}
        onPress={() => setFlower3(!flower3)}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0090.png')}
          style={styles.flowerImage3}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {flower3 ? (
          <View style={styles.flowerName_3}>
            <Text style={styles.nameFont}>관동화</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.flowerContainer4}
        onPress={() => setFlower4(!flower4)}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0190.png')}
          style={styles.flowerImage4}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {flower4 ? (
          <View style={styles.flowerName_4}>
            <Text style={styles.nameFont}>개양귀비</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.flowerContainer5}
        onPress={() => setFlower5(!flower5)}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0200.png')}
          style={styles.flowerImage5}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {flower5 ? (
          <View style={styles.flowerName_5}>
            <Text style={styles.nameFont}>수염패랭이꽃</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.flowerContainer6}
        onPress={() => setFlower6(!flower6)}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0240.png')}
          style={styles.flowerImage6}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {flower6 ? (
          <View style={styles.flowerName_6}>
            <Text style={styles.nameFont}>코스모스</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.flowerContainer7}
        onPress={() => setFlower7(!flower7)}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0300.png')}
          style={styles.flowerImage7}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {flower7 ? (
          <View style={styles.flowerName_7}>
            <Text style={styles.nameFont}>불란서국화</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.flowerContainer8}
        onPress={() => setFlower8(!flower8)}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0320.png')}
          style={styles.flowerImage8}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {flower8 ? (
          <View style={styles.flowerName_8}>
            <Text style={styles.nameFont}>해바라기</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.flowerContainer9}
        onPress={() => setFlower9(!flower9)}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0370.png')}
          style={styles.flowerImage9}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {flower9 ? (
          <View style={styles.flowerName_9}>
            <Text style={styles.nameFont}>바람꽃</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.flowerContainer10}
        onPress={() => setFlower10(!flower10)}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0400.png')}
          style={styles.flowerImage10}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {flower10 ? (
          <View style={styles.flowerName_10}>
            <Text style={styles.nameFont}>장미</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.flowerContainer11}
        onPress={() => setFlower11(!flower11)}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0410.png')}
          style={styles.flowerImage11}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {flower11 ? (
          <View style={styles.flowerName_11}>
            <Text style={styles.nameFont}>나팔꽃</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.flowerContainer12}
        onPress={() => setFlower12(!flower12)}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0470.png')}
          style={styles.flowerImage12}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {flower12 ? (
          <View style={styles.flowerName_12}>
            <Text style={styles.nameFont}>무궁화</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.flowerContainer13}
        onPress={() => setFlower13(!flower13)}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0670.png')}
          style={styles.flowerImage13}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {flower13 ? (
          <View style={styles.flowerName_13}>
            <Text style={styles.nameFont}>인삼</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.flowerContainer14}
        onPress={() => setFlower14(!flower14)}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0140.png')}
          style={styles.flowerImage14}
        />
      </TouchableOpacity>
      <TouchableOpacity onPressOut={() => setDoLarge(!DoLarge)}>
        {flower14 ? (
          <View style={styles.flowerName_14}>
            <Text style={styles.nameFontDolarge}>도라지</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.questionContainer1}
        onPress={() => setQuestion1(!question1)}>
        <Image
          source={require('Epari/src/asset/icons/question_mark.png')}
          style={styles.question1}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {question1 ? (
          <View style={styles.questionName_1}>
            <Text style={styles.questionFont}>A201</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.questionContainer2}
        onPress={() => setQuestion2(!question2)}>
        <Image
          source={require('Epari/src/asset/icons/question_mark.png')}
          style={styles.question2}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {question2 ? (
          <View style={styles.questionName_2}>
            <Text style={styles.questionFont}>SSAFY</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.questionContainer3}
        onPress={() => setQuestion3(!question3)}>
        <Image
          source={require('Epari/src/asset/icons/question_mark.png')}
          style={styles.question3}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {question3 ? (
          <View style={styles.questionName_3}>
            <Text style={styles.questionFont}>
              특화프로젝트{'\n'}인공지능(영상)
            </Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.questionContainer4}
        onPress={() => setQuestion4(!question4)}>
        <Image
          source={require('Epari/src/asset/icons/question_mark.png')}
          style={styles.question4}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {question4 ? (
          <View style={styles.questionName_4}>
            <Text style={styles.questionFont}>DoLarge</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.questionContainer5}
        onPress={() => setQuestion5(!question5)}>
        <Image
          source={require('Epari/src/asset/icons/question_mark.png')}
          style={styles.question5}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {question5 ? (
          <View style={styles.questionName_5}>
            <Text style={styles.questionFont}>다들 고생했어~</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.questionContainer6}
        onPress={() => setQuestion6(!question6)}>
        <Image
          source={require('Epari/src/asset/icons/question_mark.png')}
          style={styles.question6}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {question6 ? (
          <View style={styles.questionName_6}>
            <Text style={styles.questionFont}>너 중독된거야</Text>
          </View>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flowerContainer1: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    top: ScreenHeight * 0.03,
    left: -ScreenWidth * 0.37,
  },
  flowerImage1: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
  },
  flowerName_1: {
    position: 'absolute',
    top: ScreenHeight * 0.078,
    left: -ScreenWidth * 0.375,
  },
  flowerContainer2: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    top: ScreenHeight * 0.44,
    left: ScreenWidth * 0.25,
  },
  flowerImage2: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
  },
  flowerName_2: {
    position: 'absolute',
    top: ScreenHeight * 0.49,
    left: ScreenWidth * 0.25,
  },
  flowerContainer3: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    top: ScreenHeight * 0.85,
    left: -ScreenWidth * 0.4,
  },
  flowerImage3: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
  },
  flowerName_3: {
    position: 'absolute',
    top: ScreenHeight * 0.9,
    left: -ScreenWidth * 0.405,
  },
  flowerContainer4: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: -ScreenWidth * 0.1,
    top: ScreenHeight * 0.8,
  },
  flowerImage4: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
  },
  flowerName_4: {
    position: 'absolute',
    left: -ScreenWidth * 0.12,
    top: ScreenHeight * 0.85,
  },
  flowerContainer5: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: ScreenWidth * 0.32,
    top: ScreenHeight * 0.07,
  },
  flowerImage5: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
  },
  flowerName_5: {
    position: 'absolute',
    left: ScreenWidth * 0.27,
    top: ScreenHeight * 0.12,
  },
  flowerContainer6: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: ScreenWidth * 0.05,
    top: ScreenHeight * 0.55,
  },
  flowerImage6: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
  },
  flowerName_6: {
    position: 'absolute',
    left: ScreenWidth * 0.03,
    top: ScreenHeight * 0.6,
  },
  flowerContainer7: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: -ScreenWidth * 0.4,
    top: ScreenHeight * 0.4,
  },
  flowerImage7: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
  },
  flowerName_7: {
    position: 'absolute',
    left: -ScreenWidth * 0.43,
    top: ScreenHeight * 0.45,
  },
  flowerContainer8: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: ScreenWidth * 0.13,
    top: ScreenHeight * 0.013,
  },
  flowerImage8: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
  },
  flowerName_8: {
    position: 'absolute',
    left: ScreenWidth * 0.11,
    top: ScreenHeight * 0.063,
  },
  flowerContainer9: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: -ScreenWidth * 0.33,
    top: ScreenHeight * 0.71,
  },
  flowerImage9: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
  },
  flowerName_9: {
    position: 'absolute',
    left: -ScreenWidth * 0.33,
    top: ScreenHeight * 0.76,
  },
  flowerContainer10: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: ScreenWidth * 0.38,
    top: ScreenHeight * 0.26,
  },
  flowerImage10: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
  },
  flowerName_10: {
    position: 'absolute',
    left: ScreenWidth * 0.39,
    top: ScreenHeight * 0.24,
  },
  flowerContainer11: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: ScreenWidth * 0.33,
    top: ScreenHeight * 0.73,
  },
  flowerImage11: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
  },
  flowerName_11: {
    position: 'absolute',
    left: ScreenWidth * 0.325,
    top: ScreenHeight * 0.78,
  },
  flowerContainer12: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: -ScreenWidth * 0.45,
    top: ScreenHeight * 0.11,
  },
  flowerImage12: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
  },
  flowerName_12: {
    position: 'absolute',
    left: -ScreenWidth * 0.49,
    top: ScreenHeight * 0.155,
  },
  flowerContainer13: {
    width: ScreenWidth * 0.14,
    height: ScreenWidth * 0.14,
    position: 'absolute',
    left: ScreenWidth * 0.26,
    top: ScreenHeight * 0.58,
  },
  flowerImage13: {
    width: ScreenWidth * 0.14,
    height: ScreenWidth * 0.14,
    position: 'absolute',
  },
  flowerName_13: {
    position: 'absolute',
    left: ScreenWidth * 0.29,
    top: ScreenHeight * 0.56,
  },
  flowerContainer14: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
    left: -ScreenWidth * 0.38,
    top: ScreenHeight * 0.54,
  },
  flowerImage14: {
    width: ScreenWidth * 0.09,
    height: ScreenWidth * 0.09,
    position: 'absolute',
  },
  flowerName_14: {
    position: 'absolute',
    left: -ScreenWidth * 0.41,
    top: ScreenHeight * 0.59,
  },
  questionContainer1: {
    width: ScreenWidth * 0.12,
    height: ScreenWidth * 0.12,
    position: 'absolute',
    left: ScreenWidth * 0.02,
    top: ScreenHeight * 0.08,
  },
  question1: {
    width: ScreenWidth * 0.12,
    height: ScreenWidth * 0.12,
    position: 'absolute',
  },
  questionName_1: {
    position: 'absolute',
    left: ScreenWidth * 0.04,
    top: ScreenHeight * 0.07,
  },
  questionContainer2: {
    width: ScreenWidth * 0.12,
    height: ScreenWidth * 0.12,
    position: 'absolute',
    left: -ScreenWidth * 0.45,
    top: ScreenHeight * 0.25,
  },
  question2: {
    width: ScreenWidth * 0.12,
    height: ScreenWidth * 0.12,
    position: 'absolute',
  },
  questionName_2: {
    position: 'absolute',
    left: -ScreenWidth * 0.48,
    top: ScreenHeight * 0.242,
  },
  questionContainer3: {
    width: ScreenWidth * 0.12,
    height: ScreenWidth * 0.12,
    position: 'absolute',
    left: ScreenWidth * 0.14,
    top: ScreenHeight * 0.35,
  },
  question3: {
    width: ScreenWidth * 0.12,
    height: ScreenWidth * 0.12,
    position: 'absolute',
  },
  questionName_3: {
    position: 'absolute',
    left: -ScreenWidth * 0.05,
    top: ScreenHeight * 0.37,
  },
  questionContainer4: {
    width: ScreenWidth * 0.12,
    height: ScreenWidth * 0.12,
    position: 'absolute',
    left: -ScreenWidth * 0.2,
    top: ScreenHeight * 0.45,
  },
  question4: {
    width: ScreenWidth * 0.12,
    height: ScreenWidth * 0.12,
    position: 'absolute',
  },
  questionName_4: {
    position: 'absolute',
    left: -ScreenWidth * 0.2,
    top: ScreenHeight * 0.44,
  },
  questionContainer5: {
    width: ScreenWidth * 0.12,
    height: ScreenWidth * 0.12,
    position: 'absolute',
    left: ScreenWidth * 0.23,
    top: ScreenHeight * 0.85,
  },
  question5: {
    width: ScreenWidth * 0.12,
    height: ScreenWidth * 0.12,
    position: 'absolute',
  },
  questionName_5: {
    position: 'absolute',
    left: ScreenWidth * 0.25,
    top: ScreenHeight * 0.84,
  },
  questionContainer6: {
    width: ScreenWidth * 0.12,
    height: ScreenWidth * 0.12,
    position: 'absolute',
    left: -ScreenWidth * 0.22,
    top: ScreenHeight * 0.9,
  },
  question6: {
    width: ScreenWidth * 0.12,
    height: ScreenWidth * 0.12,
    position: 'absolute',
  },
  questionName_6: {
    position: 'absolute',
    left: -ScreenWidth * 0.24,
    top: ScreenHeight * 0.89,
  },
  nameFont: {
    position: 'absolute',
    fontFamily: 'NeoDGM-Regular',
    color: '#99DBE9',
    fontSize: ScreenWidth * 0.03,
    textShadowColor: '#110105',
    textShadowRadius: 2,
    textShadowOffset: {
      width: ScreenWidth * 0.002,
      height: ScreenHeight * 0.0013,
    },
  },
  DoLarge: {},
  nameFontDolarge: {
    position: 'absolute',
    fontFamily: 'NeoDGM-Regular',
    color: '#720000',
    fontSize: ScreenWidth * 0.05,
    textShadowColor: '#FFAAAA',
    textShadowRadius: 2,
    textShadowOffset: {
      width: ScreenWidth * 0.003,
      height: ScreenHeight * 0.0023,
    },
  },
  questionFont: {
    position: 'absolute',
    fontFamily: 'NeoDGM-Regular',
    color: '#FFC67D',
    fontSize: ScreenWidth * 0.03,
    textShadowColor: '#720000',
    textShadowRadius: 2,
    textShadowOffset: {
      width: ScreenWidth * 0.002,
      height: ScreenHeight * 0.0013,
    },
  },
});
export default BackgroundImageList;
