import { Dimensions, StyleSheet } from "react-native";
import { Fonts } from "../../../Constants";

const {height , width} = Dimensions.get('window')

export default StyleSheet.create({
    mainContainer: {
      height,
      width,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    inputFieldWrapper: {
      // shadowColor: '#000',
      // shadowOffset: {
      //   width: 0,
      //   height: 2,
      // },
      // shadowOpacity: 0.25,
      // shadowRadius: 3.84,
      elevation: 5,
    },
    inputField: {
      borderColor: 'black',
      marginBottom: 20,
      letterSpacing: 2,
      paddingVertical: 15,
      borderRadius: 10,
      paddingHorizontal: 10,
      elevation: 5,
      color:'black',
      fontSize: 16,
      borderWidth: 0.8,
      fontFamily: Fonts.O_ExtraBold,
    },
    inputHeading: {
      color: 'black',
      letterSpacing: 1,
      fontSize: 18,
      paddingVertical: 5,
      paddingHorizontal: 5,
      fontFamily: Fonts.O_ExtraBold,
    },
    submitButton: {
      fontSize: 18,
      color: 'white',
      letterSpacing: 3,
      paddingHorizontal: 10,
      paddingVertical: 5,
      fontFamily: Fonts.O_ExtraBold,
    },
    logo: {
      height: 150,
      width: 180,
      // paddingBottom:100,
      resizeMode: 'contain',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      width: width / 1.7,
      margin: 20,
      backgroundColor: '#00000070',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1,
      elevation: 5,
    },
    errorText: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10,
      color: 'red',
    },
    errorView: {alignItems: 'center', justifyContent: 'center', height: 50},
  })