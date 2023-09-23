import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from '../Screens/HomeScreen/Home';
import Login from '../Screens/Login';
import AdminDashboard from '../Screens/AdminDashboard';
import UserDashboard from '../Screens/UserDashboard';
import Profile from '../Screens/Profile';
import Splash from '../Screens/Splash';
import BottomTab from './BottomTab';

import EmployeesInfo from '../Screens/EmployeesInfo';
import History from '../Screens/History';
import { useNavigation } from '@react-navigation/native';
import CreateEvent from '../Screens/HomeScreen/Screens/CreateEvent';
import AddEmployee from '../Screens/HomeScreen/Screens/AddEmployee';
import ViewTodayColllection from '../Screens/HomeScreen/Screens/ViewTodayColllection';
import ViewAllCollections from '../Screens/HomeScreen/Screens/ViewAllCollections';
import Events from '../Screens/HomeScreen/Screens/Events';


const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [IsLoading, setIsLoading] = useState(true);
    useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Home"
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
          <Stack.Screen name="CreateEvent" component={CreateEvent} />
          <Stack.Screen name="AddEmployee" component={AddEmployee} />
          <Stack.Screen name="ViewTodayColllection" component={ViewTodayColllection} />
          <Stack.Screen name='ViewAllCollections' component={ViewAllCollections}/>
          <Stack.Screen name="Events" component={Events} />
        

         

          </>
      )}
    </Stack.Navigator>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
