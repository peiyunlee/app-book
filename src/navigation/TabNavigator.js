import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Image } from "react-native";
import routes from './routes'

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      label={true}
      shifting={false}
      activeColor="#6200EE"
      inactiveColor="#000000"
      barStyle={{ backgroundColor: "#ffffff" }}
    >
      {routes.map((screen) => (<Tab.Screen
        name={screen.title}
        component={screen.stack}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Image source={screen.icon.default} />
            ) : (
              <Image
                source={screen.icon.actived}
              />
            )
        }} />)
      )}
    </Tab.Navigator>
  );
};

export default TabNavigator;
