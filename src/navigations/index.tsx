import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../srceens/dashboard';
import WelcomeScreen from '../srceens/welcome';
import DrigglingScreen from '../srceens/driggling';
import CalculatorScreen from '../srceens/calculator';

const RootStack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <RootStack.Navigator initialRouteName="Welcome">
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
    </RootStack.Navigator>
  );
};

export default Navigation;
