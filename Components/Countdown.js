import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Countdown = () => {
    const timeLeft = () => {
        let startTime = new Date();
        let oscarTime = new Date('April 25 2021 17:00:00 UTC-0700');
        let timeBetween = oscarTime - startTime + 1000;
        let days = Math.floor(timeBetween / 1000 / 60 / 60 / 24);
        let hours = Math.floor(timeBetween / 1000 / 60 / 60 % 24);
        let minutes = Math.floor(timeBetween / 1000 / 60 % 60);
        let seconds = Math.floor(timeBetween / 1000 % 60);

        return {timeBetween, days, hours, minutes, seconds};
    };

    const [countdown, setCountDown] = useState(timeLeft());

    useEffect(() => {
        const timeout = setTimeout(() => setCountDown(timeLeft()),1000);
        return () => clearTimeout(timeout);
    });

    return(
        <View style={styles.countdownView}>
            {countdown.days >= 1 ?
                <View style={styles.portionView}>
                    <Text style={styles.countdownNum}>{countdown.days}</Text>
                    <Text style={styles.countdownLabel}>DAYS</Text>
                </View>
                :
                <>
                </>
            }
            <View style={styles.portionView}>
                <Text style={styles.countdownNum}>{countdown.hours}</Text>
                <Text style={styles.countdownLabel}>HOURS</Text>
            </View>
            <View style={styles.portionView}>
                <Text style={styles.countdownNum}>{countdown.minutes}</Text>
                <Text style={styles.countdownLabel}>MINUTES</Text>
            </View>
            {countdown.days < 1 ? 
            <View style={styles.portionView}>
                <Text style={styles.countdownNum}>{countdown.seconds}</Text>
                <Text style={styles.countdownLabel}>SECONDS</Text>
            </View>
            :
            <>
            </>}
        </View>
    );
};

const styles = StyleSheet.create({
    countdownView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: 50,
        paddingRight: 50
    },
    portionView: {
        alignItems: 'center'
    },
    countdownNum: {
        fontSize: 25,
        color: 'rgb(155, 144, 96)'
    },
    countdownLabel: {
        fontSize: 12,
        color: 'rgb(155, 144, 96)'
    }
});

export default Countdown;