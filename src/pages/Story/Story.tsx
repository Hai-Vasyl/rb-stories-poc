import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

const Story = () => {
  const navigation = useNavigation();

  const onSwipeLeft = gestureState => {
    // this.setState({myText: 'You swiped left!'});
    console.log('SWIPED LEFT');
    navigation.navigate('Home');
  };

  const onSwipeRight = gestureState => {
    // this.setState({myText: 'You swiped right!'});
    console.log('SWIPED RIGHT');
    navigation.navigate('Story', {some: 'some'});
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <GestureRecognizer
      //   onSwipe={(direction, state) => this.onSwipe(direction, state)}
      //   onSwipeUp={state => this.onSwipeUp(state)}
      //   onSwipeDown={state => this.onSwipeDown(state)}
      onSwipeLeft={state => onSwipeLeft(state)}
      onSwipeRight={state => onSwipeRight(state)}
      config={config}
      style={{
        flex: 1,
        // backgroundColor: this.state.backgroundColor,
      }}>
      <View>
        <Text>Story Screen</Text>
      </View>
    </GestureRecognizer>
  );
};

export default Story;
