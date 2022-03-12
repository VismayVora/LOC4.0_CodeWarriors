import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Dashboard';
import Dashboard from './Dashboard';
import Activities from './Activities';
import Events from './Events';

const Tab = createBottomTabNavigator();

export default function HomePage() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} options={{headerShown:true}}/>
      <Tab.Screen name="Activities" component={Activities} options={{headerShown:true}}/>
      <Tab.Screen name="Events" component={Events} options={{headerShown:true}}/>
    </Tab.Navigator>
  );
}