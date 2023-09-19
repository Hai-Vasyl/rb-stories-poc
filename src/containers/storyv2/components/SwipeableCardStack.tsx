import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SwipeableCard from './SwipeableCard';

const SwipeableCardStack = ({data}: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeLeft = () => {
    // Handle swipe left action
    setCurrentIndex(currentIndex + 1);
  };

  const handleSwipeRight = () => {
    // Handle swipe right action
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <View style={styles.container}>
      {currentIndex < data.length ? (
        <SwipeableCard
          item={data[currentIndex]}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        />
      ) : (
        <View style={styles.emptyCard}>
          <Text>No more cards to swipe!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SwipeableCardStack;
