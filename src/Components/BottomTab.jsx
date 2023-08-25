import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';

import {RFValue} from 'react-native-responsive-fontsize';
import EmployeesInfo from '../Screens/EmployeesInfo';
import History from '../Screens/History';
import Fonts from '../Constants/Fonts';

const {height, width} = Dimensions.get('window');
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home" backBehavior="none">
      <Tab.Screen
        name="Employees"
        component={EmployeesInfo}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/912/912318.png',
                }}
                style={styles.icons}
              />
            </View>
          ),
          tabBarActiveBackgroundColor: '#0095d950',
          tabBarActiveTintColor: '#dddddd',
          tabBarLabelStyle: styles.title,
          tabBarLabelPosition: 'below-icon',
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/263/263115.png',
                }}
                style={styles.icons}
              />
            </View>
          ),
          tabBarActiveBackgroundColor: '#0095d950',
          tabBarActiveTintColor: '#dddddd',
          tabBarLabelStyle: styles.title,
          tabBarLabelPosition: 'below-icon',
        }}
      />

      <Tab.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/2089/2089679.png',
                }}
                style={styles.icons}
              />
            </View>
          ),
          tabBarActiveBackgroundColor: '#0095d950',
          tabBarActiveTintColor: '#dddddd',
          tabBarLabelStyle: styles.title,
          tabBarLabelPosition: 'below-icon',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  icons: {
    height: 27,
    width: 27,
    resizeMode: 'contain',
    tintColor: 'black',
    marginTop: 5,
  },
  title: {
    marginTop: 2,
    fontSize: RFValue(13, height),
    color: 'black',
    fontFamily: Fonts.O_ExtraBold,
    letterSpacing: 1,
  },
});
