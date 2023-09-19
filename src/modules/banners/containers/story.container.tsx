import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Button, Dimensions, FlatList, Text, View} from 'react-native';
import {StoryComponent} from '../components';
import {ProgressBarsContainer} from './progressBars.container';

type StoryType = {
  title: string;
};

const stories = [
  {
    title: 'some important title here 1',
    id: '18dd167b-b1e3-4294-8ba2-440259786ac8',
  },
  {
    title: 'some important title here 2',
    id: '6a51f022-eec6-4776-a1f1-6db507ba615e',
  },
  {
    title: 'some important title here 3',
    id: 'e41ffc92-3e22-48f8-8927-15517ce322fe',
  },
  {
    title: 'some important title here 4',
    id: '9af63898-9e44-4168-9ace-caea7f372488',
  },
];

const windowWidth = Dimensions.get('window').width;
const swipeTimeout = 20000;

export const StoryContainer = () => {
  const flatListRef = useRef<FlatList>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSwipeStopped, setIsSwipeStopped] = useState(false);

  useEffect(() => {
    flatListRef.current?.scrollToIndex({
      index: currentIndex,
      animated: true,
      viewPosition: 0.5,
    });
  }, [currentIndex]);

  // const setTimer = useCallback(
  //   () =>
  //     setTimeout(() => {
  //       if (currentIndex < stories.length - 1) {
  //         setCurrentIndex(prevIndex => prevIndex + 1);
  //       }
  //     }, swipeTimeout),
  //   [],
  // );

  useEffect(() => {
    // const timer = setInterval(() => {
    //   if (currentIndex < stories.length - 1) {
    //     setCurrentIndex(prevIndex => prevIndex + 1);
    //   }
    // }, swipeInterval);
    const timeout = setTimeout(() => {
      if (!isSwipeStopped && currentIndex < stories.length - 1) {
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    }, swipeTimeout);

    // setTimer(interval);

    // const timer = setTimer();
    // setInterval(timer);
    console.log('--------');
    // Clear the timer when the component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex, isSwipeStopped]);

  console.log({currentIndex});

  const pauseAutoSwiping = () => {
    setIsSwipeStopped(true);
  };

  const continueAutoSwiping = () => {
    setIsSwipeStopped(false);
  };

  const renderItem = ({item, index}: {item: StoryType; index: number}) => {
    return (
      <StoryComponent
        title={item.title}
        isFirstElement={index === 0}
        isActive={index === currentIndex}
        onPressIn={pauseAutoSwiping}
        onPressOut={continueAutoSwiping}
      />
    );
  };

  return (
    <View>
      <ProgressBarsContainer
        itemList={stories.map(item => ({
          id: item.id,
        }))}
        activeIndex={currentIndex}
        loadTimeAnimation={20}
      />
      <FlatList
        ref={flatListRef}
        decelerationRate={'fast'}
        data={stories}
        // onLayout={onLayout}
        // onScrollAnimationEnd={() => console.log('Animated scroll is end')}
        initialScrollIndex={currentIndex}
        renderItem={renderItem}
        horizontal
        keyExtractor={item => item.title}
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth}
        snapToAlignment={'center'}
        bounces={false}
        onMomentumScrollEnd={event => {
          let contentOffset = event.nativeEvent.contentOffset;
          let viewSize = event.nativeEvent.layoutMeasurement;

          // Divide the horizontal offset by the width of the view to see which page is visible
          let pageNum = Math.floor(contentOffset.x / viewSize.width);
          console.log('scrolled to page ', pageNum);
          setCurrentIndex(pageNum);
          // clearInterval(timer);
          // if (currentIndex < stories.length - 1) {
          //   setTimer();
          // }
        }}
      />
    </View>
  );
};
