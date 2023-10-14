import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Modal,
    ActivityIndicator,
    Animated,
    Alert,
  } from 'react-native';
  import React, {useState} from 'react';
  import axios from 'axios';

  import {useAppContext} from '../../../AppContext';
  import {API_CALL, Fonts} from 'Constants';
  
  import styles from './style'
  
  const {height , width} = Dimensions.get('window')

  const Login = ({navigation}:  any) => {
    const {state, setState} = useAppContext();
  
    const [UserName, setUserName] = useState('');
    const [PassWord, setPassWord] = useState('');
    const [ShowPassword, setShowPassword] = useState(true);
    const [IsLogin, setIsLogin] = useState(false);
    const [FocusInput, setFocusInput] = useState('');
    const [Error, setError] = useState(false);
  
    const handleSubmit = async () => {
      setError(false);
      setIsLogin(true);
      try {
        console.log('nehal');
        const PayLoad = {
          username: UserName.toLowerCase(),
          password: PassWord
        };
  
        console.log(PayLoad);
        const response = await axios.post(
          API_CALL.LogIn,
          PayLoad,
        );
        console.log(response.data);
        if (!!response.data) {
          await axios
            .get(API_CALL.Users)
            .then(resp => {
              const allUserData = resp.data;
              const filteredUserData = allUserData?.filter(
                (user: any) => user.id === response.data.userId,
              );
              setTimeout(() => {
                storeData(
                  response.data.token,
                  filteredUserData?.[0].id,
                  filteredUserData?.[0].role,
                  filteredUserData?.[0].email,
                );
              }, 5000);
            })
            .catch(err => {
              console.log(err, '3');
              setError(true);
              setIsLogin(false);
            });
        }
      } catch (error) {
        console.log(error, '2');
        setError(true);
        setIsLogin(false);
      }
    };
  
    const storeData = async (AccessToken : any, UserId : any, Role : any, Email: any) => {
      try {
        setState({...state, AccessToken, Role, UserId, Email});
        setIsLogin(false);
        if (Role === 'user') {
          navigation.navigate('User');
        } else if (Role === 'admin') {
          navigation.navigate('Admin');
        }
      } catch (e) {
        setError(true);
        setIsLogin(false);
      }
    };
  
    const FocusInputData = (item : any) => {
      setFocusInput(item._dispatchInstances.memoizedProps.name);
    };
  
    return (
      <ScrollView>
        <StatusBar backgroundColor={'black'} animated={true} />
        <SafeAreaView style={styles.mainContainer}>
          <Image source={require('Assets/logo3.png')} style={styles.logo} />
          <View style={{width: width - 50}}>
            <Text
              style={[
                styles.inputHeading,
                {color: FocusInput === 'username' ? 'red' : 'gray'},
              ]}>
              Username
            </Text>
            <View style={styles.inputFieldWrapper}>
              <TextInput
                placeholder="johnsmith"
                placeholderTextColor={FocusInput === 'username' ? 'red' : 'gray'}
                style={[
                  styles.inputField,
                  {
                    textTransform: 'lowercase',
                    borderColor: FocusInput === 'username' ? 'red' : 'gray',
                    color : 'black'
                  },
                ]}
                onChangeText={name => setUserName(name)}
                selectionColor={'gray'}
                name="username"
                returnKeyType="next"
                onFocus={FocusInputData}
              />
            </View>
            <Text
              style={[
                styles.inputHeading,
                {color: FocusInput === 'password' ? 'red' : 'gray'},
              ]}>
              Password
            </Text>
            <View style={[styles.inputFieldWrapper, {}]}>
              <TextInput
                placeholder="**********"
                placeholderTextColor={FocusInput === 'password' ? 'red' : 'gray'}
                onChangeText={passWord => setPassWord(passWord)}
                style={[
                  styles.inputField,
                  {borderColor: FocusInput === 'password' ? 'red' : 'gray',
                  color : 'black'
                },
                ]}
                selectionColor={'gray'}
                name="password"
                returnKeyType="next"
                secureTextEntry={ShowPassword}
                onFocus={FocusInputData}
              />
            </View>
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
              <Text style={styles.submitButton}>Login</Text>
            </TouchableOpacity>
          </View>
          {Error && (
            <View style={styles.errorView}>
              <Text style={styles.errorText}>Something Went Wrong</Text>
            </View>
          )}
        </SafeAreaView>
        {IsLogin && (
          <Modal
            visible={IsLogin}
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setIsLogin(false);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <ActivityIndicator size={'large'} color={'white'} />
              </View>
            </View>
          </Modal>
        )}
      </ScrollView>
    );
  };
  
  export default Login;