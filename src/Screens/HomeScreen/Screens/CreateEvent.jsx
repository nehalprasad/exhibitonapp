import { SafeAreaView, StyleSheet, Text, View , TouchableOpacity, Image, Dimensions, TextInput} from 'react-native'
import React, { useState } from 'react'
import Header from '../../../Components/Header'
import Colors from '../../../Constants/Colors'
import Fonts from '../../../Constants/Fonts'
import { RFValue } from 'react-native-responsive-fontsize'

const {height, width} = Dimensions.get('window')

const CreateEvent = ({navigation}) => {
  const [DateofEvent, setDateofEvent] = useState('')
  const [PlaceofEvent, setPlaceofEvent] = useState('')
  const handleSubmit = () => {
    console.log(DateofEvent, PlaceofEvent);
  };

  return (
    <SafeAreaView style={styles.centeredView}>
    <Header/>
    <View style={styles.centeredView}>
      <Text
             style={{
               color: Colors?.black,
               fontSize: RFValue(20, height),
               fontFamily: Fonts.P_Bold,
               letterSpacing: 2,
               textAlign:'center',
               marginTop:20
             }}>
             Create a New Event 
           </Text>
           <View style={{width: width - 50, marginTop:50}}>
             <TextInput
               placeholder="Date Of Event"
               placeholderTextColor={Colors?.black}
               style={styles.inputField}
               onChangeText={date => setDateofEvent(date)}
               selectionColor={'gray'}
               returnKeyType="next"
             />
             <TextInput
               placeholder="Place of Event"
               placeholderTextColor={Colors?.black}
               style={styles.inputField}
               onChangeText={date => setPlaceofEvent(date)}
               selectionColor={'gray'}
               returnKeyType="next"
             />
           </View>
           <View style={{marginTop: 10,  
                justifyContent:'center',
                alignItems:'center',}}>
             <TouchableOpacity
               style={{
                // flex:1,
              
                  width:width/2,
                  // height,
                 backgroundColor: '#068FFF',
                 paddingHorizontal: 20,
                 paddingVertical: 10,
                 borderRadius: 10,
               }}
               onPress={handleSubmit}>
               <Text style={styles.submitButton}>SUBMIT</Text>
             </TouchableOpacity>
           </View>
       </View>
    </SafeAreaView>
  )
}

export default CreateEvent

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: Colors?.white,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    height,
    width
  },
  textStyle: {
    color: Colors?.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: Colors?.black,
  },
  inputField: {
    borderWidth: 0.8,
    borderColor: Colors?.black,
    marginBottom: 20,
    letterSpacing: 3,
    color: 'black',
    height:50,
    paddingLeft:10
  },
  submitButton: {
    fontSize: 18,
    color: Colors?.white,
    letterSpacing: 2,
    fontFamily: Fonts.R_Regular,
    textAlign:'center'
  },
});
