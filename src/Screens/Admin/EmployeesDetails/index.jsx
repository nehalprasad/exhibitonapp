import { FlatList, SafeAreaView, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import styles from './style'
import { API_CALL } from 'Constants'

const EmployeesDetails = () => {
  const [EmployeesInfo, setEmployeesInfo] = useState([])
  
  useEffect(() => {
        const fetchData = async function(){
          await axios.get(API_CALL.getAllUsers)
                .then((resp) => {
                const API_DATA = resp.data
                const User_Data = API_DATA?.filter(user => user?.role !== 'admin')
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

const renderItem = ({item}) => {
  return(
    <View>
      <Text>{item.name}</Text>
      <Text>{item.email}</Text>
      <Text>{item.is_active}</Text>
    </View>
  )
}

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
        <TouchableOpacity style={{borderWidth:1, paddingHorizontal:20, paddingVertical:10}}>
          <Text>Add New +</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default EmployeesDetails
