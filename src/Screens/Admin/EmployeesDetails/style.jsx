import {Fonts, Colors} from 'Constants';
import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {height, width} = Dimensions.get('window');

export default {
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'white'
  },
  title: {
    fontSize: 23,
    color: 'black',
    paddingVertical: 20,
  },
  name: {
    color: 'black',
    paddingLeft: 15,
    width: width / 2.3,
    fontFamily: Fonts.P_Bold,
    fontSize: RFValue(17, height),
  },
  email: {
    color: 'black',
    width: width / 2.3,
    textAlign: 'center',
    fontFamily: Fonts.P_Bold,
    fontSize: RFValue(17, height),
  },
  status: {
    color: 'black',
    width: width / 4,
    textAlign: 'right',
    fontFamily: Fonts.P_Bold,
    fontSize: RFValue(17, height),
    paddingHorizontal: 20,
  },
  common: {
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
  button: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#071952',
    marginBottom: 20,
    borderRadius: 10,
  },
  buttonText:{color:'white', letterSpacing:2, fontWeight:700, fontSize:RFValue(18, height)}
}
