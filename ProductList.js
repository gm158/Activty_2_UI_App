import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const products = [
  {
    id: '1',
    name: 'Laptop',
    price: 25000,
    description: 'A useful laptop for studying and programming.',
  },
  {
    id: '2',
    name: 'Headphones',
    price: 1500,
    description: 'Comfortable headphones for music and online classes.',
  },
  {
    id: '3',
    name: 'Keyboard',
    price: 1200,
    description: 'A simple keyboard for computer work and gaming.',
  },
];

export default function ProductList({ navigation }) {
  const renderProduct = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.product}
        onPress={() =>
          navigation.navigate('Details', {
            name: item.name,
            price: item.price,
            description: item.description,
          })
        }
      >
        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.price}>
          ₱{item.price}
        </Text>

        <Text style={styles.viewDetails}>
          Tap to view details
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  product: {
    backgroundColor: '#f1f5f9',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  price: {
    fontSize: 18,
    marginTop: 5,
  },

  viewDetails: {
    marginTop: 10,
    color: '#2563eb',
  },
});