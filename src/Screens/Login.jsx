import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
const {height, width} = Dimensions.get('window');

const Login = () => {
  const [UserName, setUserName] = useState('');
  const [PassWord, setPassWord] = useState('');

  const handleSubmit = () => {
    console.log(UserName)
    console.log(PassWord)
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.mainContainer}>
        <View style={{width: width - 50}}>
          <TextInput
            placeholder="UserName"
            placeholderTextColor={'black'}
            style={styles.inputField}
            onChangeText={(name) => setUserName(name)}
            ></TextInput>

          <TextInput
            placeholder="Password"
            placeholderTextColor={'black'}
            onChangeText={(passWord) => setPassWord(passWord)}
            style={styles.inputField}></TextInput>
        </View>

        <View style={{marginTop: 10}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'black',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
              onPress={handleSubmit}
            >
            <Text style={styles.submitButton}>Submit</Text>
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
  },
  inputField: {
    borderWidth: 0.8,
    borderColor: 'black',
    marginBottom: 20,
    letterSpacing: 2,
  },
  submitButton: {fontSize: 23, fontWeight: '600'},
});
