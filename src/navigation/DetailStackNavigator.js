import React from 'react';
import { Pressable, Image, StyleSheet } from "react-native";
import DetailScreen from '../screens/DetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HeaderBack = ({ goBack }) => {
  return (
    <Pressable onPress={() => goBack()} style={styles.headerBtn}>
      <Image source={require('../assets/images/icon/icon_back.png')} />
    </Pressable>
  );
}

const DetailStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        // options={({ navigation }) => ({
        //   title: "",
        //   headerLeft: () => (<HeaderBack goBack={navigation.goBack} />),
        // })}
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

export default DetailStackNavigator;