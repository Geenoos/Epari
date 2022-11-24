import React from 'react';
import {View} from 'react-native';
// import {atom, selector, useRecoilState} from 'recoil';

// const tempFahrenheit = atom({
//   key: 'tempFahrenheit',
//   default: 32,
// });

// const tempCelsius = selector({
//   key: 'tempCelsius',
//   get: ({get}) => ((get(tempFahrenheit) - 32) * 5) / 9,
//   set: ({set}, newValue) => set(tempFahrenheit, (newValue * 9) / 5 + 32),
// });

const GoogleInform: React.FC = () => {
  // const [tempF, setTempF] = useRecoilState(tempFahrenheit);
  // const [tempC, setTempC] = useRecoilState(tempCelsius);

  // const addTenCelsius = () => setTempC(tempC + 10);
  // const addTenFahrenheit = () => setTempF(tempF + 10);

  return (
    <View>
      {/* Temp (Celsius): {tempC}
      <br />
      Temp (Fahrenheit): {tempF}
      <br />
      <Button onPress={addTenCelsius}>Add 10 Celsius</Button>
      <br />
      <Button onClick={addTenFahrenheit}>Add 10 Fahrenheit</Button> */}
    </View>
    // <View style={styles.container}>
    //   <Text>정보</Text>
    // </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF7F2',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default GoogleInform;
