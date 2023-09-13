import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { blue } from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

const Login = () => {
  const [UserName, setUserName] = useState('');
  const [PassWord, setPassWord] = useState('');

  const handleSubmit = () => {
    console.log(UserName);
    console.log(PassWord);
  };

  return (

      <>
      <View style={{flexDirection:'row',backgroundColor:''}}>
      <Text style={{ fontSize: 30, textAlign: 'right', color: 'black',marginTop:15,marginLeft:10 }}>HARSH ENTERPRISE</Text>
      <Image
            source={require("../Assets/logo3.png")}
            alt='app icon'
            style={styles.logo}
            />
    </View>
    {/* <ScrollView> */}
        <StatusBar
          backgroundColor={"black"}
          animated={true} />
        <SafeAreaView style={styles.mainContainer}>
          <View style={{ width: width - 50, }}>

            <TextInput
              placeholder="UserName"
              placeholderTextColor={'black'}
              style={styles.inputField}
              onChangeText={name => setUserName(name)}
              selectionColor={'gray'}
              returnKeyType="next" />

            <TextInput
              placeholder="Password"
              placeholderTextColor={'black'}
              onChangeText={passWord => setPassWord(passWord)}
              style={styles.inputField}
              selectionColor={'gray'}
              returnKeyType="next" />
          </View>

          <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#068FFF',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10,
              }}
              onPress={handleSubmit}>
              <Text style={styles.submitButton}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

      {/* {/* </ScrollView> */}
      </>
  );
};
export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'pink'
  },
  inputField: {
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 20,
    letterSpacing:2
  },
  submitButton: {
    fontSize: 20, 
    fontWeight: '600', 
    color:'black',
    letterSpacing:2,
    fontFamily:'Roboto-Regular',
 },
  logo:{
    height:50,
    width:50,
    marginLeft:20,
    marginBottom:20,
    marginLeft:60,
    marginTop:15
   
  }
})
