import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {useRecoilValue} from 'recoil';
import {getLoginState} from '../store/user';

const MainNav: React.FC = () => {
  const isLogin = useRecoilValue(getLoginState);

  return (
    <NavigationContainer>
      {isLogin ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNav;
