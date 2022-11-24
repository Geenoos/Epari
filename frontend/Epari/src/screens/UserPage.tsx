import React from 'react';
import {View, StyleSheet} from 'react-native';
import GoogleInform from '../components/UserPage/GoogleInform';

const UserPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <GoogleInform />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserPage;
