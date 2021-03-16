import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginBottom: 30,
  },
  ViewText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 7,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    borderStyle: 'dashed',
    borderColor: 'orange',
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: 'white',
  },
  button: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  single: {
    color: 'orange',
    fontSize: 17,
    fontWeight: 'bold',
    maxWidth: '92%',
  },
  icon:{
    color:'orange',
  }
});
