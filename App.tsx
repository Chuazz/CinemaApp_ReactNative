// Framework
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './src/screens';
import {publicRoutes} from './src/routes';

// Component

// Style

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {publicRoutes.map((route, i) => (
          <Stack.Screen key={i} name={route.path} component={route.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
