import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Dashboard';
import HomePage from './screens/HomePage';

const Stack = createStackNavigator();

const Appstack = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='HomePage' component={HomePage} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Appstack;