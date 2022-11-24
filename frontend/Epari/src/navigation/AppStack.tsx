import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Home,
  AiCapture,
  AiResult,
  HerbBook,
  HerbDetail,
  UserPage,
  TitleList,
} from '../screens';
import AiRegister from '../screens/AiRegister';
import AiSpareResult from '../screens/AiSpareResult';
import AiError from '../screens/AiError';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamList} from '../types';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {Navigator, Screen} = createBottomTabNavigator<AppStackParamList>();
const Stack = createNativeStackNavigator<AppStackParamList>();

const Tab: React.FC = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: styles.TabBarLabel,
        tabBarActiveTintColor: '#FFAAAA',
        tabBarInactiveTintColor: '#110105',
      }}>
      <Screen
        name="TitleList"
        component={TitleList}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="medal" size={30} color="#FFAAAA" />
            ) : (
              <Ionicons name="medal-outline" size={30} color="#110105" />
            ),
          title: '칭호',
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="home" size={30} color="#FFAAAA" />
            ) : (
              <Ionicons name="home-outline" size={30} color="#110105" />
            ),
          title: 'EPARI',
        }}
      />
      <Screen
        name="HerbBook"
        component={HerbBook}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="leaf" size={30} color="#FFAAAA" />
            ) : (
              <Ionicons name="leaf-outline" size={30} color="#110105" />
            ),
          title: '도감',
        }}
      />
    </Navigator>
  );
};

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={Tab} />
      <Stack.Screen name="AiCapture" component={AiCapture} />
      <Stack.Screen name="AiResult" component={AiResult} />
      <Stack.Screen name="AiRegister" component={AiRegister} />
      <Stack.Screen name="AiSpareResult" component={AiSpareResult} />
      <Stack.Screen name="AiError" component={AiError} />
      <Stack.Screen name="HerbDetail" component={HerbDetail} />
      <Stack.Screen name="UserPage" component={UserPage} />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  HerbBookStackContatiner: {
    justifyContent: 'center',
  },

  TabBarLabel: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
});
export default AppStack;
