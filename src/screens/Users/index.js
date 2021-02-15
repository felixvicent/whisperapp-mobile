import React, { useState } from 'react';
import { View } from 'react-native';

import styles from './styles';
import User from '../../components/User';
import { FlatList } from 'react-native-gesture-handler';

const Users = ({ navigation }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      image:
        'https://lh3.googleusercontent.com/proxy/IVEK5ujopa3xs2N338nagjktIBhrx36WJ8sTVaGiUJee0LknVyryKvMI55Y0DyS8wXZkVY-FybIbAKcofMzbRDkoqDrsxXegP8HjVQTrXedVlhltO3ak',
      name: 'Felps',
    },
    {
      id: 2,
      image:
        'https://lh3.googleusercontent.com/proxy/IVEK5ujopa3xs2N338nagjktIBhrx36WJ8sTVaGiUJee0LknVyryKvMI55Y0DyS8wXZkVY-FybIbAKcofMzbRDkoqDrsxXegP8HjVQTrXedVlhltO3ak',
      name: 'Eddy',
    },
    {
      id: 3,
      image:
        'https://lh3.googleusercontent.com/proxy/IVEK5ujopa3xs2N338nagjktIBhrx36WJ8sTVaGiUJee0LknVyryKvMI55Y0DyS8wXZkVY-FybIbAKcofMzbRDkoqDrsxXegP8HjVQTrXedVlhltO3ak',
      name: 'Sophia',
    },
    {
      id: 4,
      image:
        'https://lh3.googleusercontent.com/proxy/IVEK5ujopa3xs2N338nagjktIBhrx36WJ8sTVaGiUJee0LknVyryKvMI55Y0DyS8wXZkVY-FybIbAKcofMzbRDkoqDrsxXegP8HjVQTrXedVlhltO3ak',
      name: 'Felps',
    },
    {
      id: 5,
      image:
        'https://lh3.googleusercontent.com/proxy/IVEK5ujopa3xs2N338nagjktIBhrx36WJ8sTVaGiUJee0LknVyryKvMI55Y0DyS8wXZkVY-FybIbAKcofMzbRDkoqDrsxXegP8HjVQTrXedVlhltO3ak',
      name: 'Eddy',
    },
  ]);

  const handleChatRoomNavigation = name => {
    navigation.navigate('ChatRoom', { name });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => `${item.id}`}
        numColumns={3}
        renderItem={({ item }) => (
          <User data={item} onClick={handleChatRoomNavigation} />
        )}
      />
    </View>
  );
};

export default Users;
