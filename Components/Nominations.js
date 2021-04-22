import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Nominations = ({ nominations }) => {
    return (
        <View>
            <FlatList data={nominations} renderItem={({item}) => <Nom nomination={item} /> }/>
        </View>
    );
};

const Nom = ({nomination}) => {
    return(
        <View>
            <Text>{nomination.category}</Text>
            <Text>{nomination.people}</Text>
        </View>
    )
};

export default Nominations;