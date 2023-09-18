import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
const {height, width} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [UserName, setUserName] = useState('');
  const [PassWord, setPassWord] = useState('');

  const handleSubmit = () => {
    console.log(UserName);
    console.log(PassWord);
  };

  return (
    <ScrollView>
      <StatusBar
        backgroundColor={"black"}
        animated={true}
        />
      <SafeAreaView style={styles.mainContainer}>
        <View style={{width: width - 50}}>
          <TextInput
            placeholder="UserName"
            placeholderTextColor={'black'}
            style={styles.inputField}
            onChangeText={name => setUserName(name)}
            selectionColor={'gray'}
            returnKeyType="next"/>

          <TextInput
            placeholder="Password"
            placeholderTextColor={'black'}
            onChangeText={passWord => setPassWord(passWord)}
            style={styles.inputField}
            selectionColor={'gray'}
            returnKeyType="next"/>
        </View>

        <View style={{marginTop: 10}}>
          <TouchableOpacity
            style={{
              backgroundColor:'#068FFF',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius:10,
            }}
            onPress={handleSubmit}>
            <Text style={styles.submitButton}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#F6F4EB'
  },
  inputField: {
    borderWidth: 0.8,
    borderColor: 'black',
    marginBottom: 20,
    letterSpacing: 3,
  },
  submitButton: {
    fontSize: 18, 
    // fontWeight: '600', 
    color:'white',
    letterSpacing:2,
    fontFamily:'Roboto-Regular'
  },
});
