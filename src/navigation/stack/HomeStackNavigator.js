import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BtnSearch,BtnMenu,BtnBack,BtnMark } from "../../components/HeaderBtn";
import HomeScreen from "../../screen/HomeScreen";
import DetailScreen from "../../screen/DetailScreen";

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
          headerRight: () => <BtnMark />,
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
