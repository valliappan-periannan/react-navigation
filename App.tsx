/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { CustomTextProvider } from './src/context/CustomTextContext';
import Navigation from './src/navigations';
import DrigglingScreen from './src/srceens/driggling';
import { AuthProvider } from './src/context/AuthContext';

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
