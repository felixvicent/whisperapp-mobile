import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginVertical: 10,
  },
  image: {
    height: 50,
    width: 50,
  },
  messageContainer: {
    justifyContent: 'center',
    marginLeft: 10,
    paddingRight: 50,
  },
  name: {
    fontSize: 14,
  },
  message: {
    fontSize: 12,
    color: '#888',
  },
});

export default styles;
