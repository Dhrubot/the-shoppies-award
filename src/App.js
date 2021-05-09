import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import { Grid, CssBaseline, createMuiTheme  } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Search from './components/Search'
import red from '@material-ui/core/colors/red';


const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: red,
    secondary: {
      main: '#b9f6ca',
    },
  },
});

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=a48618b7";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

    const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    searchValue.length && searchValue.length < 3 ? 
    fetch(`https://www.omdbapi.com/?&type=movie&t=${searchValue}&apikey=a48618b7`) 
    .then(response => response.json())
    .then(jsonResponse => {
      setMovies([jsonResponse]);
      setLoading(false);
    })
    .catch(e => {
      setErrorMessage(e);
      setLoading(false);
    })
      :
    fetch(`https://www.omdbapi.com/?&type=movie&s=${searchValue}&apikey=a48618b7`) 
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  	};


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={1}>
      <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Search search={search}/>
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={8} xl={8}>
          <MovieList movies={movies} header='Movies' />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          UserList
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
