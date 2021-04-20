import React from 'react';
import {View, StyleSheet} from 'react-native'
import Header from './Components/Header'

const App = () => {
  return (
    <View style={styles.appView}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  appView: {
    flex: 1,
    backgroundColor: 'rgb(235, 226, 190)',
    paddingTop: 40
  }
});

export default App;
