import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Chats from '../screens/Chats';
import Users from '../screens/Users';

const Tabs = createBottomTabNavigator();

const TabNavigation = () => (
  <NavigationContainer>
    <Tabs.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#fff',
        inactiveBackgroundColor: '#fff',
        activeTintColor: '#0085ff',
        inactiveTintColor: '#85c3ff',
        keyboardHidesTabBar: true,
      }}>
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="chat" size={28} color={color} />
          ),
          title: 'Conversas',
        }}
        name="Chats"
        component={Chats}
      />
      <Tabs.Screen
        options={{
          title: 'Pessoas',
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={28} color={color} />
          ),
        }}
        name="Users"
        component={Users}
      />
    </Tabs.Navigator>
  </NavigationContainer>
);

export default TabNavigation;
