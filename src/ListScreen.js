// src/ListScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListScreen = ({ items }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    paddingBottom: 10,
  },
});

export default ListScreen;
