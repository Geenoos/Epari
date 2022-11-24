import React from 'react';
import {Text} from 'react-native';

const AppText: React.FC = props => {
  return (
    <Text {...props} style={{...props.style, fontFamily: 'NeoDGM-Regular'}}>
      {props.children}
    </Text>
  );
};

export default AppText;
