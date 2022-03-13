import React,{useState,useEffect} from 'react';
import {View,Text,FlatList} from 'react-native';
import {BASE_URL,token} from '../utils/api.js';
import { WebView } from 'react-native-webview';
import { TouchableOpacity } from 'react-native-gesture-handler';

function ActivityInfo({navigation,route}){
const {act}=route.params;
const [loading,setLoading]=useState(true);

    return(
        <View style={{borderColor:'black',borderWidth:1,margin:7,paddingHorizontal:5,paddingBottom:40,borderRadius:7,backgroundColor:'#FAE984'}}>
        <View style={{height:250}}>
            <WebView
            source={{ uri: act.video_link}}
            style={{ height:200,margin:10}}
            onError={(event)=> alert('Webview error'+event.nativeEvent.description)}
            />
        </View>
        <View style={{margin:5}}>
            <Text style={{fontSize:18,fontWeight:'bold',color:'#FA8546'}}>{act.name}</Text>
            <Text>{act.description}</Text>
        </View>
        <TouchableOpacity
                onPress={() => {
                navigation.navigate('Timer');
            }}>
            <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:20}}>Start the Timer!</Text>
        </TouchableOpacity>
    </View>
    )
}

export default ActivityInfo;