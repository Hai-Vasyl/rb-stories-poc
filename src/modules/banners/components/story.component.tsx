import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

type StoryComponentProps = {
  title: string;
  isFirstElement: boolean;
  isActive: boolean;
  onPressIn: () => void;
  onPressOut: () => void;
};

export const StoryComponent: React.FC<StoryComponentProps> = ({
  title,
  isFirstElement,
  isActive,
  onPressIn,
  onPressOut,
}) => {
  const navigation = useNavigation();

  const handleCloseStoryScreen = () => {
    navigation.navigate('Dashboard');
  };

  const onSwipeDown = gestureState => {
    handleCloseStoryScreen();
  };

  const onSwipeRight = gestureState => {
    if (isFirstElement) {
      handleCloseStoryScreen();
    }
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    // <Pressable
    //   style={[styles.container, isActive && styles.containerActive]}
    //   onPressIn={() => {
    //     console.log('Long Press IN ');
    //   }}
    //   onPressOut={() => {
    //     console.log('Long Press OUT');
    //   }}>
    <GestureRecognizer
      style={[styles.container, isActive && styles.containerActive]}
      //   onSwipe={(direction, state) => this.onSwipe(direction, state)}
      onSwipeDown={state => onSwipeDown(state)}
      onSwipeRight={state => onSwipeRight(state)}
      //   onSwipeRight={state => onSwipeRight(state)}
      //   onSwipeDown={state => this.onSwipeDown(state)}
      //   onSwipeLeft={state => this.onSwipeLeft(state)}
      //   onSwipeRight={state => this.onSwipeRight(state)}
      config={config}
      // style={{
      //   flex: 1,
      //   backgroundColor: this.state.backgroundColor
      // }}
    >
      <Pressable
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={{flex: 1}}>
        <Text>{title}</Text>
        <Button
          onPress={() => console.log('Press action has been proceed')}
          title="action"
        />
      </Pressable>
    </GestureRecognizer>
    // </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight - 45,
  },
  containerActive: {
    backgroundColor: 'grey',
  },
});
