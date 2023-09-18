import { StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React,{useState} from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import Fonts from '../../../Constants/Fonts';
import Colors from '../../../Constants/Colors';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window')

const HomeData = [
    {
      id: 1,
      title : "Create Event",
      screen : "CreateEvent"
    },
    {
      id: 2,
      title : "Add Employee",
      screen : "AddEmployee"
    },
    {
      id: 3,
      title : "View Today's Collections",
      screen : "ViewTodayColllection"
    },
    {
      id: 4,
      title : "View All Collections",
      screen : "ViewAllCollections"
    },
  ];
  
const List = ({navigation}) => {
  const [ShowText, setShowText] = useState(true);


    const HomeScreenList = ({data}) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(data?.screen)
            }}
            style={{
              width : width/4,
              backgroundColor: '#5C547050',
              height:100,
              marginLeft:1,
              display:'flex',
              justifyContent:'center',
              borderRadius:10
            }}>
            <Text
              style={{
                fontSize: RFValue(10, height),
                fontFamily: Fonts.R_Bold,
                letterSpacing: 1,
                textAlign:'center'
              }}>
              {data?.title}
            </Text>
            <Text
              style={{
                color: ShowText ? Colors?.black : Colors?.white,
                fontSize: RFValue(30, height),
                fontFamily: Fonts.R_Bold,
                letterSpacing: 1,
              }}>
              {data?.place}
            </Text>
          </TouchableOpacity>
        );
      };
  return (
            <FlatList
            horizontal={true}
            data={HomeData}
            renderItem={({item}) => <HomeScreenList data={item} />}
            keyExtractor={item => item.id}
        />
  )
}

export default List

const styles = StyleSheet.create({})