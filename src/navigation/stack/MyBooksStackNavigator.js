import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BtnSearch,BtnMenu, } from "../../components/HeaderBtn";
import MyBooksScreen from "../../screen/MyBooksScreen";

const Stack = createNativeStackNavigator();

const MyBooksStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyBooks"
        component={MyBooksScreen}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => <BtnMenu toggleDrawer={navigation.toggleDrawer}/>,
          headerRight: () => <BtnSearch />,
        })}
      />
    </Stack.Navigator>
  );
};

export default MyBooksStackNavigator;
