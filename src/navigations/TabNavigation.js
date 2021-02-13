import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Chats from '../navigations/ChatNavigation';
import Users from '../screens/Users';

const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
  const getTabBarVisibility = route => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const hideOnScreens = ['ChatRoom'];
    if (hideOnScreens.indexOf(routeName) > -1) {
      return false;
    }
    return true;
  };
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#fff',
        inactiveBackgroundColor: '#fff',
        activeTintColor: '#0085ff',
        inactiveTintColor: '#85c3ff',
        keyboardHidesTabBar: true,
      }}>
      <Tabs.Screen
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <Icon name="chat" size={28} color={color} />
          ),
          title: 'Conversas',
          tabBarVisible: getTabBarVisibility(route),
        })}
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
  );
};

export default TabNavigation;
