// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListScreen from './src/ListScreen';
import AddItemScreen from './src/AddItemScreen';
import { createStackNavigator } from '@react-navigation/stack';
import EditItemScreen from './src/EditItemScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const App = () => {
  const [items, setItems] = useState([]);

  

  // Load items from AsyncStorage when the app starts
  useEffect(() => {
    loadItems();
  }, []);

  // Save items to AsyncStorage whenever the items state changes
  useEffect(() => {
    saveItems();
  }, [items]);

  // Load items from AsyncStorage
  const loadItems = async () => {
    try {
      const storedItems = await AsyncStorage.getItem('@MyApp:items');
      if (storedItems) {
        setItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error('Error loading items from AsyncStorage:', error);
    }
  };

  // Save items to AsyncStorage
  const saveItems = async () => {
    try {
      await AsyncStorage.setItem('@MyApp:items', JSON.stringify(items));
    } catch (error) {
      console.error('Error saving items to AsyncStorage:', error);
    }
  };

  // Add new item to the list
  const addNewItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Edit existing item in the list
  const editItem = (editedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === editedItem.id ? editedItem : item))
    );
  };

  // Delete item from the list
  const deleteItem = (itemToDelete) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemToDelete.id));
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ListApp">
          {() => (
            <Stack.Navigator initialRouteName="List">
              <Stack.Screen name="List">
                {(props) => <ListScreen {...props} items={items} onEditItem={editItem} onDeleteItem={deleteItem} />}
              </Stack.Screen>
              <Stack.Screen name="Edit" component={EditItemScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Add">
          {() => <AddItemScreen onAddItem={addNewItem} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );

};

export default App;
