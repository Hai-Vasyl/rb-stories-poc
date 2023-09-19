import React from 'react';
import {View} from 'react-native';

export const ProgressBar: React.FC = ({isActive}) => {
  return (
    <View
      style={[
        {
          height: 5,
          backgroundColor: 'grey',
          flex: 1,
        },
        isActive && {backgroundColor: 'orange'},
      ]}
    />
  );
};
