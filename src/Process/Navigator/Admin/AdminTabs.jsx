import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

import { Home, AllCollection, EmployeesDetails, Profile, Items } from 'Admin';

import {
  CollectionIcons,
  Employee,
  HomeIcons,
  ItemIcon,
  ProfileIcons,
} from 'Icons';

const Tab = createBottomTabNavigator();

const AdminTabs = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Admin Home');

  useEffect(() => {
    console.log('Selected Tab:', selectedTab);
  }, [selectedTab]);

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Admin Home"
      backBehavior="none">
      <Tab.Screen
        name="Admin Employees"
        component={EmployeesDetails}
        options={{
          tabBarLabel: 'Employee',
          tabBarActiveBackgroundColor: '#B4B4B3',
          tabBarActiveTintColor: '#6499E9',
          tabBarHideOnKeyboard: true,
          tabBarLabelStyle: { color: 'black', letterSpacing: 1, fontSize: 12 },
          tabBarIcon: () => <Employee width={25} height={25} />,
          tabBarOnPress: () => {
            setSelectedTab('Admin Employees'); // Update the selected tab here
          },
        }}
      />
      <Tab.Screen
        name="Admin All Collections"
        component={AllCollection}
        options={{
          tabBarLabel: 'Collection',
          tabBarActiveBackgroundColor: '#B4B4B3',
          tabBarActiveTintColor: '#6499E9',
          tabBarHideOnKeyboard: true,
          tabBarLabelStyle: { color: 'black', letterSpacing: 1, fontSize: 12 },
          tabBarIcon: () => <CollectionIcons width={25} height={25} />,
          tabBarOnPress: () => {
            setSelectedTab('Admin All Collections'); // Update the selected tab here
          },
        }}
      />
      <Tab.Screen
        name="Admin Home"
        component={Home}
        options={({ route }) => ({
          tabBarLabel: '',
          tabBarHideOnKeyboard: true,
          tabBarLabelStyle: { color: 'black', letterSpacing: 1, fontSize: 12 },
          tabBarIcon: ({ color }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 5,
                marginBottom: '30%',
                width: 70,
                height: 70,
                borderRadius: 35,
                zIndex: 999,
                borderColor: 'blue',
                backgroundColor:
                  selectedTab === 'Admin Home' ? 'gray' : 'white',
              }}>
              <HomeIcons width={25} height={25} color={color} />
            </View>
          ),
          headerShown: false,
          tabBarOnPress: () => {
            setSelectedTab('Admin Home'); // Update the selected tab here
          },
        })}
      />
      <Tab.Screen
        name="Items"
        component={Items}
        options={{
          tabBarLabel: 'Items',
          tabBarActiveBackgroundColor: '#B4B4B3',
          tabBarActiveTintColor: '#6499E9',
          tabBarHideOnKeyboard: true,
          tabBarLabelStyle: { color: 'black', letterSpacing: 1, fontSize: 12 },
          tabBarIcon: () => <ProfileIcons width={30} height={30} />,
          tabBarOnPress: () => {
            setSelectedTab('Items'); // Update the selected tab here
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarActiveBackgroundColor: '#B4B4B3',
          tabBarActiveTintColor: '#6499E9',
          tabBarHideOnKeyboard: true,
          tabBarLabelStyle: { color: 'black', letterSpacing: 1, fontSize: 12 },
          tabBarIcon: () => <ItemIcon width={30} height={30} />,
          tabBarOnPress: () => {
            setSelectedTab('Profile'); // Update the selected tab here
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AdminTabs;
