import React from 'react';

import {NavigationContainer as Navigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashboardScreen} from '../dashboard';
import {StoryScreen} from '../banners';

const Stack = createNativeStackNavigator();

export const NavigationContainer = () => {
  return (
    <Navigation>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen
          name="Story"
          component={StoryScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </Navigation>
  );
};
