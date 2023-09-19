import React from 'react';
import {View, StyleSheet} from 'react-native';
import SwipeableScreenNavigator from './components/SwipeableScreenNavigator';

const StoryV3Container = () => {
  return (
    <View style={styles.container}>
      <SwipeableScreenNavigator />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default StoryV3Container;
