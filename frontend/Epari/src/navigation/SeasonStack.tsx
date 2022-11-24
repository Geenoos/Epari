// import axios from 'axios';
import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  SpringList,
  SummerList,
  FallList,
  WinterList,
} from '../components/HerbBook/Lists/Season';
import {SeasonStackParamList} from '../types';
const Tab = createMaterialTopTabNavigator<SeasonStackParamList>();

const SeasonStack = () => {
  return (
    <View style={styles.SeasonStackContatiner}>
      <Tab.Navigator
        initialRouteName="SpringList"
        screenOptions={{
          tabBarStyle: styles.TabBar,
          tabBarLabelStyle: styles.TabBarLabel,
          tabBarItemStyle: styles.TabBarItem,
          tabBarIndicatorStyle: styles.TabBarIndicator,
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#110105',
        }}>
        <Tab.Screen
          name="SpringList"
          component={SpringList}
          options={{title: '봄'}}
        />
        <Tab.Screen
          name="SummerList"
          component={SummerList}
          options={{title: '여름'}}
        />
        <Tab.Screen
          name="FallList"
          component={FallList}
          options={{title: '가을'}}
        />
        <Tab.Screen
          name="WinterList"
          component={WinterList}
          options={{title: '겨을'}}
        />
      </Tab.Navigator>
    </View>
  );
};

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFF7F2',
  },
  button: {
    borderRadius: ScreenWidth * 0.02,
    margin: ScreenWidth * 0.035,
    padding: ScreenWidth * 0.02,
    elevation: ScreenWidth * 0.01,
    width: ScreenWidth * 0.15,
    backgroundColor: '#110105',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: ScreenWidth * 0.05,
    fontFamily: 'NeoDGM-Regular',
  },
  SeasonStackContatiner: {
    height: ScreenHeight * 0.78,
    justifyContent: 'center',
    backgroundColor: '#FFF7F2',
    paddingBottom: 100,
  },
  TabBar: {
    width: '88%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginBottom: 6,
  },
  TabBarLabel: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  TabBarItem: {},
  TabBarIndicator: {
    backgroundColor: '#1D976C',
    height: '100%',
    width: '25%',
    borderRadius: 12,
  },
});

export default SeasonStack;
