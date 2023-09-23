import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity ,Button} from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UseNavigation } from '@react-navigation/native'
// export default Profile = () => {
  const UserDashboard = () =>{
  
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
      />
      <View style={styles.body}>
        <Text style={{textAlign:'center',marginTop:20,fontSize:20,color:'black'}}>sneha umak</Text>
        <Text style={{textAlign:'center',fontSize:20,color:'black'}}>snehaumak5@gmail.com</Text>
        <View style={styles.bodyContent}>
         
            <TouchableOpacity style={styles.buttonContainer} 
            >
              <Text styles={{color:'black',fontSize:20}}>Exhibition</Text>
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.buttonContainer}>
            <Text styles={{color:'black',fontSize:20}}>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text styles={{color:'black',fontSize:20}}>Iteams</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text styles={{color:'black',fontSize:20}}>Invoices</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text styles={{color:'black',fontSize:20}}>Logout</Text>
          </TouchableOpacity>
          </View>
      </View>
    </View>
  );
};
export default UserDashboard;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
 
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 5,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
})



