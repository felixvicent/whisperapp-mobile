import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const User = ({ data, onClick }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onClick(data.name)}>
      <Image style={styles.avatar} source={{ uri: data.image }} />
      <Text style={styles.name}>{data.name}</Text>
    </TouchableOpacity>
  );
};

export default User;
