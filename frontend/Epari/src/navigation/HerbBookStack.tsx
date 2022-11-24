import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {GetList, NoGetList, TotalList} from '../components/HerbBook/Lists';
import {SeasonBlock} from '../components/HerbBook/Lists';
import {HerbBookStackParamList} from '../types';
const Tab = createMaterialTopTabNavigator<HerbBookStackParamList>();

const HerbBookStack = () => {
  return (
    <View style={styles.HerbBookStackContatiner}>
      <Tab.Navigator
        initialRouteName="TotalList"
        screenOptions={{
          tabBarStyle: styles.TabBar,
          tabBarLabelStyle: styles.TabBarLabel,
          tabBarItemStyle: styles.TabBarItem,
          tabBarIndicatorStyle: styles.TabBarIndicator,
          tabBarActiveTintColor: '#FFF7F2',
          tabBarInactiveTintColor: '#110105',
        }}>
        <Tab.Screen
          name="TotalList"
          component={TotalList}
          options={{title: '전체'}}
        />
        <Tab.Screen
          name="GetList"
          component={GetList}
          options={{title: '수집'}}
        />
        <Tab.Screen
          name="NoGetList"
          component={NoGetList}
          options={{title: '미수집'}}
        />
        <Tab.Screen
          name="Season"
          component={SeasonBlock}
          options={{title: '계절'}}
        />
      </Tab.Navigator>
    </View>
  );
};

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  HerbBookStackContatiner: {
    height: ScreenHeight * 0.76,
    justifyContent: 'center',
    backgroundColor: '#FFF7F2',
  },
  TabBar: {
    width: '82%',
    borderRadius: 90,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    borderWidth: 2.5,
    borderColor: '#110105',
    marginBottom: 6,
  },
  TabBarLabel: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: ScreenWidth * 0.031,
    textAlign: 'center',
  },
  TabBarItem: {},
  TabBarIndicator: {
    backgroundColor: '#FFAAAA',
    height: '100%',
    width: '23.7%',
    borderRadius: 90,
  },
});
export default HerbBookStack;
