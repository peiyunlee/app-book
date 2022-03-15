import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";
import { View, Pressable, Text, StyleSheet, Image } from "react-native";
import routes from './routes'

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.account_wrapper}>
        <Image style={styles.avatar} source={require('../assets/images/img_avatar.png')} />
        <Text style={styles.username}>May</Text>
      </View>
      <View style={styles.divider}></View>
      {routes.map((item) => (
        <Pressable style={styles.btn} onPress={() => navigation.navigate(item.title)}>
          <Image source={item.icon.default} />
          <Text style={styles.btn_text}>{item.title}</Text>
        </Pressable>
      ))}
      {/* <DrawerItemList style={styles.btn} {...props} /> */}
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
      {routes.map((item) => (
        <Drawer.Screen
          name={item.title}
          component={item.navigator}
        />
      ))}
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
