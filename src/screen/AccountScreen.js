import React from "react";
import { Text, View, StyleSheet } from "react-native";

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AccountScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AccountScreen;
