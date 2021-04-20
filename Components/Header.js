import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
    return(
        <View style={styles.headerView}>
            <Text style={styles.headerText}>OSCARS Checklist</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerView: {
        alignItems: 'center'
    },
    headerText: {
        fontSize: 30,
        color: 'rgb(155, 144, 96)'
    }
});

export default Header;