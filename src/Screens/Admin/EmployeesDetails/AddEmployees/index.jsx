import {
  ActivityIndicator,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './style';

const AddEmployees = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Error, setError] = useState(false);
  const [Password, setPassword] = useState('');
  const [IsCheck, setIsCheck] = useState(false);

  // Separate state variables for focus
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleSubmit = async () => {
    setError(false);
    setIsCheck(true);
    try {
      console.log('nehal');
      const PayLoad = {
        name: Name,
        email: Email,
        password: Password,
      };

      console.log(PayLoad);
      const response = await axios.post(
        'https://a564-2405-201-100c-8057-d282-35dd-cbe9-3ee1.ngrok-free.app/api/v1/users',
        PayLoad
      );
      console.log(response.data);
    } catch (error) {
      console.log(error, '2');
      setError(true);
      setIsCheck(false);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
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
          onChangeText={(name) => setName(name)}
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
          onChangeText={(email) => setEmail(email)}
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
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={!Name || !Password || !Email}
      >
        <Text style={styles.buttonText}>Add</Text>
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
    </SafeAreaView>
  );
};

export default AddEmployees;
