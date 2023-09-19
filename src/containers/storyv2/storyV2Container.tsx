import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SwipeableCardStack from './components/SwipeableCardStack';

const data = [
  {text: 'Card 1'},
  {text: 'Card 2'},
  {text: 'Card 3'},
  // Add more data as needed
];

const StoryV2Container = () => {
  return (
    <View style={styles.container}>
      <SwipeableCardStack data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default StoryV2Container;
