import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.footerText}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PIX')}>
        <Text style={styles.footerText}>Transferir</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.footerText}>Notificações</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.footerText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },
  footerText: {
    fontSize: 16,
    color: '#00B140',
  },
});

export default Footer;

