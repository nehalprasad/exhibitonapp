import {Dimensions, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../Components/Header';

const {height, width} = Dimensions.get('window');

const Profile = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <Text style={{color:'black'}}>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
