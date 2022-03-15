import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import StarList from "./StarList";

const BookItem = ({ type, data, navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={() => navigation.navigate('Detail', data)}>
        <Image style={styles.image} source={data.image} />
      </Pressable>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.author}>{data.author}</Text>
      {type == "Newest" ? <StarList score={data.score} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8
  },
  btn: {
    shadowColor: "#414144",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 0.1,
    shadowRadius: 32,
    
    elevation: 32,
  },
  image: {
    width: 140,
    height: 200,
    marginBottom: 16,
    
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.012,
    marginBottom: 8,
    color: '#131313'
  },
  author: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 8
  }
});

export default BookItem;