import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  Home, 
  Profile,
  Events
} from 'User'

const Tab = createBottomTabNavigator();

const UserTabs = () => {
  return (
   <Tab.Navigator>
        <Tab.Screen name="User Home" component={Home}/>
        <Tab.Screen name="User Profile" component={Profile}/>
        <Tab.Screen name="User Events" component={Events}/>
   </Tab.Navigator>
  )
}

export default UserTabs
