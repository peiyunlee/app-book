import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, Image, StyleSheet } from "react-native";
import HomeScreen from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();

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

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        // options={{
        //   title: "",
        //   headerLeft: () => (<HomeHeaderLeft />),
        //   headerRight: () => (<HomeHeaderRight />)
        // }}
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

export default HomeStackNavigator;