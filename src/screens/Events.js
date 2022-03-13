import React from "react";
import {View,Text,StyleSheet,ScrollView} from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

function Events({navigation}){
    return(
    <ScrollView style={{marginTop:20}}>
        <Card>
        <CardImage 
        source={require('../utils/undraw_goal_0v5v.png')} 
        // title="WarmUp"
        />
        {/* <CardTitle
        title="See all events"
          subtitle="Number 6"
        /> */}
        {/* <CardContent text="Clifton, Western Cape" /> */}
        <CardAction 
        separator={true} 
        inColumn={false}>
        {/* <CardButton
            onPress={() => {}}
            title="Do it"
            color="#FEB557"
        /> */}
        <CardButton
            onPress={() => {navigation.navigate('EventInfo')}}
            title="See All Events"
            color="#FEB557"
        />
        </CardAction>
    </Card>
    <Card>
        <CardImage 
        source={require('../utils/undraw_bike_ride_7xit.png')} 
        // title="WarmUp"
        />
        {/* <CardTitle
        title="Create an event"
        onPress={()=>{navigation.navigate('Exercise')}}
          subtitle="Number 6"
        /> */}
        {/* <CardContent text="Clifton, Western Cape" /> */}
        <CardAction 
        separator={true} 
        inColumn={false}>
        {/* <CardButton
            onPress={() => {}}
            title="Do it"
            color="#FEB557"
        /> */}
        <CardButton
            onPress={() => {navigation.navigate('CreateEvent')}}
            title="Create an Event"
            color="#FEB557"
        />
        </CardAction>
    </Card>
    
    </ScrollView>
    )
}

export default Events;