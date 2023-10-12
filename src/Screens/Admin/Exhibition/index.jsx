import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style';
import {API_CALL} from 'Constants';

const {height, width} = Dimensions.get('window');

const Exhibition = ({navigation}) => {
  const [Appointments, setAppointments] = useState([]);

  const fetchData = async function () {
    const AccessToken = await AsyncStorage.getItem('AccessToken');

    await axios
      .get(API_CALL.Exhibition, {
        headers: {
          Authorization: `Bearer ${JSON.parse(AccessToken)}`,
          // Authorization: `Bearer yJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aW5vZEBnbWFpbC5jb20iLCJpYXQiOjE2OTYwNzMxMzEsImV4cCI6MTY5NjA4MDMzMX0.r24he9UnUcPX7T-AlU9XyiGCbtoCbK-P9uhAjzw_hO8`,
        },
      })
      .then(resp => {
        const API_DATA = resp.data;
        console.log(API_DATA);
        setAppointments(API_DATA);
      })
      .catch(err => console.log(err, '2'));
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error, '3');
    }
  }, []);

  const renderAppointmentCard = ({item}) => (
    <TouchableOpacity style={styles.eventContainer}>
      <Text style={styles.dateTitle}>{item.name}</Text>

      <Text style={styles.datesHead}>Exhibition Place :- {item?.exbplace}</Text>

      <Text style={styles.datesHead}>
        No. of Days :- {item?.days_of_exhibition}
      </Text>
    </TouchableOpacity>
  );

  const searchFilter = item => {
    const query = item.toLowerCase();
    if (!!query) {
      const queryData = Appointments?.filter((value, index) => {
        return value?.name?.toLowerCase()?.includes(query);
      });
      if (!!queryData) {
        setAppointments(queryData);
      }
    } else {
      fetchData();
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>List of Exhibition</Text>
        <View style={styles.inputFieldWrapper}>
          <TextInput
            placeholder="Search"
            onChangeText={searchFilter}
            placeholderTextColor={'gray'}
            style={styles.inputField}
            selectionColor={'gray'}
            returnKeyType="search"
          />
        </View>
        {/* If events exist  */}
        {!!Appointments && (
          <FlatList
            data={Appointments}
            initialNumToRender={6}
            renderItem={renderAppointmentCard}
            keyExtractor={item => item.id.toString()}
            style={{height: height / 1.65}}
            showsVerticalScrollIndicator={false}
          />
        )}
        {/* If events exist  */}

        {/* If there is no events */}
        {!Appointments && (
          <Text style={styles.noEventsTitle}>No such events....</Text>
        )}
        {/* If there is no events */}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Exhibition')}>
        <Text style={styles.buttonText}>Create an Event</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Exhibition;
