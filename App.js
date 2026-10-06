import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './App';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'My Store' }}
        />

        <Stack.Screen 
          name="Products" 
          component={ProductList} 
          options={{ title: 'Products' }}
        />

        <Stack.Screen 
          name="Details" 
          component={ProductDetails} 
          options={{ title: 'Product Details' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}