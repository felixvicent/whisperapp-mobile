import React, { useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import Message from '../../components/Message';

const ChatRoom = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { id: 1, userId: 1, message: 'Heelo My friend' },
    { id: 2, userId: 2, message: 'Olá' },
    { id: 3, userId: 1, message: 'Lets bora' },
  ]);
  return (
    <>
      <View style={styles.blank} />
      <View style={styles.container}>
        <FlatList
          data={messages}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => <Message data={item} />}
        />

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Digite aqui..." />
          <TouchableOpacity>
            <Icon name="send" color="#0085ff" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ChatRoom;
