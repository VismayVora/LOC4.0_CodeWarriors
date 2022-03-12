import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,ScrollView,FlatList,ActivityIndicator} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {BASE_URL,token} from '../utils/api.js';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Activities({navigation}){

const [data,setData]=useState([]);
const [loading,setLoading]=useState(true);

  const getData=async()=>{
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
        
        // console.log("Done");
        // console.log(data);
        setLoading(false);
    }
}

  useEffect(() => {
    console.log(BASE_URL);
    getData();
  }, []);

    return(
    <View>
      {loading?<ActivityIndicator/>:
                    <FlatList
                      data={data}
                      keyExtractor={({ id }, index) => id}
                      numColumns={1}
                      renderItem={({item,index})=>
                        // <Text>{item.description}</Text>
                      
                    <Card>
                <CardImage 
                source={{uri:item.image}} 
                // title="WarmUp"
                />
                <CardTitle
                title={item.name}
                //   subtitle="Number 6"
                />
                {/* <CardContent text={item.name} /> */}
                <CardAction 
                separator={true} 
                inColumn={false}>
                {/* <CardButton
                    onPress={() => {}}
                    title="Do it"
                    color="#FEB557"
                /> */}
                <CardButton
                    onPress={() => {navigation.navigate('ActivityInfo',{act:item})}}
                    title="Exercise"
                    color="#FEB557"
                />
                </CardAction>
                </Card>
                            }
                            />
                        }
          </View>
    );
};

const styles = StyleSheet.create({
    infoCard: {
      width:'100%',
      alignItems:'flex-start',
      marginTop:5,
      borderRadius:10,
      backgroundColor:'#DEB887',
      paddingBottom:10,
      paddingVertical:10,
      flexDirection:'row',
      elevation:10,
      shadowColor:'blue',
      borderWidth:0.5,
    },
    poster: {
        width:140,
        height:180
    },
});