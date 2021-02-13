import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Chats from '../screens/Chats';
import ChatRoom from '../screens/ChatRoom';

const Chat = createStackNavigator();

const ChatNavigation = () => {
  return (
    <Chat.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#0085ff' },
        headerTintColor: '#fff',
      }}>
      <Chat.Screen
        name="Chats"
        component={Chats}
        options={{ title: 'Conversas' }}
      />
      <Chat.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Chat.Navigator>
  );
};

export default ChatNavigation;
