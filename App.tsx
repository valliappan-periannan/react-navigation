/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigations';
import { AuthProvider } from './src/context/AuthContext';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
