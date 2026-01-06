import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CalculatorButtonProps {
  label: string;
  onPress?: () => void;
}

const CalculatorButton = ({ label, onPress }: CalculatorButtonProps) => {
  return (
    <View style={styles.flex}>
      <TouchableOpacity style={styles.root} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    backgroundColor: '#333',

    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 80,
    width: 80,
  },
  text: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '500',
  },
});

export default CalculatorButton;
