import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: 'white',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  titleText: {
    color: 'black',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: '800',
    letterSpacing: 2,
  },
  viewBox: {
    borderWidth: 1,
    padding: 20,
    alignItems: 'center',
    borderRadius: 100,
    justifyContent: 'center',
  },
  userIcon: {
    height: 100,
    width: 100,
  },
  userView: {
    borderWidth: 0.3,
    marginTop: 50,
    paddingHorizontal: 30,
  },
  key: {
    color: 'black',
    fontSize: 21,
  },
  value: {
    color: 'gray',
    fontSize: 19,
  },
});
