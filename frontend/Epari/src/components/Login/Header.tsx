import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const Header: React.FC = () => {
  const [titleENGKOR, setTitleENGKOR] = React.useState(true);
  const [subTitle, setSubTitle] = React.useState(true);
  return (
    <View style={styles.HeaderContainer}>
      {titleENGKOR ? (
        <TouchableOpacity onPressOut={() => setTitleENGKOR(!titleENGKOR)}>
          <Text style={styles.Header1}>EPARI</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPressOut={() => setTitleENGKOR(!titleENGKOR)}>
          <Text style={styles.Header2}>이파리</Text>
        </TouchableOpacity>
      )}
      {subTitle ? (
        <TouchableOpacity onPressOut={() => setSubTitle(!subTitle)}>
          <View>
            <Text style={styles.font_2}>
              <Text style={styles.capital}>E</Text>ducated{' '}
              <Text style={styles.capital}>P</Text>lant{' '}
              <Text style={styles.capital}>A</Text>i{' '}
              <Text style={styles.capital}>R</Text>ecognition{' '}
              <Text style={styles.capital}>I</Text>llustrated book
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPressOut={() => setSubTitle(!subTitle)}>
          <View>
            <Text style={styles.font_2}>
              <Text style={styles.capital}>싸</Text>피{' '}
              <Text style={styles.capital}>7</Text>기{' '}
              <Text style={styles.capital}>특</Text>화프로젝트{' '}
              <Text style={styles.capital}>인</Text>공지능{' '}
              <Text style={styles.capital}>A</Text>201
            </Text>
          </View>
        </TouchableOpacity>
      )}
      <Text style={styles.font_3}>
        press login to <Text style={styles.capital}>start</Text>
      </Text>
    </View>
  );
};

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  HeaderContainer: {
    marginTop: ScreenHeight * 0.13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Header1: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFF7F2',
    // textShadowColor: 'rgb(151, 141, 255)',
    textShadowColor: '#FFAAAA',
    textShadowRadius: 2,
    textShadowOffset: {
      width: ScreenWidth * 0.015,
      height: ScreenHeight * 0.01,
    },
    fontSize: ScreenWidth * 0.3,
  },
  Header2: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFF7F2',
    // textShadowColor: 'rgb(151, 141, 255)',
    textShadowColor: '#FFAAAA',
    textShadowRadius: 2,
    textShadowOffset: {
      width: ScreenWidth * 0.015,
      height: ScreenHeight * 0.01,
    },
    fontSize: ScreenWidth * 0.3,
  },
  capital: {
    fontSize: ScreenWidth * 0.07,
    color: '#CEDDF2',
  },
  font_2: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFF7F2',
    fontSize: ScreenWidth * 0.035,
    textShadowColor: 'rgb(244, 182, 255)',
    textShadowRadius: 2,
    textShadowOffset: {
      width: ScreenWidth * 0.004,
      height: ScreenHeight * 0.0025,
    },
  },
  font_3: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFF7F2',
    position: 'absolute',
    fontSize: ScreenWidth * 0.035,
    textShadowColor: 'rgb(244, 182, 255)',
    textShadowRadius: 2,
    top: ScreenHeight * 0.375,
    textShadowOffset: {
      width: ScreenWidth * 0.003,
      height: ScreenHeight * 0.003,
    },
  },
});
export default Header;
