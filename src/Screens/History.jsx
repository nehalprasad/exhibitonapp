import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';

const {width, height} = Dimensions.get('window');

const History = () => {
  return (
    <SafeAreaView>
        <Header />
      <View style={styles.container}>
        <Text style={{color: 'black'}}>History</Text>
      </View>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});


