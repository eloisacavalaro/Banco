import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, FlatList } from 'react-native';
import PixButton from '../components/PixButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import BalanceContext from '../context/BalanceContext';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

const HomeScreen = ({ navigation }) => {
  const { balance } = useContext(BalanceContext);

  const transactions = [
    { id: '1', description: 'Pagamento de Luz', amount: -150.00 },
    { id: '2', description: 'Salário', amount: 1500.00 },
    { id: '3', description: 'Compras', amount: -120.00 },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />

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

      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text style={{ color: item.amount < 0 ? 'red' : 'green' }}>{item.description}</Text>
            <Text style={{ color: item.amount < 0 ? 'red' : 'green' }}>R$ {item.amount.toFixed(2)}</Text>
          </View>
        )}
      />

      <PixButton navigation={navigation} />
      <Footer navigation={navigation} />
    </View>
  );
};

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
    marginBottom: 30,
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
  transactionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default HomeScreen;



