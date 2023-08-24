import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'red'}}>Nehal</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
