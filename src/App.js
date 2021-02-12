import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import AuthNavigation from './navigations/AuthNavigation';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#0085ff" barStyle="light-content" />
      <AuthNavigation />
    </>
  );
};

export default App;
