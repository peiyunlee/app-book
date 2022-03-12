import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './DrawerNavigator';
import TabNavigator from './TabNavigator';

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default Navigation;