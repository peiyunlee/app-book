import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BtnSearch,BtnMenu, } from "../../components/HeaderBtn";
import SettingScreen from "../../screen/SettingScreen";

const Stack = createNativeStackNavigator();

const SettingStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => <BtnMenu toggleDrawer={navigation.toggleDrawer}/>,
          headerRight: () => <BtnSearch />,
        })}
      />
    </Stack.Navigator>
  );
};

export default SettingStackNavigator;
