import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Signup from './screens/Signup';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="Login" component={Login} options={{
          headerShown : false
        }}/>
        <Stack.Screen name="Signup" component={Signup} options={{
          headerShown : false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
