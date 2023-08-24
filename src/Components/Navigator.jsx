import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import AdminDashboard from '../Screens/AdminDashboard';
import UserDashboard from '../Screens/UserDashboard';
import Profile from '../Screens/Profile';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login"
                     screenOptions={{headerShown: false}}
                     styles={{color:'black'}}
                     >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      <Stack.Screen name="UserDashboard" component={UserDashboard} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
