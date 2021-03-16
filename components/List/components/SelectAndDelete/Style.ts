import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
  viewSelectAndDelete: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 30,
    marginBottom: 10,
  },
  touchable: {
    marginLeft: 30,
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 3,
    padding: 5,
    backgroundColor: 'orange',
  },
  touchableText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  }
});
