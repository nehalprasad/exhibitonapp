import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  Home, 
  AllCollection,
  EmployeesDetails
} from 'Admin'

const Tab = createBottomTabNavigator();

const AdminTabs = () => {
  return (
   <Tab.Navigator screenOptions={{headerShown:false}} initialRouteName='Admin Home'>
        <Tab.Screen name="Admin Employees" component={EmployeesDetails}/>
        <Tab.Screen name="Admin Home" component={Home}/>
        <Tab.Screen name="Admin All Collections" component={AllCollection}/>
   </Tab.Navigator>
  )
}

export default AdminTabs
