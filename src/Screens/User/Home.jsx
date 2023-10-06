import { Text, View } from 'react-native'
import React, {useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppContext } from '../../../AppContext'; 


const Home = () => {
  const { state } = useAppContext();

  useEffect(() => {
    const storeData = async () => {
      try {
        console.log('-------------------------------');
        console.log(state.AccessToken, state.Role, state.UserId , state.Email ,"Admin");
        console.log('-------------------------------');
        await AsyncStorage.setItem('Role', state.Role);
        await AsyncStorage.setItem('Email', state.Email);
        await AsyncStorage.setItem('UserId', JSON.stringify(state.UserId));
        await AsyncStorage.setItem('AccessToken', JSON.stringify(state.AccessToken));
      } catch (e) {
      }
    }
    storeData()
  },[])

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home
