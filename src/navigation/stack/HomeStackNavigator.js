import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../../screen/DetailScreen";
import { BtnSearch,BtnMenu, } from "../../components/HeaderBtn";
import HomeScreen from "../../screen/HomeScreen";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => <BtnMenu toggleDrawer={navigation.toggleDrawer}/>,
          headerRight: () => <BtnSearch />,
        })}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => <BtnBack goBack={navigation.goBack} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
