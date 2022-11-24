import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const SampleCollection: React.FC = () => {
  return (
    <View style={styles.sample_collection}>
      <View style={styles.Dolarge}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0200.png')}
          style={styles.DolargeImage}
        />
      </View>
      <View style={styles.Dolarge}>
        <Image
          source={require('Epari/src/asset/icons/question_mark.png')}
          style={styles.DolargeImage}
        />
      </View>
      <View style={styles.Dolarge}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0320.png')}
          style={styles.DolargeImage}
        />
      </View>
      <View style={styles.Dolarge}>
        <Image
          source={require('Epari/src/asset/icons/question_mark.png')}
          style={styles.DolargeImage}
        />
      </View>
      <View style={styles.Dolarge}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0300.png')}
          style={styles.DolargeImage}
        />
      </View>
      <View style={styles.Dolarge}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0410.png')}
          style={styles.DolargeImage}
        />
      </View>
      <View style={styles.Dolarge}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0470.png')}
          style={styles.DolargeImage}
        />
      </View>
      <View style={styles.Dolarge}>
        <Image
          source={require('Epari/src/asset/icons/question_mark.png')}
          style={styles.DolargeImage}
        />
      </View>
      <View style={styles.Dolarge}>
        <Image
          source={require('Epari/src/asset/icons/question_mark.png')}
          style={styles.DolargeImage}
        />
      </View>
      <View style={styles.Dolarge}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0400.png')}
          style={styles.DolargeImage}
        />
      </View>
      <View style={styles.Dolarge}>
        <Image
          source={require('Epari/src/asset/icons/question_mark.png')}
          style={styles.DolargeImage}
        />
      </View>
      <View style={styles.Dolarge}>
        <Image
          source={require('Epari/src/asset/loginpageicons/active_0670.png')}
          style={styles.DolargeImage}
        />
      </View>
    </View>
  );
};
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  Dolarge: {
    width: ScreenWidth * 0.16,
    height: ScreenWidth * 0.16,
    margin: ScreenWidth * 0.02,
    marginHorizontal: ScreenWidth * 0.025,
    borderWidth: ScreenWidth * 0.007,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  DolargeImage: {
    width: ScreenWidth * 0.14,
    height: ScreenWidth * 0.14,
    borderRadius: 15,
  },
  sample_collection: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFAAAA',
    width: ScreenWidth * 0.9,
    borderRadius: 15,
    borderWidth: 4,
    marginTop: ScreenHeight * 0.02,
  },
});

export default SampleCollection;
