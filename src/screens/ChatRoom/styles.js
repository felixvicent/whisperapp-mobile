import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  blank: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    padding: 0,
    borderColor: '#0085ff',
    marginRight: 10,
    paddingHorizontal: 20,
    height: 38,
  },
});

export default styles;
