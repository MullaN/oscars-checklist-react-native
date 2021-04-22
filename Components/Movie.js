import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Nominations from './Nominations'

const Movie = ({movie}) => {
    const [clicked, setClicked] = useState(false)

    return (
        <>
            <View style={styles.movieView}>
                <CheckBox onPress={(event) => event.stopPropagation()} boxType='square'/>
                <TouchableOpacity onPress={() => setClicked(!clicked)}>
                <Text style={styles.movieText}>{movie ? movie.title : 'undef'}</Text>
                </TouchableOpacity>
            </View>
            {clicked ? <Nominations nominations={movie.nominations} /> : <></>}
        </>
    );
};

const styles = StyleSheet.create({
    movieView:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        width: 360
    },
    movieText: {
        paddingLeft: 20,
        fontSize: 20
    }
})

export default Movie;
