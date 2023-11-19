// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from './src/ListScreen';
import AddItemScreen from './src/AddItemScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [items, setItems] = useState([]);

  const addNewItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#001F3F', // Set the background color to dark blue
        },
        headerTintColor: '#fff', // Set the text color to white
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Tab.Screen name="List">
          {() => <ListScreen items={items} />}
        </Tab.Screen>
        <Tab.Screen name="Add">
          {() => <AddItemScreen onAddItem={addNewItem} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
