import React, { useContext, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AuthContext from '../../context/AuthContext';

const LoginScreen = () => {
  const { setIsLoggedin, updateUsername } = useContext(AuthContext);

  const [username, setUsername] = useState('123');
  const [password, setPassword] = useState('123');
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.root}>
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            width: 200,
            paddingHorizontal: 10,
          }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            width: 200,
            paddingHorizontal: 10,
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (username && password) {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                updateUsername(username);
                setIsLoggedin(true);
              }, 1000);
            } else {
              Alert.alert('Please enter username and password');
            }
          }}
        >
          {loading ? (
            <ActivityIndicator
              size={'small'}
              color={'#fff'}
              style={styles.loader}
            />
          ) : (
            <Text>Login</Text>
          )}
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
  },
  loader: {
    marginLeft: 10,
  },
});

export default LoginScreen;
