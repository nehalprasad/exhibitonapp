import {Fonts} from 'Constant';
import {Dimensions} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');

export default({
    mainContainer: {
        display: 'flex',
        alignItems: 'center'},
    container: {
      width: width - 30,
      marginTop: 20,
    },
    title: {
      color: 'black',
      fontSize: 25,
      fontWeight: '700',
      letterSpacing: 2,
      textAlign: 'left',
    },
    searchInput: {
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    inputFieldWrapper: {
      marginTop: 10,
    //   shadowColor: '#000',
    //   shadowOffset: {
    //     width: 0,
    //     height: 2,
    //   },
    //   shadowOpacity: 0.25,
    //   shadowRadius: 3.84,
    //   elevation: 5,
    },
    inputField: {
      borderColor: 'black',
      marginBottom: 20,
      letterSpacing: 2,
      paddingVertical: 10,
      borderRadius: 10,
      paddingHorizontal: 10,
      elevation: 5,
      fontSize: 16,
      borderWidth: 0.8,
      borderColor: 'gray',
      color:'black'
    //   fontFamily: Fonts.O_ExtraBold,
    },
    eventContainer: {
      borderWidth: 1,
      marginBottom: 10,
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    noEventsTitle: {
      fontSize: 20,
      fontWeight: 400,
      letterSpacing: 2,
    },
  
    datesCalendar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    datesHead: {
      fontSize: 15,
      color: 'black',
      letterSpacing: 2,
      fontWeight: '600',
    },
    datesBody: {
      fontSize: 13,
      color: 'black',
      letterSpacing: 2,
    },
    dateTitle: {
      fontSize: 20,
      color: 'black',
      letterSpacing: 2,
      fontWeight: 500,
      marginBottom:10
    },
    button: {
      borderWidth: 1,
      paddingHorizontal: 50,
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
  });