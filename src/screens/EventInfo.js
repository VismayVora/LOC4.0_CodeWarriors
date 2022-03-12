import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,FlatList} from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {BASE_URL} from '../utils/api.js'
function EventInfo(){
    const [events,setEvents]=useState([]);
    const [loading,setLoading]=useState(true);

    const getEvents=async()=>{
        setLoading(true);
        try{
            const result=await fetch(BASE_URL+'/Activity/',{
                method:'GET',
                headers: {'Authorization': 'token '+token},
            });
            const json= await result.json();
            console.log(json);
            setData(json);
        }catch(error){
            console.log(error);
            // Alert.alert(error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        // console.log(BASE_URL);
        // getData();
      }, []);

    return(
        <View>
            <Text>Events</Text>
        </View>
    )
}

export default EventInfo;