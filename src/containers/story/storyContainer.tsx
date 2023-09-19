import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

const StoryContainer = () => {
  const navigation = useNavigation();

  const handleNavigateToStory = () => {
    navigation.navigate('Story');
  };

  return (
    <View>
      <Text>StoryContainer</Text>
      <Button onPress={handleNavigateToStory} title="story banner1" />
      <Button onPress={handleNavigateToStory} title="story banner2" />
      <Button onPress={handleNavigateToStory} title="story banner3" />
    </View>
  );
};

export default StoryContainer;
