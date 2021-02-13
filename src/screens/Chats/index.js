import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import styles from './styles';
import Chat from '../../components/Chat';

const Chats = ({ navigation }) => {
  const [chats, setChats] = useState([
    {
      id: 1,
      image:
        'https://lh3.googleusercontent.com/proxy/IVEK5ujopa3xs2N338nagjktIBhrx36WJ8sTVaGiUJee0LknVyryKvMI55Y0DyS8wXZkVY-FybIbAKcofMzbRDkoqDrsxXegP8HjVQTrXedVlhltO3ak',
      name: 'Felps',
      message: 'Hello my friend, thats all ok with you?',
    },
    {
      id: 2,
      image:
        'https://lh3.googleusercontent.com/proxy/IVEK5ujopa3xs2N338nagjktIBhrx36WJ8sTVaGiUJee0LknVyryKvMI55Y0DyS8wXZkVY-FybIbAKcofMzbRDkoqDrsxXegP8HjVQTrXedVlhltO3ak',
      name: 'Eddy',
      message:
        'I wanna see you crazy rught now bitch, mother fucker, son of a bitch, Yhooooo',
    },
    {
      id: 3,
      image:
        'https://lh3.googleusercontent.com/proxy/IVEK5ujopa3xs2N338nagjktIBhrx36WJ8sTVaGiUJee0LknVyryKvMI55Y0DyS8wXZkVY-FybIbAKcofMzbRDkoqDrsxXegP8HjVQTrXedVlhltO3ak',
      name: 'Sophia',
      message: 'Hello my friend',
    },
  ]);

  const handleChatRoomNavigation = name => {
    navigation.navigate('ChatRoom', { name });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <Chat data={item} onClick={handleChatRoomNavigation} />
        )}
      />
    </View>
  );
};

export default Chats;
