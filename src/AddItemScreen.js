import React, { useState } from 'react';
import { View, TextInput,Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddItemScreen = ({ onAddItem }) => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddItem = () => {
    // Basic input validation
    if (name.trim() === '' || description.trim() === '') {
      alert('Please enter both name and description.');
      return;
    }

    // Generate a unique ID (for simplicity)
    const id = Date.now();

    // Add the new item to the list
    onAddItem({ id, name, description });

    // Clear the input fields
    setName('');
    setDescription('');

    // Navigate back to the list screen
    navigation.goBack();
    //navigation.navigate('List');
  };
  const handleGoBack = () => {
    // Navigate back to the list screen
    navigation.goBack();
  }

  return (
   
     
    


    <View style={styles.container}>
        <TouchableOpacity onPress={handleGoBack}>
        <Text style={styles.backButton}>Go Back</Text>
      </TouchableOpacity>

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
      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
};
AddItemScreen.navigationOptions = {
    headerShown: true,
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
});

export default AddItemScreen;
