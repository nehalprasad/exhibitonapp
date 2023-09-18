import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const {height, width} = Dimensions.get('window')

const Splash = ({navigation}) => {
  return (
   <SafeAreaView style={styles.mainContainer}>
        <Image
            source={require("../Assets/logo3.png")}
            alt='app icon'
            style={styles.logo}
            />
        <LottieView
            source={require("../Assets/animation/loader.json")}
            autoPlay
            loop
            style={styles.lottie}
        />
        </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({
    mainContainer : {
        height,
        width,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    logo : {
        width:width - 100,
        resizeMode:'contain',
        borderWidth:1,
    },
    lottie : {
        height:height/5, 
        width,
    }
})