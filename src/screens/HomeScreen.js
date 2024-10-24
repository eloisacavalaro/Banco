import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import PixButton from '../components/PixButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import BalanceContext from '../context/BalanceContext';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

const HomeScreen = ({ navigation }) => {
  const { balance } = useContext(BalanceContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bem-vindo ao PicPay</Text>
      </View>

      <SearchBar />

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Saldo Disponível</Text>
        <Text style={styles.balanceValue}>R$ {balance.toFixed(2)}</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
        <View style={styles.carouselItem}>
          <Icon name="credit-card" size={30} color="#00B140" />
          <Text>Cartões</Text>
        </View>
        <View style={styles.carouselItem}>
          <Icon name="bank" size={30} color="#00B140" />
          <Text>Conta</Text>
        </View>
        <View style={styles.carouselItem}>
          <Icon name="bell" size={30} color="#00B140" />
          <Text>Notificações</Text>
        </View>
      </ScrollView>

      <PixButton navigation={navigation} />

      <Footer navigation={navigation} />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00B140',
    marginBottom: 5,
    marginTop: 35,
  },
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
  carousel: {
    marginVertical: 20,
  },
  carouselItem: {
    width: 100,
    height: 100,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderRadius: 10,
    shadowColor: '#333333',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default HomeScreen;



