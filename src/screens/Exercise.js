import React from "react";
import {View,Text,StyleSheet} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

export default function Exercise(){
    return(
    <View>
        <Text>Hi</Text>
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