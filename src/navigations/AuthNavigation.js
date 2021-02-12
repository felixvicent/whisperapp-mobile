import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import TabNavigation from './TabNavigation';

const Auth = createStackNavigator();

const AuthNavigation = () => (
  <NavigationContainer>
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="Register" component={Register} />
      <Auth.Screen name="TabNavigation" component={TabNavigation} />
    </Auth.Navigator>
  </NavigationContainer>
);

export default AuthNavigation;
