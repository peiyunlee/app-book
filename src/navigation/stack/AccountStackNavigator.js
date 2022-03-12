import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BtnSearch,BtnMenu, } from "../../components/HeaderBtn";
import AccountScreen from "../../screen/AccountScreen";

const Stack = createNativeStackNavigator();

const AccountStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => <BtnMenu toggleDrawer={navigation.toggleDrawer}/>,
          headerRight: () => <BtnSearch />,
        })}
      />
    </Stack.Navigator>
  );
};

export default AccountStackNavigator;
