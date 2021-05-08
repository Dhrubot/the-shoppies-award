import React, { useState } from 'react'
import MovieList from './components/MovieList';
import { Grid } from "@material-ui/core"

const App = () => {
  const [movies, setmovies] = useState([
    {
      "Title": "Avatar",
      "Year": "2009",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg"
    },
    {
      "Title": "Avatar Spirits",
      "Year": "2010",
      "imdbID": "tt1900832",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzQ4MDMxNjExNl5BMl5BanBnXkFtZTgwOTYzODI5NTE@._V1_SX300.jpg"
    },
    {
      "Title": "Avatar: Creating the World of Pandora",
      "Year": "2010",
      "imdbID": "tt1599280",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjk4ZDAxN2MtYjhlNy00MzJhLWI1MGYtYjY5ZGJlY2YwMzNlXkEyXkFqcGdeQXVyNTc0NjY1ODk@._V1_SX300.jpg"
    },
    {
      "Title": "The King's Avatar: For the Glory",
      "Year": "2019",
      "imdbID": "tt10736726",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzFkZTMzOGUtOGM3NS00YzI2LTllMjgtODk0NDhkNWRiMTMzXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg"
    },
  ]);
  
  return (
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          SearchBar
        </Grid>
        <Grid item xs>
          <MovieList movies={movies}/>
        </Grid>
        <Grid item xs>
          UserList
        </Grid>
      </Grid>
  )
}

export default App
