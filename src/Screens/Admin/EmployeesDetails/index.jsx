import axios from 'axios';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Modal,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {RFValue} from 'react-native-responsive-fontsize';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import styles from './style';
import {API_CALL} from 'Constants';

const {height, width} = Dimensions.get('window');

const EmployeesDetails = ({navigation}) => {
  const [EmployeesInfo, setEmployeesInfo] = useState([]);
  const [EmployeeVisible, setEmployeeVisible] = useState(false);
  const [SelectedEmployeeData, setSelectedEmployeeData] = useState([]);

  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Status, setStatus] = useState('')

  useEffect(() => {
    const fetchData = async function () {
      await axios
        .get(API_CALL.Users)
        .then(resp => {
          const API_DATA = resp.data;
          const User_Data = API_DATA?.filter(
            user => user?.role !== 'admin' && !!user?.name,
          );
          setEmployeesInfo(User_Data);
        })
        .catch(err => console.log(err));
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const EmployeeList = ({data}) => {
    return (
      <ScrollView>
        <TouchableOpacity
          style={styles.listContainer}
          onPress={() => {
            setEmployeeVisible(true);
            setEmail(data?.email)
            setName(data?.name)
            setStatus(data?.is_active)
          }}>
          <Text style={[styles.name, styles.common, {fontWeight: 700}]}>
            {data?.name}
          </Text>
          <Text style={[styles.email, styles.common]}>{data?.email}</Text>
          <Text
            style={[
              styles.is_active,
              styles.common,
              {
                textTransform: 'capitalize',
                paddingHorizontal: 30,
                color: 'black',
              },
            ]}>
            {data?.is_active?.toString()}
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
          <Text style={[styles.email, {textAlign: 'center'}]}>Email Id</Text>
          <Text style={[styles.status]}>Status</Text>
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.title}>Employees Information</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlatList
          ListHeaderComponent={HeaderComponent()}
          data={EmployeesInfo}
          renderItem={({item}) => <EmployeeList data={item} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Add Employees')}>
        <Text style={styles.buttonText}>Add New +</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={EmployeeVisible}
        onRequestClose={() => {
          setEmployeeVisible(!EmployeeVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>
              Employee Details
            </Text>
            <TextInput
              placeholder={Name}
              placeholderTextColor={"black"}
              style={styles.modalInput}
              onChangeText={setName}
            />
            <TextInput
              placeholder={Email}
              placeholderTextColor={"black"}
              style={styles.modalInput}
              onChangeText={setEmail}
            />
            <View style={{flexDirection:'row', alignSelf:'flex-start', }}>
              <Text style={{color:'black', paddingRight:20, fontSize:20}}>Status</Text>
              <BouncyCheckbox
                  isChecked={Status}
                  size={20}
                  fillColor="black"
                  iconStyle={{ borderColor: "black" }}
                  innerIconStyle={{ borderWidth: 2 }}
                  onPress={(isChecked) => setStatus(isChecked)}
                  textStyle={{
                    textDecorationLine: "none",
                  }}
                />
            </View>
           


            <TouchableOpacity style={{marginVertical: 20}}>
              <Text
                style={{
                  color: 'white',
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  backgroundColor: 'grey',
                  fontSize: 19,
                  borderColor:'black',
                  borderWidth:2,
                  textAlign:'center',
                  borderRadius:7
                }}>
                Update
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default EmployeesDetails;
