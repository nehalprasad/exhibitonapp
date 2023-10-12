import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppContext} from '../../../AppContext';

import {Product} from 'User';
import {Login, Splash} from 'Public';
import {Exhibition, Profile, TodayCollection, AddEmployees, AddExhibition} from 'Admin';

import UserTabs from './User/UserTabs';
import AdminTabs from './Admin/AdminTabs';
import Header from './Header';
import Menu from 'Icons'

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [Loading, setLoading] = useState(true);
  const [AccessToken , setAccessToken] = useState(null);
  const [Role , setRole] = useState(null);
  const {state} = useAppContext();

useEffect(() => {
  const getData = async () => {
    try {
      const Token = await AsyncStorage.getItem('AccessToken');
      const RoleCheck = await AsyncStorage.getItem('Role');
      console.log(Token , RoleCheck, "RoleCheck");
      console.log(state.Role);
      
      setAccessToken(Token)
      setRole(RoleCheck)
    } catch (e) {
      // error reading value

    }
  };

  getData()
},[])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  if (Loading) {
    return <Splash />;
  }


  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {
          (Role === null || !!state.Role === null) &&  <Stack.Screen name="Login" component={Login} />
        }
      
        {(state.Role === 'user' || Role === 'user') && (
          <Stack.Group>
            <Stack.Screen name="User" component={UserTabs} />
            <Stack.Screen name="Product" component={Product} />
          </Stack.Group>
        )}
        {(state.Role === 'admin' || Role === 'admin') && (
          <Stack.Group>
            <Stack.Screen name="Admin" component={AdminTabs} />
            <Stack.Screen name="Add Exhibition" component={AddExhibition} />
            <Stack.Screen name="Exhibition" component={Exhibition} options={() =>
                Header({
                  showBackArrow:true,
                  rightIcon: (
                    <Menu
                      width={25}
                      height={25}
                      fill={'black'}
                    />
                  ),
                })
          }/>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="TodayCollection" component={TodayCollection} />
            <Stack.Screen name="Add Employees" component={AddEmployees} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
