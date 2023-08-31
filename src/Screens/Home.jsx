import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
  Modal,
  Pressable,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../Components/Header';
import {RFValue} from 'react-native-responsive-fontsize';
import LottieView from 'lottie-react-native';

import Colors from '../Constants/Colors';
import Fonts from '../Constants/Fonts';

const {width, height} = Dimensions.get('window');

const EventInfo = [
  {
    id: 1,
    date: '31 August 2023',
    place: 'Mumbai',
  },
  {
    id: 2,
    date: '2 Septmber 2023',
    place: 'Kolkata',
  },
  {
    id: 3,
    date: '5 Septmber 2023',
    place: 'Delhi',
  },
  {
    id: 4,
    date: '10 Septmber 2023',
    place: 'Banglore',
  },
];

const Home = ({navigation}) => {
  const [NewEventModalVisiblity, setNewEventModalVisiblity] = useState(false);
  const [ShowText, setShowText] = useState(true);
  const [SelectedEventModalVisibility, setSelectedEventModalVisibility] =
    useState(false);
  const [SelectedEventData, setSelectedEventData] = useState([]);


  const handleSubmit = () => {};

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(ShowText => !ShowText);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const SelectedEventModalController = () => {
    return (
      <Modal
        visible={SelectedEventModalVisibility}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          setSelectedEventModalVisibility(!SelectedEventModalVisibility);
        }}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, {height: height / 3}]}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 0,
              }}
              onPress={() => {
                setSelectedEventData(null);
                setSelectedEventModalVisibility(!SelectedEventModalVisibility);
              }}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/1617/1617543.png',
                }}
                style={{height: 40, width: 40}}
              />
            </TouchableOpacity>

            <Text
              style={{
                color: Colors?.black,
                fontSize: RFValue(20, height),
                fontFamily: Fonts.P_Bold,
                letterSpacing: 1,
              }}>
              Exhibition Info
            </Text>
            <View style={{width: width - 150}}>
              <TextInput
                placeholder="Date Of Event"
                placeholderTextColor={Colors?.black}
                style={styles.inputField}
                onChangeText={date => setDateOfEvent(date)}
                selectionColor={'gray'}
                returnKeyType="next"
                defaultValue={SelectedEventData?.date}
              />
              <TextInput
                placeholder="Place of Event"
                placeholderTextColor={Colors?.black}
                style={styles.inputField}
                onChangeText={date => setDateOfEvent(date)}
                selectionColor={'gray'}
                returnKeyType="next"
                defaultValue={SelectedEventData?.place}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 5,
              }}>
              <View style={{marginTop: 10, marginRight: 10}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#068FFF',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 10,
                  }}
                  onPress={handleSubmit}>
                  <Text style={styles.submitButton}>Update</Text>
                </TouchableOpacity>
              </View>

              <View style={{marginTop: 10, marginLeft: 10}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#ff0000',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 10,
                  }}
                  onPress={handleSubmit}>
                  <Text style={styles.submitButton}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const EventList = ({data}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedEventData(data);
          setSelectedEventModalVisibility(true);
        }}
        style={{
          width,
          backgroundColor: '#5C547050',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: ShowText ? Colors?.black : Colors?.white,
            fontSize: RFValue(25, height),
            fontFamily: Fonts.R_Bold,
            letterSpacing: 1,
          }}>
          {data?.date}
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

  const NewEventModalController = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={NewEventModalVisiblity}
        onRequestClose={() => {
          setNewEventModalVisiblity(!NewEventModalVisiblity);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 0,
              }}
              onPress={() => {
                setNewEventModalVisiblity(!NewEventModalVisiblity);
              }}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/1617/1617543.png',
                }}
                style={{height: 40, width: 40}}
              />
            </TouchableOpacity>

            <Text
              style={{
                color: Colors?.black,
                fontSize: RFValue(20, height),
                fontFamily: Fonts.P_Bold,
                letterSpacing: 1,
              }}>
              Exhibition Info
            </Text>
            <View style={{width: width - 150}}>
              <TextInput
                placeholder="Date Of Event"
                placeholderTextColor={Colors?.black}
                style={styles.inputField}
                onChangeText={date => setDateOfEvent(date)}
                selectionColor={'gray'}
                returnKeyType="next"
              />
              <TextInput
                placeholder="Place of Event"
                placeholderTextColor={Colors?.black}
                style={styles.inputField}
                onChangeText={date => setDateOfEvent(date)}
                selectionColor={'gray'}
                returnKeyType="next"
              />
            </View>
            <View style={{marginTop: 10}}>
              <TouchableOpacity
                style={{
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
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <View style={{height: height / 1.7}}>
          <FlatList
            horizontal={true}
            data={EventInfo}
            renderItem={({item}) => <EventList data={item} />}
            keyExtractor={item => item.id}
          />
        </View>

        <TouchableOpacity
          style={{
            width,
            height: height / 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0095d950',
            flexDirection: 'row',
          }}
          onPress={() => {
            setNewEventModalVisiblity(true);
          }}>
          <Text
            style={{
              color: Colors?.black,
              fontSize: RFValue(22, height),
              fontFamily: Fonts.R_Bold,
              letterSpacing: 1,
            }}>
            Create New Exhibition{' '}
          </Text>
          <LottieView
            source={require('../Assets/animation/plus.json')}
            style={{width: 30, height: 30}}
            autoPlay
            loop
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width,
            height: height / 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0095d980',
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate("Collection")}
          >
          <Text
            style={{
              color: Colors?.black,
              fontSize: RFValue(22, height),
              fontFamily: Fonts.R_Bold,
              letterSpacing: 1,
            }}>
            View Collection{' '}
          </Text>
        </TouchableOpacity>
      </View>
      {NewEventModalController()}
      {SelectedEventModalVisibility && SelectedEventModalController()}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: Colors?.white,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: height / 2.9,
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
