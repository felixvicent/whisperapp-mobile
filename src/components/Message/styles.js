import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  userMessages: {
    alignSelf: 'flex-end',
    backgroundColor: '#0085ff',
    padding: 10,
    alignItems: 'flex-end',
    marginBottom: 10,
    borderRadius: 10,
  },
  userMessagesText: {
    color: '#fff',
    fontSize: 18,
  },
  otherMessages: {
    alignSelf: 'flex-start',
    backgroundColor: '#ddd',
    padding: 10,
    alignItems: 'flex-start',
    marginBottom: 10,
    borderRadius: 10,
  },
  otherMessagesText: {
    color: '#000',
    fontSize: 18,
  },
});

export default styles;
