import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Animated, PanResponder} from 'react-native';

const SwipeableCard = ({item, onSwipeLeft, onSwipeRight}: any) => {
  //   const pan = useRef(new Animated.ValueXY()).current;
  const [pan, setPan] = useState(new Animated.ValueXY());

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      //   onPanResponderMove: (e, gestureState) => {
      //     console.log({gestureState});
      //   },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, gesture) => {
        if (gesture.dx > 120) {
          // Swiped right
          onSwipeRight();
        } else if (gesture.dx < -120) {
          // Swiped left
          onSwipeLeft();
        }
      },
    }),
  ).current;

  return (
    <Animated.View
      style={[
        styles.card,
        {
          transform: [{translateX: 0}],
        },
      ]}
      {...panResponder.panHandlers}>
      <Text>{item.text}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    padding: 20,
    margin: 16,
  },
});

export default SwipeableCard;
