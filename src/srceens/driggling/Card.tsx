import React from 'react';
import { View } from 'react-native';
import CustomText from './CustomText';

export interface CardProps {
  name: string;
}

const Card = () => {
  return (
    <View
      style={{
        minWidth: 200,
        paddingHorizontal:100,
        height: 130,
        backgroundColor: '#ff8c00',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
      }}
    >
      <CustomText />
    </View>
  );
};

const equals = () => {
  return true
};

export default React.memo(Card, equals);
