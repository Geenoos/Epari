// import React from 'react';
// import {Dimensions, StyleSheet, View} from 'react-native';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {GetTitle, NoGetTitle, TotalTitle} from '../components/Title/Lists';
// import {TitleListStackParamList} from '../types';

// const Tab = createMaterialTopTabNavigator<TitleListStackParamList>();

// const TitleListStack = () => {
//   return (
//     <View style={styles.TitleListStackContainer}>
//       <Tab.Navigator
//         initialRouteName="TotalTitle"
//         screenOptions={{
//           tabBarStyle: styles.TabBar,
//           tabBarLabelStyle: styles.TabBarLabel,
//           tabBarItemStyle: styles.TabBarItem,
//           tabBarIndicatorStyle: styles.TabBarIndicator,
//           tabBarActiveTintColor: '#FFFFFF',
//           tabBarInactiveTintColor: '#110105',
//         }}>
//         <Tab.Screen
//           name="TotalTitle"
//           component={TotalTitle}
//           options={{title: '전체'}}
//         />
//         <Tab.Screen
//           name="GetTitle"
//           component={GetTitle}
//           options={{title: '획득'}}
//         />
//         <Tab.Screen
//           name="NoGetTitle"
//           component={NoGetTitle}
//           options={{title: '미획득'}}
//         />
//       </Tab.Navigator>
//     </View>
//   );
// };

// let ScreenHeight = Dimensions.get('window').height;

// const styles = StyleSheet.create({
//   TitleListStackContainer: {
//     height: ScreenHeight * 0.7,
//     justifyContent: 'center',
//   },
//   TabBar: {
//     width: '72%',
//     borderRadius: 90,
//     backgroundColor: '#FFFFFF',
//     alignSelf: 'center',
//     borderWidth: 2.5,
//     borderColor: '#110105',
//     marginBottom: 6,
//   },
//   TabBarLabel: {
//     fontFamily: 'NeoDGM-Regular',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   TabBarItem: {},
//   TabBarIndicator: {
//     backgroundColor: '#007C2B',
//     height: '100%',
//     borderRadius: 90,
//   },
// });

// export default TitleListStack;
