import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';

const {height, width} = Dimensions.get('window');

const Header = () => {
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <LinearGradient
        style={styles.container}
        colors={[
          // '#48549c',
          // '#4c498c',
          // '#3097b6',
          // '#3dc3ba',
          '#31aba0',
          '#37bba3',
          // '#37b7a0',
          // '#35b9ac',
        ]}>
        <View style={styles.logoBox}>
          <Image
            source={require('../Assets/logo_1.png')}
            style={styles.logoIcon}
          />
        </View>
        <View style={styles.title}>
          <View style={styles.titleBox}>
            <Text style={styles.titleName}>N P</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop:10,
    height: height / 6,
    width,
    justifyContent: 'center',
  },
  container: {
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 100,
    backgroundColor: 'white',
    shadowColor: '#fff',
  },
  logoBox: {
    width: width / 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  logoIcon: {
    height: 70,
    width: width / 4,
    resizeMode: 'stretch',
    marginLeft: 5,
  },
  title: {
    width: width / 2 - 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  titleBox: {
    borderColor: 'white',
    borderWidth: 1,
    height: 70,
    borderRadius: 50,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleName: {
    color: 'white',
    fontSize: RFValue(30, height),
    fontFamily: 'Poppins-ExtraBold',
  },
});
