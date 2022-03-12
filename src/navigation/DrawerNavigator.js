import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { View,Pressable, Text, StyleSheet, Image } from "react-native";
import HomeStackNavigator from "./stack/HomeStackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const drawerLink = ["Home", "WishList", "My Books", "Account", "Setting"];

const CustomDrawerContent = (props) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <View style={styles.account_wrapper}>
        <Image style={styles.avatar} source={require('../assets/images/img_avatar.png')} />
        <Text style={styles.username}>May</Text>
      </View>
      <View style={styles.divider}></View>
      {drawerLink.map((item) => (
        <Pressable style={styles.btn} onPress={() => navigation.navigate(item)}>
          <Image source={require("../assets/images/icon/icon_account.png")} />
          <Text style={styles.btn_text}>{item}</Text>
        </Pressable>
      ))}
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Root" component={TabNavigator} />
      {/* <Drawer.Screen name="WishList" component={WishListScreen} /> */}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  username: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 0.3,
    color: '#131313',
  },
  account_wrapper: {
    padding: 16,
    paddingTop: 40,
  },
  avatar: {
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#EDEDEF',
  },
  btn: {
    height: 56,
    flexDirection: "row",
    paddingLeft: 16,
    alignItems: "center",
  },
  btn_text: {
    marginLeft: 32,
    fontSize: 14,
    letterSpacing: 0.012,
    color: "#666666",
  },
});

export default DrawerNavigator;
