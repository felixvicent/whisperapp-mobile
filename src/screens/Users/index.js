import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

import api from '../../services/api';

import styles from './styles';

const Users = () => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const response = api.get('/users');
  // }, []);
  return <View style={styles.container} />;
};

export default Users;
