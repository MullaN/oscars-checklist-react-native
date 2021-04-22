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
                <Text style={styles.movieText} onPress={() => setClicked(!clicked)}>{movie ? movie.title : 'undef'}</Text>
            </View>
            {clicked ? <Nominations nominations={movie.nominations} /> : <></>}
        </>
    );
};

const styles = StyleSheet.create({
    movieView:{
        flexDirection: 'row',
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10
    },
    movieText: {
        paddingLeft: 20,
        fontSize: 20
    }
})

export default Movie;
