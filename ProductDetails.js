import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductDetails({ route, navigation }) {
  const { name, price, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <Text style={styles.price}>
        Price: ₱{price}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  price: {
    fontSize: 20,
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },

  backButton: {
    backgroundColor: '#475569',
    padding: 15,
    borderRadius: 8,
    width: 180,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});