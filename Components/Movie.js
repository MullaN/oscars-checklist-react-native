import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Nominations from './Nominations'

const Movie = ({movie}) => {
    const [clicked, setClicked] = useState(false)

    return (
        <TouchableOpacity onPress={() => setClicked(!clicked)}>
            <View style={styles.movieView}>
                <Text style={styles.movieText}>{movie ? movie.title : 'undef'}</Text>
            </View>
            {clicked ? <Nominations nominations={movie.nominations} /> : <></>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    movieView:{
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center'
    },
    movieText: {
        paddingLeft: 5,
        fontSize: 20
    }
})

export default Movie;
