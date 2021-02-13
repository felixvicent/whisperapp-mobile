import React from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const Chat = ({ data, onClick }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onClick(data.name)}>
      <Image style={styles.image} source={{ uri: data.image }} />
      <View style={styles.messageContainer}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.message} numberOfLines={1}>
          {data.message}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Chat;
