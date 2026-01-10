import React, { useContext } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../srceens/dashboard';
import WelcomeScreen from '../srceens/welcome';
import DrigglingScreen from '../srceens/driggling';
import CalculatorScreen from '../srceens/calculator';
import LoginScreen from '../srceens/login';
import AuthContext from '../context/AuthContext';
import NewsScreen from '../srceens/news';

const RootStack = createNativeStackNavigator();

const Navigation = () => {
  const { isLoggedin } = useContext(AuthContext);
  return (
    <RootStack.Navigator>
      {isLoggedin ? (
        <RootStack.Group>
            <RootStack.Screen
            name="News"
            component={NewsScreen}
            options={{ headerShown: false }}
          />

          <RootStack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{ headerShown: true }}
          />
          <RootStack.Screen
            name="Driggling"
            component={DrigglingScreen}
            options={{ headerShown: true }}
          />
          <RootStack.Screen
            name="Calculator"
            component={CalculatorScreen}
            options={{ headerShown: true }}
          />
        </RootStack.Group>
      ) : (
        <RootStack.Group>
          <RootStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};

export default Navigation;
