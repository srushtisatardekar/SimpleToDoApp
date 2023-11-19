// EditItemScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EditItemScreen = ({ route, navigation }) => {
  const [editedItem, setEditedItem] = useState(route.params.item);

  const handleSaveChanges = () => {
    // Implement logic to save changes to the item
    // You can call a function to save changes to the item, for example: onSaveChanges(editedItem);
    // For simplicity, update the item directly
    navigation.navigate('List'); // Navigate back to the list screen
  };

  return (
    <View style={styles.container}>
      <Text>Edit Item</Text>
      <TextInput
        value={editedItem.name}
        onChangeText={(text) => setEditedItem({ ...editedItem, name: text })}
        placeholder="Edit Name"
        style={styles.textInput}
      />
      <TextInput
        value={editedItem.description}
        onChangeText={(text) => setEditedItem({ ...editedItem, description: text })}
        placeholder="Edit Description"
        style={styles.textInput}
      />
      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 200,
    height: 40,
    marginVertical: 10,
    padding: 8,
  },
});

export default EditItemScreen;
