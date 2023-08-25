import {Dimensions, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../Components/Header';

const {height, width} = Dimensions.get('window');

const Collection = () => {
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <Text style={{color:'black'}}>Collection</Text>
      </View>
    </SafeAreaView>
  );
};

export default Collection;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
