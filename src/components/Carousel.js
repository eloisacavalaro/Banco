import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const Carousel = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
      <View style={styles.carouselItem}>
        <Text>Item 1</Text>
      </View>
      <View style={styles.carouselItem}>
        <Text>Item 2</Text>
      </View>
      <View style={styles.carouselItem}>
        <Text>Item 3</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

export default Carousel;

