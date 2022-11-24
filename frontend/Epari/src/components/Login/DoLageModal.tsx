import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';

type DoLargeModalProps = {
  children?: React.ReactNode;
  DoLarge: boolean;
  setDoLarge: any;
};

const DoLargeModal: React.FC<DoLargeModalProps> = ({DoLarge, setDoLarge}) => {
  return (
    <Modal
      isVisible={DoLarge}
      onBackButtonPress={() => setDoLarge(!DoLarge)}
      onBackdropPress={() => setDoLarge(!DoLarge)}
      useNativeDriver={true}>
      <View style={styles.ModalContainer}>
        <View style={styles.topContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require('Epari/src/asset/logo/DoLarge.png')}
              style={styles.logoProfile}
            />
          </View>
          <View style={styles.TitleContainer}>
            <Text style={styles.TitleFont}>A201 DoLarge(도라지)</Text>
            <View style={styles.ThemeContainer}>
              <Text style={styles.ThemeFont}>SSAFY 특화프로젝트 인공지능</Text>
            </View>
            <View style={styles.DateContainer}>
              <Text style={styles.DateFont}>
                <Text style={styles.FromTo}>From </Text>20220822{' '}
                <Text style={styles.FromTo}>To</Text> 20221007
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.CenterContainer}>
          <View style={styles.PlaceContainer}>
            <View>
              <Ionicons name="location-outline" size={24} color="#474747" />
            </View>
            <View style={styles.place}>
              <Text style={styles.PlaceFont}>
                서울특별시 강남구 역삼역 멀티캠퍼스
              </Text>
            </View>
          </View>
          <View style={styles.profileView}>
            <View style={styles.profileContainer}>
              <View style={styles.profileImageContainer}>
                <Image
                  source={require('Epari/src/asset/profile/profile1.png')}
                  style={styles.userProfile}
                />
              </View>
              <View style={styles.userTextContainer}>
                <View style={styles.userNameContainer}>
                  <Text style={styles.userNameFont}>
                    류경하<Text> ( 팀장 )</Text>
                  </Text>
                </View>
                <View style={styles.userRoleContainer}>
                  <Text style={styles.userRoleFont}>
                    BackEnd ( 서버 , 도감등록 )
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.profileContainer}>
              <View style={styles.profileImageContainer}>
                <Image
                  source={require('Epari/src/asset/profile/profile2.png')}
                  style={styles.userProfile}
                />
              </View>
              <View style={styles.userTextContainer}>
                <View style={styles.userNameContainer}>
                  <Text style={styles.userNameFont}>이현진</Text>
                </View>
                <View style={styles.userRoleContainer}>
                  <Text style={styles.userRoleFont}>
                    BackEnd ( AI , 로그인 ){' '}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.profileContainer}>
              <View style={styles.profileImageContainer}>
                <Image
                  source={require('Epari/src/asset/profile/profile3.png')}
                  style={styles.userProfile}
                />
              </View>
              <View style={styles.userTextContainer}>
                <View style={styles.userNameContainer}>
                  <Text style={styles.userNameFont}>김영범</Text>
                </View>
                <View style={styles.userRoleContainer}>
                  <Text style={styles.userRoleFont}>
                    BackEnd ( AI , 로그인 )
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.profileContainer}>
              <View style={styles.profileImageContainer}>
                <Image
                  source={require('Epari/src/asset/profile/profile4.png')}
                  style={styles.userProfile}
                />
              </View>
              <View style={styles.userTextContainer}>
                <View style={styles.userNameContainer}>
                  <Text style={styles.userNameFont}>김정현</Text>
                </View>
                <View style={styles.userRoleContainer}>
                  <Text style={styles.userRoleFont}>
                    BackEnd ( 도감등록, 칭호 )
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.profileContainer}>
              <View style={styles.profileImageContainer}>
                <Image
                  source={require('Epari/src/asset/profile/profile5.png')}
                  style={styles.userProfile}
                />
              </View>
              <View style={styles.userTextContainer}>
                <View style={styles.userNameContainer}>
                  <Text style={styles.userNameFont}>정유송</Text>
                </View>
                <View style={styles.userRoleContainer}>
                  <Text style={styles.userRoleFont}>
                    FrontEnd ( 도감 등록 )
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.profileContainer}>
              <View style={styles.profileImageContainer}>
                <Image
                  source={require('Epari/src/asset/profile/profile6.png')}
                  style={styles.userProfile}
                />
              </View>
              <View style={styles.userTextContainer}>
                <View style={styles.userNameContainer}>
                  <Text style={styles.userNameFont}>최진우</Text>
                </View>
                <View style={styles.userRoleContainer}>
                  <Text style={styles.userRoleFont}>
                    FrontEnd ( 도감 리스트 ){' '}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setDoLarge(!DoLarge)}
            style={styles.closeButton}>
            <Ionicons name="md-close" size={30} color="#474747" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  ModalContainer: {
    width: ScreenWidth * 0.9,
    height: ScreenHeight * 0.8,
    alignSelf: 'center',
    backgroundColor: '#C5D7F2',
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#FFC67D',
  },
  topContainer: {
    flexDirection: 'row',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: ScreenWidth * 0.03,
    marginTop: ScreenWidth * 0.03,
  },
  logoProfile: {
    width: ScreenWidth * 0.1,
    height: ScreenWidth * 0.14,
  },
  TitleContainer: {
    width: ScreenWidth * 0.6,
    height: ScreenHeight * 0.07,
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 15,
  },
  TitleFont: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: 21,
    color: '#110105',
  },
  ThemeContainer: {
    marginTop: ScreenWidth * 0.01,
    marginLeft: ScreenWidth * 0.01,
  },
  ThemeFont: {
    fontFamily: 'NeoDGM-Regular',
    color: '#474747',
  },
  DateContainer: {
    margin: ScreenWidth * 0.01,
  },
  DateFont: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: ScreenWidth * 0.037,
    color: '#666666',
  },
  FromTo: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: ScreenWidth * 0.037,
    color: '#999999',
  },
  CenterContainer: {},
  PlaceContainer: {
    flexDirection: 'row',
    margin: ScreenWidth * 0.015,
    marginLeft: ScreenWidth * 0.045,
  },
  PlaceFont: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: ScreenWidth * 0.03,
    color: '#474747',
  },
  place: {
    justifyContent: 'center',
  },
  profileView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  profileContainer: {
    flexDirection: 'row',
    width: ScreenWidth * 0.8,
    margin: ScreenWidth * 0.013,
    padding: ScreenWidth * 0.015,
    borderWidth: 2,
    borderColor: '#FFC67D',
    backgroundColor: '#110105',
    borderRadius: 15,
  },
  userTextContainer: {},
  profileImageContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 1,
  },
  userProfile: {
    justifyContent: 'center',
    alignItems: 'center',
    width: ScreenWidth * 0.13,
    height: ScreenWidth * 0.13,
  },
  userNameContainer: {
    width: ScreenWidth * 0.6,
    margin: ScreenWidth * 0.015,
    marginLeft: ScreenWidth * 0.02,
  },
  userNameFont: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: ScreenWidth * 0.045,
    color: '#FFF7F2',
  },
  userRoleContainer: {
    width: ScreenWidth * 0.6,
    marginLeft: ScreenWidth * 0.03,
  },
  userRoleFont: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: ScreenWidth * 0.037,
    color: '#FFAAAA',
  },
  closeButton: {
    alignSelf: 'center',
    bottom: ScreenHeight * 0.001,
  },
});
export default DoLargeModal;
