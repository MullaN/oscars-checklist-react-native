import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import Countdown from './Components/Countdown';
import Header from './Components/Header';
import Movie from './Components/Movie';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://oscars-checklist-backend.herokuapp.com/api/movies')
    .then(resp => resp.json())
    .then(moviesData => {
      let sortedMovies = moviesData.sort((a,b) => {
        let editedA = a.title.replace('The ','')
        let editedB = b.title.replace('The ','')
        if(editedA < editedB) { return -1; }
        if(editedA > editedB) { return 1; }
        return 0;
    })
      setMovies(sortedMovies)
    })
  },[]);

  return (
    <View style={styles.appView}>
      <Header />
      <Countdown />
      <FlatList data={movies} renderItem={({item}) => <Movie movie={item} />} style={styles.movieFlatList}/>
    </View>
  );
};

const styles = StyleSheet.create({
  appView: {
    flex: 1,
    backgroundColor: 'rgb(235, 226, 190)',
    paddingTop: 40
  },
  movieFlatList: {
    marginTop: 30,
    marginBottom: 30
  }
});

export default App;
