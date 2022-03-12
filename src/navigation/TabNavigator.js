import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeStackNavigator from "./stack/HomeStackNavigator";
import WishListStackNavigator from "./stack/WishListStackNavigator";
import MyBooksStackNavigator from "./stack/MyBooksStackNavigator";
import AccountStackNavigator from "./stack/AccountStackNavigator";
import SettingStackNavigator from "./stack/SettingStackNavigator";
import { Image } from "react-native";

const Tab = createMaterialBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      label={true}
      shifting={false}
      activeColor="#6200EE"
      inactiveColor="#000000"
      barStyle={{ backgroundColor: "#ffffff" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Image source={require("../assets/images/icon/icon_home.png")} />
            ) : (
              <Image
                source={require("../assets/images/icon/icon_home_actived.png")}
              />
            ),
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishListStackNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Image
                source={require("../assets/images/icon/icon_nav_bookmark.png")}
              />
            ) : (
              <Image
                source={require("../assets/images/icon/icon_nav_bookmark_actived.png")}
              />
            ),
        }}
      />
      <Tab.Screen
        name="My Books"
        component={MyBooksStackNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Image
                source={require("../assets/images/icon/icon_mybook.png")}
              />
            ) : (
              <Image
                source={require("../assets/images/icon/icon_mybook_actived.png")}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStackNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Image
                source={require("../assets/images/icon/icon_account.png")}
              />
            ) : (
              <Image
                source={require("../assets/images/icon/icon_account_actived.png")}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingStackNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Image
                source={require("../assets/images/icon/icon_settings.png")}
              />
            ) : (
              <Image
                source={require("../assets/images/icon/icon_settings_actived.png")}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
