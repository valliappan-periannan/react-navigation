import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CalculatorButton from './CalculatorButton';

const CalculatorScreen = () => {


    const onPressHandler=(value:string)=>{
        console.log(value);
    }
  return (
    <SafeAreaView style={styles.root}>
      <View
        style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}
      >
        <Text style={styles.text}>0</Text>
      </View>
      <View style={{ flex: 2, justifyContent: 'space-evenly' }}>
        <View style={{ flexDirection: 'row' }}>
          <CalculatorButton label="C" onPress={() => onPressHandler("C")} />
          <CalculatorButton label="AC" onPress={() => onPressHandler("AC")} />
          <CalculatorButton label="%" onPress={() => onPressHandler("%")} />
          <CalculatorButton label="/" onPress={() => onPressHandler("/")} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CalculatorButton label="7" onPress={() => onPressHandler("7")} />
          <CalculatorButton label="8" onPress={() => onPressHandler("8")} />
          <CalculatorButton label="9" onPress={() => onPressHandler("9")} />
          <CalculatorButton label="*" onPress={() => onPressHandler("*")} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CalculatorButton label="4" onPress={() => onPressHandler("4")} />
          <CalculatorButton label="5" onPress={() => onPressHandler("5")} />
          <CalculatorButton label="6" onPress={() => onPressHandler("6")} />
          <CalculatorButton label="-" onPress={() => onPressHandler("-")} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CalculatorButton label="1" onPress={() => onPressHandler("1")} />
          <CalculatorButton label="2" onPress={() => onPressHandler("2")} />
          <CalculatorButton label="3" onPress={() => onPressHandler("3")} />
          <CalculatorButton label="+" onPress={() => onPressHandler("+")} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CalculatorButton label="+/-" onPress={() => onPressHandler("+/-")} />
          <CalculatorButton label="0" onPress={() => onPressHandler("0")} />
          <CalculatorButton label="." onPress={() => onPressHandler(".")} />
          <CalculatorButton label="=" onPress={() => onPressHandler("=")} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#000',
    flex: 1,
    padding: 16,
  },
  text: {
    color: '#fff',
    fontSize: 64,
  },
});

export default CalculatorScreen;
