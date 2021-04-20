import React from 'react';
import {View, StyleSheet} from 'react-native'
import Countdown from './Components/Countdown';
import Header from './Components/Header'

const App = () => {
  return (
    <View style={styles.appView}>
      <Header />
      <Countdown />
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
