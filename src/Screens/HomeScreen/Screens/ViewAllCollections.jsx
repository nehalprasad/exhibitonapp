import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import axios from 'axios';
import Colors from '../../../Constants/Colors';
import Fonts from '../../../Constants/Fonts';
import Header from '../../../Components/Header';

const {width, height} = Dimensions.get('window');

const EmployeesData = [
  {
    id: 1,
    name: 'Nehal Prasad',
    emailId: 'nehal-prasad@outlook.com',
    isactive: true,
  },
  {
    id: 2,
    name: 'Sarika',
    emailId: 'sarika@outlook.com',
    isactive: false,
  },
  {
    id: 3,
    name: 'Smita',
    emailId: 'smita9038@outlook.com',
    isactive: true,
  },
];

const ViewAllCollections = ({navigation}) => {
  const [SelectedEmployeeModalVisibility, setSelectedEmployeeModalVisibility] =
    useState(false);
    const [EmployeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://192.168.29.47:8080/api/v1/users")
        .then(resp => {
          setEmployeesData(resp.data)
          console.log(resp.data,)}) 
        .catch(err => console.log(err))
    } catch (error) {
    }
},[]) 

  const handleSubmit = () => {};

  // const SelectedEmployee = () => {
  //   return (
  //     <Modal
  //       visible={SelectedEmployeeModalVisibility}
  //       animationType="fade"
  //       transparent={true}
  //       onRequestClose={() => {
  //         setSelectedEmployeeModalVisibility(!SelectedEmployeeModalVisibility);
  //       }}>
  //       <View style={styles.centeredView}>
  //         <View style={[styles.modalView]}>
  //           <TouchableOpacity
  //             style={{
  //               position: 'absolute',
  //               right: 0,
  //             }}
  //             onPress={() => {
             
  //             }}>
  //             <Image
  //               source={{
  //                 uri: 'https://cdn-icons-png.flaticon.com/128/1617/1617543.png',
  //               }}
  //               style={{height: 40, width: 40}}
  //             />
  //           </TouchableOpacity>

  //           <Text
  //             style={{
  //               color: Colors?.black,
  //               fontSize: RFValue(20, height),
  //               fontFamily: Fonts.P_Bold,
  //               letterSpacing: 1,
  //             }}>
  //             Employee Details
  //           </Text>
  //           <View style={{width: width - 150}}>
  //             <TextInput
  //               placeholder="Name Of Employee"
  //               placeholderTextColor={Colors?.black}
  //               style={styles.inputField}
  //               // onChangeText={date => setDateOfEvent(date)}
  //               selectionColor={'gray'}
  //               returnKeyType="next"
  //               defaultValue={SelectedEmployeeData?.name}
  //             />
  //             <TextInput
  //               placeholder="Email Id"
  //               placeholderTextColor={Colors?.black}
  //               style={styles.inputField}
  //               // onChangeText={date => setDateOfEvent(date)}
  //               selectionColor={'gray'}
  //               returnKeyType="next"
  //               defaultValue={SelectedEmployeeData?.email}
  //             />

  //             <Text
  //               style={{
  //                 color: 'black',
  //                 fontSize: RFValue(18, height),
  //                 fontFamily: Fonts.R_Bold,
  //               }}>
  //               Employee Status
  //             </Text>
  //             <View
  //               style={{
  //                 flexDirection: 'row',
  //                 justifyContent: 'space-between',
  //                 marginTop: 10,
  //               }}>
  //               <BouncyCheckbox
  //                 size={30}
  //                 text="Active"
  //                 isChecked={SelectedEmployeeData?.isactive === true}
  //                 textStyle={{fontFamily: Fonts.P_Bold, textDecorationLine: "none",}}
  //                 onPress={isChecked => {
  //                   if (isChecked === true) {
  //                     setSelectedEmployeeData(prevState => {
  //                       const updatedState = {
  //                           ...prevState,
  //                           isactive: true
  //                       };
  //                       console.log("Nehal", updatedState);
  //                       return updatedState;
  //                   });                    
  //                   }else{
  //                     setSelectedEmployeeData(prevState => {
  //                       const updatedState = {
  //                           ...prevState,
  //                           isactive: false
  //                       };
  //                       console.log("Nehal", updatedState);
  //                       return updatedState;
  //                   });
  //                   }     
  //                   // console.log(SelectedEmployeeData, " prasad");            
  //               }} 
  //               />
  //               <BouncyCheckbox
  //                 size={30}
  //                 text="In-Active"
  //                 isChecked={SelectedEmployeeData?.isactive === false}
  //                 onPress={isChecked => {
  //                   if (isChecked === true) {
  //                     setSelectedEmployeeData(prevState => {
  //                       const updatedState = {
  //                           ...prevState,
  //                           isactive: false
  //                       };
  //                       console.log("Nehal", updatedState);
  //                       return updatedState;
  //                   });                    
  //                   }else{
  //                     setSelectedEmployeeData(prevState => {
  //                       const updatedState = {
  //                           ...prevState,
  //                           isactive: true
  //                       };
  //                       console.log("Nehal", updatedState);
  //                       return updatedState;
  //                   });
  //                 }                  
  //               }}                
  //                 textStyle={{fontFamily: Fonts.P_Bold, textDecorationLine: "none",}}

  //               />
  //             </View>
  //           </View>

  //           <View
  //             style={{
  //               flexDirection: 'row',
  //               justifyContent: 'space-around',
  //               marginTop: 5,
  //             }}>
  //             <View style={{marginTop: 10, marginRight: 10}}>
  //               <TouchableOpacity
  //                 style={{
  //                   backgroundColor: '#068FFF',
  //                   paddingHorizontal: 20,
  //                   paddingVertical: 10,
  //                   borderRadius: 10,
  //                 }}
  //                 onPress={handleSubmit}>
  //                 <Text style={styles.submitButton}>Update</Text>
  //               </TouchableOpacity>
  //             </View>

  //             <View style={{marginTop: 10, marginLeft: 10}}>
  //               <TouchableOpacity
  //                 style={{
  //                   backgroundColor: '#ff0000',
  //                   paddingHorizontal: 20,
  //                   paddingVertical: 10,
  //                   borderRadius: 10,
  //                 }}
  //                 onPress={handleSubmit}>
  //                 <Text style={styles.submitButton}>Remove</Text>
  //               </TouchableOpacity>
  //             </View>
  //           </View>
  //         </View>
  //       </View>
  //     </Modal>
  //   );
  // };

  const EmployeeList = ({data}) => {
    console.log(data)
    return (
      <ScrollView>
        <TouchableOpacity
          style={styles.listContainer}
          onPress={() => {
          //   setSelectedEmployeeModalVisibility(true);
          //   setSelectedEmployeeData(data);
          }}>
          <Text style={[styles.name, styles.comman]}>
          {data?.name}</Text>
          <Text style={[styles.email, styles.comman]}>
          {data?.email}</Text>
          <Text
            style={[
              styles.is_active,
              styles.comman,
              {textTransform: 'capitalize'},
            ]}>
            {data?.isactive?.toString()}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  const HeaderComponent = () => {
    return (
      <ScrollView>
        <View style={styles.listContainer}>
          <Text style={[styles.name]}>Name</Text>
          <Text style={[styles.email]}>Email Id</Text>
          <Text style={[styles.status]}>Status</Text>
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <Text style={styles.headTitle}>View All Collection</Text>
        <ScrollView horizontal={true}>
          {/* <FlatList
            ListHeaderComponent={HeaderComponent()}
            data={EmployeesData}
            renderItem={({item}) => <EmployeeList data={item} />}
            keyExtractor={item => item.id}
          /> */}
        </ScrollView>
      </View>
      {SelectedEmployeeModalVisibility && SelectedEmployee()}
    </SafeAreaView>
  );
};

export default ViewAllCollections;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headTitle: {
    color: 'black',
    fontSize: RFValue(23, height),
    paddingVertical: 20,
    fontFamily: Fonts.P_ExtraBold,
  },
  name: {
    color: 'black',
    paddingLeft: 15,
    width: width / 3,
    fontFamily: Fonts.P_Bold,
    fontSize: RFValue(17, height),
  },
  email: {
    color: 'black',
    width: width / 1.3,
    textAlign: 'center',
    fontFamily: Fonts.P_Bold,
    fontSize: RFValue(17, height),
  },
  status: {
    color: 'black',
    paddingRight: 15,
    width: width / 4,
    textAlign: 'right',
    fontFamily: Fonts.P_Bold,
    fontSize: RFValue(17, height),
  },
  comman: {
    fontFamily: Fonts.O_Regular,
    fontSize: RFValue(15, height),
  },

  listContainer: {
    flexDirection: 'row',
    borderWidth: 0.7,
    borderColor: 'black',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: height / 2.4,
    width: width - 100,
    margin: 20,
    backgroundColor: Colors?.white,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  },
  submitButton: {
    fontSize: 18,
    color: Colors?.white,
    letterSpacing: 2,
    fontFamily: Fonts.R_Regular,
  },
});
