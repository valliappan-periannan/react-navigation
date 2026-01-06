import React, { useContext, useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Card from './Card';
import CustomTextContext from '../../context/CustomTextContext';
import { Button } from 'react-native/types_generated/index';

const DrigglingScreen = () => {
    
  const { userName, setUserName, inputRef } = useContext(CustomTextContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ gap: 32, alignItems: 'center' }}>
        <TextInput
        ref={inputRef}
          value={userName}
          onChangeText={setUserName}
          
          placeholder="Enter your name"
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 10,
            width: 200,
            marginRight: 10,
          }}
        />

        <Card />
        
      </View>
    </View>
  );
};

export default DrigglingScreen;
