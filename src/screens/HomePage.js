import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Dashboard';
import Dashboard from './Dashboard';
import Activities from './Activities';
import Events from './Events';
import Icon from 'react-native-vector-icons/Ionicons';  
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator();

export default function HomePage() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} options={{headerShown:true,tabBarIcon: () => (<MaterialCommunityIcons name="monitor-dashboard" color="red" size={25}/>)}} />
      <Tab.Screen name="Activities" component={Activities} options={{headerShown:true,tabBarIcon: () => (<MaterialCommunityIcons name="yoga" color="red" size={25}/>)}}/>
      <Tab.Screen name="Events" component={Events} options={{headerShown:true,tabBarIcon: ()=>(<MaterialIcons name="event" color="red" size={25}/>)}}/>
    </Tab.Navigator>
  );
}