import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Chats from '../screens/Chats';
import Users from '../screens/Users';

const Tabs = createBottomTabNavigator();

const TabNavigation = () => (
  <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen name="Chats" component={Chats} />
      <Tabs.Screen name="Users" component={Users} />
    </Tabs.Navigator>
  </NavigationContainer>
);

export default TabNavigation;
