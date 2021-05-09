import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import { Grid, CssBaseline, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Search from "./components/Search";
import AddNominationComponent from './components/AddNominationComponet'
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: red,
    secondary: {
      main: "#b9f6ca",
    },
  },
});

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  const [nominatedMovieList, setNominatedMovieList] = useState([]);

  useEffect(() => {
    getMovies(searchValue, page);
  },[searchValue, page]);

  const getMovies = (searchValue, page) => {
    if (searchValue === "") {
      setMovies([]);
    }

    const BASE_URL = "https://www.omdbapi.com/?&type=movie&apikey=a48618b7";

    searchValue.length && searchValue.length < 3
      ? fetch(`${BASE_URL}&t=${searchValue}`)
          .then((response) => response.json())
          .then((jsonResponse) => {
            const movies = [jsonResponse]
            setMovies(movies);
            setTotalResult(movies.length);
          })
          .catch((e) => {
            console.log(e);
          })
      : fetch(`${BASE_URL}&s=${searchValue}&page=${page}`)
          .then((response) => response.json())
          .then((jsonResponse) => {
            if (jsonResponse.Response === "True") {
              setMovies(jsonResponse.Search);
              setTotalResult(jsonResponse.totalResults);
            }
          });
  };


  const handlePageChange = (event, value) => {
    setPage(value);
    getMovies(searchValue, page);
  };

  const addNomination = movie => {
    const newNominationList = [...nominatedMovieList, movie];
    setNominatedMovieList(newNominationList);
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
          <Search search={setSearchValue} value={searchValue} />
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={8} xl={8}>
          <MovieList
            movies={movies}
            header="Movies"
            page={page}
            handlePageChange={handlePageChange}
            totalResult={totalResult}
            handleAddNomination={addNomination}
            nominationComponent={AddNominationComponent}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          UserList
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
