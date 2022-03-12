import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Pressable, Image, StyleSheet } from "react-native";

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

const HeaderBack = ({ goBack }) => {
  return (
    <Pressable onPress={() => goBack()} style={styles.headerBtn}>
      <Image source={require('../assets/images/icon/icon_back.png')} />
    </Pressable>
  );
}

const HomeHeaderLeft = () => {
  const openDrawer = () => {
    alert("open drawer")
  }

  return (
    <Pressable onPress={openDrawer} style={styles.headerBtn}>
      <Image source={require('../assets/images/icon/icon_menu.png')} />
    </Pressable>
  );
}

const HomeHeaderRight = () => {
  return (
    <Pressable style={styles.headerBtn}>
      <Image source={require('../assets/images/icon/icon_search.png')} />
    </Pressable>
  );
}

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "",
          headerLeft: () => (<HomeHeaderLeft />),
          headerRight: () => (<HomeHeaderRight />)
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => (<HeaderBack goBack={navigation.goBack} />),
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default StackNavigator;