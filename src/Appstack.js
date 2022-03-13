import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Dashboard';
import HomePage from './screens/HomePage';
import Exercise from './screens/Exercise';
import EventInfo from './screens/EventInfo';
import ActivityInfo from './screens/ActivityInfo';
// import timer from './screens/timer';
import Timer from './screens/timer';

const Stack = createStackNavigator();

const Appstack = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='HomePage' component={HomePage} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='Exercise' component={Exercise} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='EventInfo' component={EventInfo} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='ActivityInfo' component={ActivityInfo} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='Timer' component={Timer} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Appstack;