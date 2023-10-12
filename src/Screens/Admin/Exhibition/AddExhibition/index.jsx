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
import axios from 'axios';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style';
import { API_CALL } from 'Constants';

const AddExhibition = ({navigation}) => {
  const [Name, setName] = useState('');
  const [ExbPlace, setExbPlace] = useState('');
  const [DaysOfExhibition, setDaysOfExhibition] = useState('');

  const [IsCheck, setIsCheck] = useState(false);
  const [Error, setError] = useState(false)
  // Separate state variables for focus
  const [IsNameFocused, setIsNameFocused] = useState(false);
  const [IsExbPlaceFocused, setIsExbPlaceFocused] = useState(false);
  const [IsDaysOfExhibitionFocused, setIsDaysOfExhibitionFocused] = useState(false);

  const handleSubmit = async () => {
    setError(false);
    setIsCheck(true);
    try {
      const PayLoad = {
        name: Name,
        exbplace: ExbPlace,
        days_of_exhibition: DaysOfExhibition,
        status: true,  
      };

      const AccessToken = await AsyncStorage.getItem('AccessToken')
      console.log(PayLoad);
      const response = await axios.post(
        API_CALL.Exhibition,
        PayLoad,{
          headers: { 
            'Authorization' : `Bearer ${JSON.parse(AccessToken)}`
          }
        }
      )
      if(!!response.data){
        navigation.navigate('Exhibition')
      }
    } catch (error) {
      console.log(error, '2');
      setError(true);
      setIsCheck(false);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.title}>Create New Event</Text>
      <View>
        <TextInput
          name="Name"
          onFocus={() => setIsNameFocused(true)}
          onBlur={() => setIsNameFocused(false)}
          placeholderTextColor={'gray'}
          autoCapitalize={'none'}
          style={[
            styles.placeHolderStyle,
            { borderColor: IsNameFocused ? '#f0f' : 'black' },
          ]}
          placeholder="Event Name"
          onChangeText={(name) => setName(name)}
        />

        <TextInput
          onFocus={() => setIsExbPlaceFocused(true)}
          onBlur={() => setIsExbPlaceFocused(false)}
          placeholderTextColor={'gray'}
          autoCapitalize={'none'}
          style={[
            styles.placeHolderStyle,
            { borderColor: IsExbPlaceFocused ? '#f0f' : 'black' },
          ]}
          placeholder="Exhibition Place"
          onChangeText={(exbPlace) => setExbPlace(exbPlace)}
        />

        <TextInput
          name="Password"
          onFocus={() => setIsDaysOfExhibitionFocused(true)}
          onBlur={() => setIsDaysOfExhibitionFocused(false)}
          keyboardType='number-pad'
          placeholderTextColor={'gray'}
          autoCapitalize={'none'}
          style={[
            styles.placeHolderStyle,
            { borderColor: IsDaysOfExhibitionFocused ? '#f0f' : 'black' },
          ]}
          placeholder="Days of Exhibition"
          onChangeText={(dayOfExhibition) => setDaysOfExhibition(dayOfExhibition)}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={!Name || !ExbPlace || !DaysOfExhibition}
      >
        <Text style={styles.buttonText}>Create</Text>
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

export default AddExhibition;
