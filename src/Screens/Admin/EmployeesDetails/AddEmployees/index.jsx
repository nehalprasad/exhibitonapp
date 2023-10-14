import axios from 'axios';
import {
  ActivityIndicator,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


import styles from './style';
import { API_CALL } from 'Constants';

const AddEmployees = ({navigation}) => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Mobile, setMobile] = useState('')
  const [Address1, setAddress1] = useState('')
  const [Address2, setAddress2] = useState('')
  const [City, setCity] = useState('')


  const [Error, setError] = useState(false);
  const [IsCheck, setIsCheck] = useState(false);

  // Separate state variables for focus
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  const [isLastNameFocused, setIsLastNameFocused] = useState(false);
  const [isMobileFocused, setIsMobileFocused] = useState(false);
  const [isAddress1Focused, setIsAddress1Focused] = useState(false);
  const [isAddress2Focused, setIsAddress2Focused] = useState(false);
  const [isCityFocused, setIsCityFocused] = useState(false);

  const handleSubmit = async () => {
    setError(false);
    setIsCheck(true);
    // const AccessToken = await AsyncStorage.getItem('AccessToken');
    // console.log(AccessToken);
    try {
      const PayLoad = {     
        "name": Name,
         "email": Email,
         "password": Password,
         "role":"user", //admin //user
         "userinfo":{
             "first_name":FirstName,
             "last_name":LastName,
             "mob_no": Mobile,
             "address":{
                 "address1":Address1,
                 "address2":Address2,
                 "city_id":2
             }
         }     
   };

   const Token = await AsyncStorage.getItem('AccessToken')

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: API_CALL.Users,
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${JSON.parse(Token)}`,
    },
    data : PayLoad
  };

      console.log(PayLoad);
     
axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data, 'Admin Employees'));
    if(!!response.data){
      navigation.navigate('Admin Employees')
    }
  })
  .catch((error) => {
    console.log(error, "erro");
  })
    } catch (error) {
      console.log(error.response, '2');
      setError(true);
      setIsCheck(false);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
      <Text style={styles.title}>Add New Employee</Text>
      <View>
        <TextInput
          name="Name"
          onFocus={() => setIsNameFocused(true)}
          onBlur={() => setIsNameFocused(false)}
          placeholderTextColor={'gray'}
          autoCapitalize={'none'}
          style={[
            styles.placeHolderStyle,
            { borderColor: isNameFocused ? '#f0f' : 'black' },
          ]}
          placeholder="Name of the Employee"
          onChangeText={setName}
        />

        <TextInput
          name="Email"
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
          placeholderTextColor={'gray'}
          autoCapitalize={'none'}
          style={[
            styles.placeHolderStyle,
            { borderColor: isEmailFocused ? '#f0f' : 'black' },
          ]}
          placeholder="Email of the Employee"
          onChangeText={setEmail}
        />

      <TextInput
                name="Password"
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                placeholderTextColor={'gray'}
                autoCapitalize={'none'}
                style={[
                  styles.placeHolderStyle,
                  { borderColor: isPasswordFocused ? '#f0f' : 'black' },
                ]}
                placeholder="Password of the Employee"
                onChangeText={setPassword}
              />

        <TextInput
          name="FirstName"
          onFocus={() => setIsFirstNameFocused(true)}
          onBlur={() => setIsFirstNameFocused(false)}
          placeholderTextColor={'gray'}
          autoCapitalize={'none'}
          style={[
            styles.placeHolderStyle,
            { borderColor: isFirstNameFocused ? '#f0f' : 'black' },
          ]}
          placeholder="First Name of the Employee"
          onChangeText={setFirstName}
        />

      <TextInput
          name="LastName"
          onFocus={() => setIsLastNameFocused(true)}
          onBlur={() => setIsLastNameFocused(false)}
          placeholderTextColor={'gray'}
          autoCapitalize={'none'}
          style={[
            styles.placeHolderStyle,
            { borderColor: isLastNameFocused ? '#f0f' : 'black' },
          ]}
          placeholder="Last Name of the Employee"
          onChangeText={setLastName}
        />

      <TextInput
          name="Mobile"
          onFocus={() => setIsMobileFocused(true)}
          onBlur={() => setIsMobileFocused(false)}
          placeholderTextColor={'gray'}
          autoCapitalize={'none'}
          style={[
            styles.placeHolderStyle,
            { borderColor: isMobileFocused ? '#f0f' : 'black' },
          ]}
          placeholder="Mobile of the Employee"
          onChangeText={setMobile}
        />  

    <TextInput
          name="Address1"
          onFocus={() => setIsAddress1Focused(true)}
          onBlur={() => setIsAddress1Focused(false)}
          placeholderTextColor={'gray'}
          autoCapitalize={'none'}
          style={[
            styles.placeHolderStyle,
            { borderColor: isAddress1Focused ? '#f0f' : 'black' },
          ]}
          placeholder="Address1 of the Employee"
          onChangeText={setAddress1}
        />  

  <TextInput
          name="Address2"
          onFocus={() => setIsAddress2Focused(true)}
          onBlur={() => setIsAddress2Focused(false)}
          placeholderTextColor={'gray'}
          autoCapitalize={'none'}
          style={[
            styles.placeHolderStyle,
            { borderColor: isAddress2Focused ? '#f0f' : 'black' },
          ]}
          placeholder="Address2 of the Employee"
          onChangeText={setAddress2}
        />
        
      <TextInput
          name="City"
          onFocus={() => setIsCityFocused(true)}
          onBlur={() => setIsCityFocused(false)}
          placeholderTextColor={'gray'}
          autoCapitalize={'none'}
          style={[
            styles.placeHolderStyle,
            { borderColor: isCityFocused ? '#f0f' : 'black' },
          ]}
          placeholder="City of the Employee"
          onChangeText={setCity}
        />    

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={!Name || !Password || !Email}
      >
        <Text style={[styles.buttonText, {textAlign:'center'}]}>Add</Text>
      </TouchableOpacity>

      {Error && (
        <View style={styles.errorView}>
          <Text style={styles.errorText}>Something Went Wrong</Text>
        </View>
      )}
      {IsCheck && (
        <Modal
          visible={IsCheck}
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            setIsCheck(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ActivityIndicator size={'large'} color={'white'} />
            </View>
          </View>
        </Modal>
      )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddEmployees;
