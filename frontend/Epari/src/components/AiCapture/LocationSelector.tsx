import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {useSetRecoilState} from 'recoil';
import {areaCode, sigunguCode} from '../../store/classification';
import AppText from '../AppText';

const LocationSelector: React.FC = () => {
  const [category, setCategory] = useState(1);
  const [subCategory, setSubCategory] = useState('');

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState({});

  const setAreaCode = useSetRecoilState(areaCode);
  const setSigunguCode = useSetRecoilState(sigunguCode);
  useEffect(() => {
    locationList();
  }, []);

  const locationList = () => {
    // fetch('http://127.0.0.1:8000/epari/v1/locations/location')
    fetch('http://j7a201.p.ssafy.io/epari/v1/locations/location')
      .then(response => response.json())
      .then(result => {
        let tmpArea = 0;
        let tmpAreaArray = [];
        let tmpSigunguArray = [];
        result.map(item => {
          if (tmpArea !== item.areaId) {
            tmpAreaArray.push({
              key: item.areaId,
              value: item.areaName,
            });
            tmpSigunguArray = [];
            tmpSigunguArray.push({
              key: item.sigunguId,
              value: item.sigunguName,
            });
            tmpArea = item.areaId;
          } else {
            tmpSigunguArray.push({
              key: item.sigunguId,
              value: item.sigunguName,
            });
          }
          subCategories[item.areaId] = tmpSigunguArray;
          setCategories(tmpAreaArray);
        });
      })
      .catch(err => console.log);
  };

  const setArea = () => {
    setAreaCode(category);
  };
  const setSigungu = () => {
    setSigunguCode(subCategory);
  };
  return (
    <View style={styles.container}>
      <AppText style={styles.selectLabel}>지역: </AppText>
      <View style={styles.selectContainer}>
        <SelectList
          onSelect={setArea}
          setSelected={setCategory}
          data={categories}
          search={false}
          placeholder={'시/도'}
          dafaultOption={{key: 1, value: '서울시'}}
          boxStyles={{
            backgroundColor: '#F6EDD9',
            width: ScreenWidth / 3,
            // marginHorizontal: 10,
            borderWidth: 3,
            borderColor: '#3A4A40',
          }}
          dropdownStyles={{
            backgroundColor: '#F6EDD9',
            borderWidth: 3,
            borderColor: '#3A4A40',
          }}
          inputStyles={{
            fontFamily: 'NeoDGM-Regular',
            fontSize: ScreenHeight * 0.02,
          }}
          dropdownTextStyles={{
            fontFamily: 'NeoDGM-Regular',
            fontSize: ScreenHeight * 0.02,
          }}
        />
        <SelectList
          onSelect={setSigungu}
          setSelected={setSubCategory}
          data={subCategories[category]}
          search={false}
          placeholder={'시/군/구'}
          boxStyles={{
            backgroundColor: '#F6EDD9',
            width: ScreenWidth / 3,
            borderWidth: 3,
            borderColor: '#3A4A40',
          }}
          dropdownStyles={{
            backgroundColor: '#F6EDD9',
            borderWidth: 3,
            borderColor: '#3A4A40',
          }}
          inputStyles={{
            fontFamily: 'NeoDGM-Regular',
            fontSize: ScreenHeight * 0.02,
          }}
          dropdownTextStyles={{
            fontFamily: 'NeoDGM-Regular',
            fontSize: ScreenHeight * 0.02,
          }}
        />
      </View>
    </View>
  );
};

export default LocationSelector;

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
  },
  selectLabel: {
    fontSize: ScreenHeight * 0.02,
    marginVertical: ScreenHeight * 0.02,
  },
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'flex-start',
  },
});
