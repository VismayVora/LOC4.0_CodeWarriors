import React from "react";
import {View,Text,StyleSheet,ScrollView} from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

function Events({navigation}){
    return(
    <ScrollView>
        <Card>
        <CardImage 
        source={require('../utils/undraw_goal_0v5v.png')} 
        // title="WarmUp"
        />
        <CardTitle
        title="Join an event"
        //   subtitle="Number 6"
        />
        {/* <CardContent text="Clifton, Western Cape" /> */}
        <CardAction 
        separator={true} 
        inColumn={false}>
        <CardButton
            onPress={() => {}}
            title="Do it"
            color="#FEB557"
        />
        <CardButton
            onPress={() => {navigation.navigate('Exercise')}}
            title="Explore"
            color="#FEB557"
        />
        </CardAction>
    </Card>
    <Card>
        <CardImage 
        source={require('../utils/undraw_goal_0v5v.png')} 
        // title="WarmUp"
        />
        <CardTitle
        title="Create an event"
        onPress={()=>{navigation.navigate('Exercise')}}
        //   subtitle="Number 6"
        />
        {/* <CardContent text="Clifton, Western Cape" /> */}
        <CardAction 
        separator={true} 
        inColumn={false}>
        <CardButton
            onPress={() => {}}
            title="Do it"
            color="#FEB557"
        />
        <CardButton
            onPress={() => {navigation.navigate('Exercise')}}
            title="Explore"
            color="#FEB557"
        />
        </CardAction>
    </Card>
    
    </ScrollView>
    )
}

export default Events;