import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const Message = ({ data }) => {
  const user_id = 1;

  return (
    <View
      style={
        data.userId === user_id ? styles.userMessages : styles.otherMessages
      }>
      <Text
        style={
          data.userId === user_id
            ? styles.userMessagesText
            : styles.otherMessagesText
        }>
        {data.message}
      </Text>
    </View>
  );
};

export default Message;
