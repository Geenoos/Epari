import React from 'react';
import MainNav from './src/navigation/MainNavigator';
import {RecoilRoot} from 'recoil';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '126188289267-4ii18qf3etih6ht49beh3ijfopfq6i6m.apps.googleusercontent.com',
});

const App = () => {
  return (
    <RecoilRoot>
      <MainNav />
    </RecoilRoot>
  );
};

export default App;
