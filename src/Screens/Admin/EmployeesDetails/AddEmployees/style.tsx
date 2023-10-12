import {Fonts, Colors} from 'Constants';
import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {height, width} = Dimensions.get('window');

export default {
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 23,
    color: 'black',
    paddingVertical: 20,
  },
  placeHolderStyle: {
    borderWidth: 1,
    width: width - 30,
    letterSpacing: 1,
    color: 'black',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 15,
  },
  button: {
    borderWidth: 1,
    paddingHorizontal: 100,
    paddingVertical: 10,
    backgroundColor: '#071952',
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    letterSpacing: 2,
    fontWeight: 700,
    fontSize: RFValue(18, height),
  },
  errorText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: 'red',
  },
  errorView: {alignItems: 'center', justifyContent: 'center', height: 50},
};
