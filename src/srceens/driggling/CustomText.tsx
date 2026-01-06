import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CardProps } from './Card';
import CustomTextContext from '../../context/CustomTextContext';

const CustomText = () => {
  const { userName,inputRef } = useContext(CustomTextContext);
  return (
    <View>
        <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff' }}>
      Hello, {userName}!
    </Text>
    <TouchableOpacity
          style={{
            width: 100,
            height: 40,
            borderColor: 'blue',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}
          onPress={() => {
            inputRef.current?.focus();
          }}
        >
          <Text>clear</Text>
        </TouchableOpacity>
    </View>
  );
};

export default CustomText;
