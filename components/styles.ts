import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#7fe87f',
  },
  item: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  header: {
    marginVertical: 30,
  },
  headerText: {
    fontSize: 18,
  },
  list: {
    paddingVertical: 20,
  },
});
