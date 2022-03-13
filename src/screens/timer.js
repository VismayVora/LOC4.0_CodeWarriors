import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import BackgroundTimer from "react-native-background-timer"

function Timer({navigation}){
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [timerOn, setTimerOn] = useState(false);

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft(secs => {
        if (secs > 0) return secs - 1
        else return 0
      })
    }, 1000)
  }

  // Runs when timerOn value changes to start or stop timer
  useEffect(() => {
    if (timerOn) startTimer();
    else BackgroundTimer.stopBackgroundTimer();
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [timerOn]);

  // Checks if secondsLeft = 0 and stop timer if so
useEffect(() => {
    if (secondsLeft === 0) {
        BackgroundTimer.stopBackgroundTimer();
        navigation.goBack();
    }
  }, [secondsLeft])

  const clockify = () => {
    let hours = Math.floor(secondsLeft / 60 / 60)
    let mins = Math.floor((secondsLeft / 60) % 60)
    let seconds = Math.floor(secondsLeft % 60)
    let displayHours = hours < 10 ? `0${hours}` : hours
    let displayMins = mins < 10 ? `0${mins}` : mins
    let displaySecs = seconds < 10 ? `0${seconds}` : seconds
    return {
      displayHours,
      displayMins,
      displaySecs,
    }
  }

    return(
        <View style={styles.container}>
        <Text style={styles.time}>
          {clockify().displayMins} Mins{" "}
          {clockify().displaySecs} Secs
        </Text>
        <Button
          title="Start/Stop"
          onPress={() => setTimerOn(timerOn => !timerOn)}
        />
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      backgroundColor: "#000",
    },
    time: {
      fontSize: 30,
      color: "#fff",
      padding: 30,
      textAlign: "center",
      borderRadius:15,
      backgroundColor:"#4e8ca5",
      marginBottom:15,
    },
  })

export default Timer;