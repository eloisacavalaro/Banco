import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import BalanceContext from '../context/BalanceContext';

const PixScreen = ({ navigation }) => {
  const { balance, setBalance } = useContext(BalanceContext);
  const [amount, setAmount] = useState('');

  const handlePix = () => {
    const amountValue = parseFloat(amount);
    if (!isNaN(amountValue) && amountValue > 0) {
      setBalance(balance - amountValue);
      navigation.navigate('Home');
    } else {
      alert('Por favor, insira um valor válido.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Fazer PIX</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor do PIX"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Confirmar" onPress={handlePix} color="#00B140" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00B140',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#00B140',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default PixScreen;





