import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BtnSearch, BtnMenu } from "../../components/HeaderBtn";
import HomeScreen from "../../screen/HomeScreen";
import WishListScreen from "../../screen/WishListScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => <BtnMenu toggleDrawer={navigation.toggleDrawer} />,
          headerRight: () => <BtnSearch />,
        })}
      />
      <Stack.Screen
        name="WishList"
        component={WishListScreen}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => <BtnMenu toggleDrawer={navigation.toggleDrawer} />,
          headerRight: () => <BtnSearch />,
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
