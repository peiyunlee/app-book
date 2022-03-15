import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import StarList from '../components/StarList'

const DetailScreen = ({ route }) => {
  const {
    name,
    author,
    image,
    short_description,
    score,
    price
  } = route.params


  const renderStarItems = () => {
    let result = []
    for (let i = 0; i < 5; i++) {
      result.push(<Image style={styles.star} source={i < score ? icon_star_filled : icon_star} />)
    }
    return result;
  }

  return (
    <View style={{backgroundColor:'white'}}>
      <ScrollView
        contentContainerStyle={styles.container}
      >
        <Image source={image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.author}>{author}</Text>
        <View style={styles.score_wrapper}>
          <StarList score={score} />
          <Text style={styles.score_text}>{score}.0 / 5.0</Text>
        </View>
        <Text style={styles.description}>{short_description}</Text>
        <Pressable style={styles.btn}>
          <Text style={styles.btn_text}>BUY NOW FOR {price}</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: 'white',
    paddingTop: 16,
    paddingBottom: 60
  },
  img: {
    shadowColor: "#414144",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 0.1,
    shadowRadius: 32,

    elevation: 32,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 0.3,
    marginBottom: 8,
    marginTop: 24,
    color: '#131313',
  },
  author: {
    marginBottom: 8,
    fontSize: 14,
    letterSpacing: 0.012,
    color: '#666666',
  },
  score_wrapper: {
    flexDirection: 'row',
    marginBottom: 16
  },
  score_text: {
    marginLeft: 4,
    fontSize: 14,
    letterSpacing: 0.012,
    color: '#666666',
  },
  description: {
    fontSize: 14,
    letterSpacing: 0.012,
    lineHeight: 24,
    textAlign: 'center',
    color: '#131313',
    marginBottom: 28,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#6200EE",
    borderRadius: 4,
  },
  btn_text: {
    fontSize: 14,
    letterSpacing: 0.08,
    color: '#ffffff',
  }
});

export default DetailScreen;