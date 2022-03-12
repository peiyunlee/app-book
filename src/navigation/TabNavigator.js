import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator'
import DetailStackNavigator from './DetailStackNavigator'
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import StackNavigation from './StackNavigator';


const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigation} />
      <Tab.Screen name="Detail" component={DetailScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;