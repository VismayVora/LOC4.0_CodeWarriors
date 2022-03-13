import React from "react";
import {View,Text,StyleSheet,ScrollView,Dimensions,Image} from "react-native";
import {BarChart} from "react-native-chart-kit";
import ProgressCircle from 'react-native-progress-circle';

function Dashboard({navigation}){
    return(<>
        <View style={{alignSelf:'center'}}>
            <Image source={require('../utils/undraw_Dashboard_re_3b76.png')} style={{height:140,width:340}}/>
        </View>
        <ScrollView style={{marginTop:15}}>
            <Text style={styles.text}>Last 7 Day's Report</Text>
            <View style={{flexDirection:'row'}}>
            <ProgressCircle
                percent={300/7}
                radius={57}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff"
            >
                <Text style={{ fontSize: 18 }}>{'Push-Up'}</Text>
            </ProgressCircle>
            <Text>{'\t'}</Text>
            <ProgressCircle
                percent={600/7}
                radius={57}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff"
            >
                <Text style={{ fontSize: 18 }}>{'Squats'}</Text>
            </ProgressCircle>
            <Text>{'\t'}</Text>
            <ProgressCircle
                percent={500/7}
                radius={57}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff"
            >
                <Text style={{ fontSize: 18 }}>{'Strength Workout'}</Text>
            </ProgressCircle>
            </View>
        <View style={styles.container}>
            <View>
            {/*It is an Example of Bar Chart*/}
            <Text style={styles.text}>Points Summary</Text>
            <BarChart data={{
            labels: [ 'Monday','Tuesday','Wednesday','Thursday','Friday'],
            datasets: [
            {
            data: [20, 40, 30, 10, 50],
            },
            ],
            }}
            width={Dimensions.get('window').width - 16}
            height={220}
            yAxisLabel={''} chartConfig={{
            backgroundColor: '#10c9bd',
            backgroundGradientFrom: '#f2b40a',
            backgroundGradientTo: '#f2b40a',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
            color:'red',
            borderRadius: 16,
            },
            }}
            style={{ marginVertical: 8,
            borderRadius: 16,
            }}
            />
            </View>
            </View>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
    }
});

export default Dashboard;