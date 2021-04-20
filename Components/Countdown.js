import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Countdown = () => {
    const timeLeft = () => {
        let startTime = new Date()
        let oscarTime = new Date('April 25 2021 17:00:00 UTC-0700')
        let timeBetween = oscarTime - startTime + 1000
        let days = Math.floor(timeBetween / 1000 / 60 / 60 / 24)
        let hours = Math.floor(timeBetween / 1000 / 60 / 60 % 24)
        let minutes = Math.floor(timeBetween / 1000 / 60 % 60)
        let seconds = Math.floor(timeBetween / 1000 % 60)

        return {timeBetween, days, hours, minutes, seconds}
    }

    const [countdown, setCountDown] = useState(timeLeft())

    useEffect(() => {
        const timeout = setTimeout(() => setCountDown(timeLeft()),1000)
        return () => clearTimeout(timeout)
    })

    return(
        <View>
            <Text>{countdown.days} days{countdown.hours} hours, {countdown.minutes} minutes, {countdown.seconds} seconds.</Text>
        </View>
    );
};

export default Countdown;