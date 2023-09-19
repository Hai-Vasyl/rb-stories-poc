import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  FlatListComponent,
  Text,
  View,
} from 'react-native';
import {ProgressBar, StoryComponent} from '../components';
import uuid from 'react-native-uuid';

// type StoryType = {
//   title: string;
// };

// const stories = [
//   {title: 'some important title here 1'},
//   {title: 'some important title here 2'},
//   {title: 'some important title here 3'},
//   {title: 'some important title here 4'},
//   {title: 'some important title here 5'},
//   {title: 'some important title here 6'},
//   {title: 'some important title here 7'},
// ];

// const windowWidth = Dimensions.get('window').width;
// const swipeTimeout = 20000;

type ItemType = {
  id: string;
};

type ProgressBarsContainerProps = {
  itemList: ItemType[];
  activeIndex: number;
  loadTimeAnimation: number;
};

export const ProgressBarsContainer: React.FC<ProgressBarsContainerProps> = ({
  itemList,
  activeIndex,
  loadTimeAnimation,
}) => {
  const renderItem = ({item}) => {
    return <ProgressBar />;
  };

  //   return (
  // <View style={{}}>
  // <FlatList
  //   data={itemList}
  //   horizontal
  //   renderItem={renderItem}
  //   keyExtractor={item => item.id}
  //   ItemSeparatorComponent={() => <View style={{width: 10}} />}
  // />
  // </View>
  //   );

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
        padding: 10,
      }}>
      {itemList.map((item, index) => (
        <ProgressBar key={item.id} isActive={activeIndex === index} />
      ))}
    </View>
  );
};
