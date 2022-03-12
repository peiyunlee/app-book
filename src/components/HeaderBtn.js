import { Pressable, Image, StyleSheet } from "react-native";

export const BtnBack = ({ goBack }) => {
  return (
    <Pressable onPress={goBack} style={styles.headerBtn}>
      <Image source={require("../assets/images/icon/icon_back.png")} />
    </Pressable>
  );
};

export const BtnMenu = ({ toggleDrawer }) => {
  return (
    <Pressable onPress={toggleDrawer} style={styles.headerBtn}>
      <Image source={require("../assets/images/icon/icon_menu.png")} />
    </Pressable>
  );
};

export const BtnSearch = () => {
  return (
    <Pressable style={styles.headerBtn}>
      <Image source={require("../assets/images/icon/icon_search.png")} />
    </Pressable>
  );
};


const styles = StyleSheet.create({
  headerBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});