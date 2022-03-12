import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BtnSearch,BtnMenu, } from "../../components/HeaderBtn";
import WishListScreen from "../../screen/WishListScreen";

const Stack = createNativeStackNavigator();

const WishListStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WishList"
        component={WishListScreen}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => <BtnMenu toggleDrawer={navigation.toggleDrawer}/>,
          headerRight: () => <BtnSearch />,
        })}
      />
    </Stack.Navigator>
  );
};

export default WishListStackNavigator;
