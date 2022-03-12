import React,{useState,useEffect} from 'react';
import {View,Text,FlatList} from 'react-native';
import {BASE_URL,token} from '../utils/api.js';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

function ActivityInfo({navigation,route}){
const {act}=route.params;
const [loading,setLoading]=useState(true);

    return(
        <View>
            
            <Text>{act.name}</Text>
            <Text>{act.description}</Text>
        </View>
    )
}

export default ActivityInfo;