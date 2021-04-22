import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Nominations = ({ nominations }) => {
    return (
        <View style={styles.nominationsView}>
            <FlatList data={nominations} renderItem={({item}) => <Nom nomination={item} key={item.category + '-' + item.people}/> }/>
        </View>
    );
};

const Nom = ({nomination}) => {
    return(
        <View>
            <Text style={styles.categoryText}>{nomination.category}</Text>
            <Text style={styles.peopleText}>{nomination.people}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    nominationsView:{
        backgroundColor: 'rgb(207, 193, 129)'
    },
    categoryText: {
        fontSize: 20
    },
    peopleText: {
        fontSize: 15,
        paddingBottom: 10
    }
})

export default Nominations;