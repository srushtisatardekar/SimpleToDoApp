// AddItemScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const AddItemScreen = ({ onAddItem }) => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleAddItem = () => {
    // Basic input validation
    if (!name || !description) {
      setError('Please enter both name and description.');
      return;
    }

    // Generate a unique ID (for simplicity)
    const id = Date.now();

    // Add the new item to the list
    onAddItem({ id, name, description });

    // Clear the input fields
    setName('');
    setDescription('');

    // Clear the error message
    setError('');

    // Navigate back to the list screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button title="Add Item" onPress={handleAddItem} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.goBackButton}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  goBackButton: {
    color: 'blue',
    marginTop: 10,
  },
});

export default AddItemScreen;
