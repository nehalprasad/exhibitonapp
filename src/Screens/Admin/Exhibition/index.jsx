import moment from 'moment';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style';
import {API_CALL} from 'Constants';

const {height, width} = Dimensions.get('window');

const Exhibition = ({navigation}) => {
  const [Appointments, setAppointments] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);

  const storeData = async () => {
    try {
      const Role = await AsyncStorage.getItem('Role');
      const Email = await AsyncStorage.getItem('Email');
      const UserId = await AsyncStorage.getItem('UserId');
      const AccessToken = await AsyncStorage.getItem('AccessToken');

      console.log(Role, Email, UserId, AccessToken);
      try {
        let config = {
          method: 'get',
          url: `${API_CALL.Exhibition}`,
          headers: {
            Authorization: `Bearer ${JSON.parse(AccessToken)}`,
          },
        };

        await axios
          .request(config)
          .then(resp => {
            const API_DATA = resp.data;
            setIsLoading(true);
            setAppointments(API_DATA);
          })
          .catch(err => {});
      } catch (error) {}
    } catch (e) {}
  };

  useEffect(() => {
    try {
      storeData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const renderAppointmentCard = ({item}) => (
    <TouchableOpacity style={styles.eventContainer}>
      <Text style={styles.dateTitle}>{item.exhb_name}</Text>

      <Text style={styles.datesHead}>
        Exhibition Place :- {item?.exhb_name}
      </Text>

      <Text style={styles.datesHead}>
        Start Date :- {moment(item?.start_date).format('YYYY-MM-DD')}
      </Text>
      <Text style={styles.datesHead}>
        End Date :-
        {moment(item?.end_date).format('YYYY-MM-DD')}
      </Text>
    </TouchableOpacity>
  );

  const searchFilter = item => {
    const query = item.toLowerCase();
    if (!!query) {
      const queryData = Appointments?.filter((value, index) => {
        return value?.exhb_name?.toLowerCase()?.includes(query);
      });
      if (!!queryData) {
        setAppointments(queryData);
      }
    } else {
      storeData();
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

        {IsLoading && !!Appointments ? (
          <FlatList
            data={Appointments}
            initialNumToRender={6}
            renderItem={renderAppointmentCard}
            keyExtractor={item => item.id.toString()}
            style={{height: height / 1.65}}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <ActivityIndicator />
        )}
        {/* If events exist  */}

        {/* If there is no events */}
        {!Appointments && (
          <Text style={styles.noEventsTitle}>No such events....</Text>
        )}
        {/* If there is no events */}
      </View>
      {IsLoading && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Exhibition')}>
          <Text style={styles.buttonText}>Create an Exhibition</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default Exhibition;
