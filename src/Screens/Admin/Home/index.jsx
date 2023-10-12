import { SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useAppContext } from '../../../../AppContext'; 
import Events from '../Exhibition';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    <SafeAreaView>
     <Events/>
    </SafeAreaView>
  )
}

export default Home
