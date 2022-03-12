import React from "react";
import { View, StyleSheet, Text, SectionList, FlatList } from "react-native";
import BookItem from "../components/BookItem";
import bookData from "../json/books.json";

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
        <SectionList
          sections={bookData}
          keyExtractor={(item, index) => `section-${item.title}` + index}
          contentContainerStyle={styles.sectionlist}
          renderItem={() => null}
          renderSectionHeader={({ section: { title, data } }) => (
            <>
              <Text style={styles.title}>{title}</Text>
              <FlatList
                horizontal
                data={data}
                keyExtractor={(item) => `booklist-${item.name}`}
                renderItem={({ item }) => <BookItem data={item} />}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.booklist}
              />
            </>
          )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 0.3,
    marginBottom: 16,
    marginLeft: 20,
    color: '#131313',
  },
  sectionlist: {
    paddingTop: 8,
    paddingBottom: 60,
  },
  booklist: {
    marginBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
  }
});

export default HomeScreen;