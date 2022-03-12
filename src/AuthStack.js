import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

const Stack = createStackNavigator();

const AuthStack = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;