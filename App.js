import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import PixScreen from './src/screens/PixScreen';import BalanceContext from './src/context/BalanceContext';

const Stack = createStackNavigator();

export default function App() {
  const [balance, setBalance] = useState(300.00);

  return (
    <BalanceContext.Provider value={{ balance, setBalance }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PIX" component={PixScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BalanceContext.Provider>
    
  );

  
}








