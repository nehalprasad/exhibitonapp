import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../../AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_CALL } from '../../../Constants';
import UserIcon from 'Assets/images/user.png';

import { styles } from './style';

const Profile = ({navigation}) => {
  const { state } = useAppContext();
  const [ProfileData, setProfileData] = useState([]);

  useEffect(() => {
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
            url: `${API_CALL.Users}/${UserId}`,
            headers: {
              Authorization: `Bearer ${JSON.parse(AccessToken)}`,
            },
          };

          await axios
            .request(config)
            .then(resp => {
              setProfileData(resp.data);
            })
            .catch(err => { });
        } catch (error) { }
      } catch (e) { }
    };
    storeData();
  }, []);

  clearAll = async () => {
    try {
      await AsyncStorage.clear()
      navigation.reset({
        index: 0, // The index of the route you want to reset to
        routes: [{ name: 'Login' }], // The route(s) you want to reset to
      });
    } catch(e) {
    }
  
    console.log('Done.')
  }

  return (
    <SafeAreaView style={styles.mainView}>
      <Text style={styles.titleText}>Profile</Text>
      <View style={styles.viewBox}>
        <Image
          source={require('../../../Assets/images/user.png')}
          style={styles.userIcon}
        />
      </View>

      <View style={styles.userView}>
        <Text style={styles.key}>
          Name : <Text style={styles.value}>{ProfileData?.name}</Text>
        </Text>
        <Text style={styles.key}>
          Email : <Text style={styles.value}>{ProfileData?.name}</Text>
        </Text>
        {/* <Text style={{color:'black'}}>Password : {ProfileData?.password}</Text> */}
      </View>

      <TouchableOpacity style={{ marginTop: 200 }} onPress={clearAll}>
        <Text style={{ color: 'black', fontSize: 25 }}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
