import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Balance = ({ balance }) => {
  return (
    <View style={styles.balanceContainer}>
      <Text style={styles.balanceText}>Saldo Disponível</Text>
      <Text style={styles.balanceValue}>R$ {balance.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#333333',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  balanceText: {
    fontSize: 16,
    color: '#333333',
  },
  balanceValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00B140',
  },
});

export default Balance;

