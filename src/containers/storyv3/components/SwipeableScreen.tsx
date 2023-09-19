import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SwipeableScreen = ({text, backgroundColor}: any) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SwipeableScreen;
