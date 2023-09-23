// import {
//   Dimensions,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';
// const {height, width} = Dimensions.get('window');

// const Login = ({navigation}) => {
//   const [UserName, setUserName] = useState('');
//   const [PassWord, setPassWord] = useState('');

//   const handleSubmit = () => {
//     console.log(UserName);
//     console.log(PassWord);
//   };

//   return (
//     <ScrollView>
//       <StatusBar
//         backgroundColor={"black"}
//         animated={true}
//         />
//       <SafeAreaView style={styles.mainContainer}>
//         <View style={{width: width - 50}}>
//           <TextInput
//             placeholder="UserName"
//             placeholderTextColor={'black'}
//             style={styles.inputField}
//             onChangeText={name => setUserName(name)}
//             selectionColor={'gray'}
//             returnKeyType="next"/>

//           <TextInput
//             placeholder="Password"
//             placeholderTextColor={'black'}
//             onChangeText={passWord => setPassWord(passWord)}
//             style={styles.inputField}
//             selectionColor={'gray'}
//             returnKeyType="next"/>
//         </View>

//         <View style={{marginTop: 10}}>
//           <TouchableOpacity
//             style={{
//               backgroundColor:'#068FFF',
//               paddingHorizontal: 20,
//               paddingVertical: 10,
//               borderRadius:10,
//             }}
//             onPress={handleSubmit}>
//             <Text style={styles.submitButton}>LOGIN</Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     </ScrollView>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   mainContainer: {
//     height,
//     width,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor:'#F6F4EB'
//   },
//   inputField: {
//     borderWidth: 0.8,
//     borderColor: 'black',
//     marginBottom: 20,
//     letterSpacing: 3,
//   },
//   submitButton: {
//     fontSize: 18, 
//     // fontWeight: '600', 
//     color:'white',
//     letterSpacing:2,
//     fontFamily:'Roboto-Regular'
//   },
// });


import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text } from 'react-native';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: 'https://as1.ftcdn.net/v2/jpg/01/91/78/32/1000_F_191783282_0TVrx5VrvrkpDHSKdjjI87HkbXJy5TMw.jpg'}} style={styles.backgroundImage}> 
        <View style={styles.logoContainer}>
          <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar3.png' }} style={styles.logo} />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.card}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.card}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor:'pink'
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 160,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius:60,
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 50,
    padding:20,
    borderRadius:10,
    backgroundColor:'B7COEE'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    padding:10,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth:1,
    borderBottomColor:'#B0C4DE',
    color:'black',
    fontSize:15,

  },
  loginButton: {
    backgroundColor: 'orange ',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    color:'black',
   
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default LoginScreen;
