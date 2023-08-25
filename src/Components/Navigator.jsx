import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import AdminDashboard from '../Screens/AdminDashboard';
import UserDashboard from '../Screens/UserDashboard';
import Profile from '../Screens/Profile';
import Splash from '../Screens/Splash';
import BottomTab from './BottomTab';
import EmployeesInfo from '../Screens/EmployeesInfo';
import History from '../Screens/History';
import Collection from '../Screens/Collection';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [IsLoading, setIsLoading] = useState(true);
  const navigation = useNavigation()
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{headerShown: false}}
      styles={{color: 'black'}}>
      {IsLoading ? (
        <Stack.Screen name="Splash" component={Splash} />
      ) : (
        <>
          <Stack.Screen name="BottomTab" component={BottomTab} />

          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
          <Stack.Screen name="UserDashboard" component={UserDashboard} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EmployeesInfo" component={EmployeesInfo} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Collection" component={Collection} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
