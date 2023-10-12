import { FlatList, SafeAreaView, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import styles from './style'
import { API_CALL } from 'Constants'
import { RFValue } from 'react-native-responsive-fontsize'

const { height, width} = Dimensions.get('window')

const EmployeesDetails = ({navigation}) => {
  const [EmployeesInfo, setEmployeesInfo] = useState([])
  
  useEffect(() => {
        const fetchData = async function(){
          await axios.get(API_CALL.Users)
                .then((resp) => {
                const API_DATA = resp.data
                const User_Data = API_DATA?.filter(user => user?.role !== 'admin' && !!user?.name)
                setEmployeesInfo(User_Data)
                })
                .catch(err => console.log(err))
        }

        try {
          fetchData()
        } catch (error) {
          console.log(error);
        }
  },[])


const EmployeeList = ({data}) => {
  return (
    <ScrollView>
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() => {
          setSelectedEmployeeModalVisibility(true);
          setSelectedEmployeeData(data);
        }}>
        <Text style={[styles.name, styles.common]}>
        {data?.name}</Text>
        <Text style={[styles.email, styles.common]}>
        {data?.email}</Text>
        <Text
          style={[
            styles.is_active,
            styles.common,
            {textTransform: 'capitalize',  paddingHorizontal:30},
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
        <Text style={[styles.email]}>Email Id</Text>
        <Text style={[styles.status]}>Status</Text>
      </View>
    </ScrollView>
  );
};


  return (
    <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.title}>Employees Information</Text>
        <ScrollView 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    >
          <FlatList
            ListHeaderComponent={HeaderComponent()}
            data={EmployeesInfo}
            renderItem={({item}) => <EmployeeList data={item} />}
            keyExtractor={item => item.id}
          />
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Add Employees")}>
          <Text style={styles.buttonText}>Add New +</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default EmployeesDetails
