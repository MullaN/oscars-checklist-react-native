import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Movie = ({movie}) => {
    return (
        <TouchableOpacity>
            <View style={styles.movieView}>
                <Text>{movie ? movie.title : 'undef'}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    movieView:{
        height: 50
    }
})

export default Movie;
