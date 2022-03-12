import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MyBooksScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MyBooksScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});

export default MyBooksScreen;
