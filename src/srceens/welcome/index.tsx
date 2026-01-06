import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>('');

  const onPressDashboard = () => {
    navigation.navigate('Dashboard', { username:name });
  };
  const onPressCalculator = () => {
    navigation.navigate('Calculator' as never);
  };

  return (
    <View style={styles.root}>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={onPressDashboard}>
        <Text>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressCalculator}>
        <Text>calculator</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ff8c00',
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: 200,
    paddingHorizontal: 10,
  },
});

export default WelcomeScreen;
