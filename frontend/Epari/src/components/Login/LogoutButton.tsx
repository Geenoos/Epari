import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import auth from '@react-native-firebase/auth';

const LogoutButton: React.FC = () => {
  return (
    <View>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => googleSignOut()}>
        <Text style={styles.textStyle}>LogOut</Text>
      </Pressable>
    </View>
  );
};

async function googleSignOut() {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default LogoutButton;
