import React, {useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import SwipeableScreen from './SwipeableScreen';

const screens = [
  {text: 'Screen 1', backgroundColor: 'red'},
  {text: 'Screen 2', backgroundColor: 'blue'},
  {text: 'Screen 3', backgroundColor: 'green'},
];

const SwipeableScreenNavigator = () => {
  const translationX = useRef(new Animated.Value(0)).current;
  const currentIndex = useRef(0);

  const onSwipeGestureEvent = Animated.event([{nativeEvent: {translationX}}], {
    useNativeDriver: false,
  });

  const onSwipeHandlerStateChange = event => {
    if (event.nativeEvent.state === State.END) {
      // Determine if the user swiped left or right
      if (event.nativeEvent.translationX < 0) {
        // Swiped left
        if (currentIndex.current < screens.length - 1) {
          currentIndex.current++;
        }
      } else {
        // Swiped right
        if (currentIndex.current > 0) {
          currentIndex.current--;
        }
      }
      // Reset the translationX value
      Animated.spring(translationX, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }
  };

  // <View style={styles.container}>
  return (
    <GestureHandlerRootView>
      <PanGestureHandler
        onGestureEvent={onSwipeGestureEvent}
        onHandlerStateChange={onSwipeHandlerStateChange}>
        <Animated.View
          style={[
            styles.swipeableContainer,
            {
              transform: [{translateX: Animated.multiply(translationX, -1)}],
            },
          ]}>
          {screens.map((screen, index) => (
            <SwipeableScreen
              key={index}
              text={screen.text}
              backgroundColor={screen.backgroundColor}
            />
          ))}
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};
// </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swipeableContainer: {
    flex: 1,
    flexDirection: 'row',
    width: screens.length * 100 + '%', // Adjust the width based on the number of screens
  },
});

export default SwipeableScreenNavigator;
