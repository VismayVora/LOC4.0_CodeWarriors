import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,FlatList,ActivityIndicator,Image,TouchableOpacity} from "react-native";

import {BASE_URL,token} from '../utils/api.js'
function EventInfo(){
    const [events,setEvents]=useState([]);
    const [loading,setLoading]=useState(true);

    const getEvents=async()=>{
        setLoading(true);
        try{
            const result=await fetch(BASE_URL+'/Event/',{
                method:'GET',
                headers: {'Authorization': 'token '+token},
            });
            const json= await result.json();
            console.log(json);
            setEvents(json);
        }catch(error){
            console.log(error);
            // Alert.alert(error);
        }finally{
            setLoading(false);
        }
    }

    const joinEvent=async(id)=>{
        try{
            const result=await fetch(BASE_URL+'/join_event/',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'token '+token},
                body: JSON.stringify({
                    "eventId":id,
                    "tokenNo":token,
                  }),
            });
            const json= await result.json();
            console.log(json);
            setEvents(json);
        }catch(error){
            console.log(error);
            // Alert.alert(error);
        }finally{
            getEvents();
        }
    }
    useEffect(() => {
        // console.log(BASE_URL);
        getEvents();
      }, []);

    return(
        <>{loading?<ActivityIndicator/>:
        <FlatList
              data={events}
              keyExtractor={({ id }, index) => id}
              renderItem={({item,index})=>
              <View style={styles.card}>
                  {item.image?<Image source={{uri:item.image}} style={{height:200,marginTop:5}}/>:
                  <Image source={require('../utils/undraw_game_day_ucx9.png')} style={{height:200,width:400,marginTop:5,}}/>
                  }
                  <Text style={{fontSize:18,fontWeight:'bold',color:'#FA8546'}}>{item.name}</Text>
                  <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
                    <Text>Date: {item.date}</Text>
                    <Text>Participant Limit: {item.participant_limit}</Text>
                  </View>
                    <Text style={{marginLeft:5}}>Location: {item.location}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            joinEvent(item.id);
                        }}>
                        <Text style={{alignSelf:'center'}}>Join Event</Text>
                    </TouchableOpacity>
              </View>
            }
            />}
        </>
    )
}

const styles=StyleSheet.create({
    card:{
        borderColor:'black',
        borderWidth:1,
        margin:7,
        paddingHorizontal:5,paddingBottom:40,
        borderRadius:7,backgroundColor:'#FAE984'
        }
})

export default EventInfo;