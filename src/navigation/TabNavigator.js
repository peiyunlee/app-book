import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator'
import DetailStackNavigator from './DetailStackNavigator'


const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Detail" component={DetailStackNavigator} />
    </Tab.Navigator>
  );
}

export default TabNavigator;