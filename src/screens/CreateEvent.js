import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {BASE_URL,token} from '../utils/api.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


function CreateEvent(){
    const [name,setName] = useState("");
    const [time,setTime] = useState("");
    const [date,setDate] = useState("");
    const [location,setLocation] = useState("");

    const crEvent=async()=>{
        try{
            const result=await fetch(BASE_URL+'/create_event/',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'token '+token},
                body: JSON.stringify({
                    "date":date,
                    "time":time,
                    "name":name,
                    "location":location,
                    "token":token,
                  }),
            });
            const json= await result.json();
            console.log(json);
            // setEvents(json);
        }catch(error){
            console.log(error);
            // Alert.alert(error);
        }finally{
            // getEvents();
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Event Details</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput}
                placeholder="Name"
                value={name}
                onChangeText={(text)=>{setName(text)}}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput}
                placeholder="Date (YYYY-MM-DD)"
                value={date}
                onChangeText={(text)=>{setDate(text)}}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput}
                placeholder="Time"
                value={time}
                onChangeText={(text)=>{setTime(text)}}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput}
                placeholder="Location"
                value={location}
                onChangeText={(text)=>{setLocation(text)}}
                />
            </View>
            <TouchableOpacity onPress={()=>{crEvent();}}>
                <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        width: wp('85%'),
        borderRadius: 10,
        height: 50,
        marginTop:15,
    },

    textInput: {
        marginLeft: 5,
        backgroundColor: 'white',
        fontSize: 15,
        color: 'black',
        paddingLeft: 10,
        fontWeight:'600',
        width:wp('75%')
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
    }

})

export default CreateEvent;