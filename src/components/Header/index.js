import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WhisperApp</Text>
      <Icon name="search" size={28} color="#fff" />
    </View>
  );
};

export default Header;
