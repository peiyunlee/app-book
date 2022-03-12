import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const BookItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/books/img_book_calligraphy.png')} />
      <Text style={styles.name}>{data.name}</Text>
      <Text>{data.author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8
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
    color: '#131313'
  }
});

export default BookItem;