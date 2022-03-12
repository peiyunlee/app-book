import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStackNavigator from './stack/HomeStackNavigator';
import WishListStackNavigator from './stack/WishListStackNavigator';
import MyBooksStackNavigator from './stack/MyBooksStackNavigator';
import AccountStackNavigator from './stack/AccountStackNavigator';
import SettingStackNavigator from './stack/SettingStackNavigator';


const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="WishList" component={WishListStackNavigator} />
      <Tab.Screen name="My Books" component={MyBooksStackNavigator} />
      <Tab.Screen name="Account" component={AccountStackNavigator} />
      <Tab.Screen name="Setting" component={SettingStackNavigator} />
    </Tab.Navigator>
  );
}

export default TabNavigator;