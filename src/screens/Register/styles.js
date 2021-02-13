import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 75,
    margin: 24,
  },
  title: {
    fontSize: 22,
    color: '#aaa',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    color: '#ccc',
    fontWeight: 'bold',
  },
  descriptionTitle: {
    color: '#0085ff',
    marginTop: 50,
  },
  registerButton: {
    marginTop: 20,
    backgroundColor: '#0085ff',
    borderRadius: 20,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  loginLabel: {
    color: '#aaa',
    marginRight: 2,
  },
  loginLinkText: {
    color: '#0085ff',
  },
});

export default styles;
