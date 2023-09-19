import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

const SwipeScreen = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      // Go to the next screen after 3 seconds
      if (swiperRef.current) {
        swiperRef.current.scrollBy(1);
      }
    }, 3000); // 3 seconds

    // Clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Swiper ref={swiperRef} loop={false}>
      <View style={styles.slide}>
        <Text>Swipe Screen 1</Text>
      </View>
      <View style={styles.slide}>
        <Text>Swipe Screen 2</Text>
      </View>
      <View style={styles.slide}>
        <Text>Swipe Screen 3</Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});

export default SwipeScreen;
