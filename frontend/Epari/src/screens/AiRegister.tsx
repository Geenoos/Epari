import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import RegisterForm from '../components/AiCapture/RegisterForm';
import {AppStackParamList} from '../types';

export type RegisterScreenProps = StackScreenProps<
  AppStackParamList,
  'AiRegister'
>;

const RegisterImage: React.FC<RegisterScreenProps> = ({navigation}) => {
  return <RegisterForm navigation={navigation} />;
};

export default RegisterImage;
