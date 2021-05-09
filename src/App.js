import React, { useState, useEffect } from "react";
import MovieList from "./components/movies/MovieList";
import { Grid, CssBaseline, createMuiTheme } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Search from "./components/search/Search";
import AddNominationComponent from './components/movies/nominations/AddNominationButton'
import RemoveNominationButton from './components/movies/nominations/RemoveNominationButton'
import { useSnackbar } from "notistack";
import { Header } from "./layouts/Header";
import Footer from "./layouts/Footer"

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: "#1a1f36",
      paper: '#272b3a'
    },
    text: {
      primary: '#a2b2c4'
    }
  }
});

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  const [nominatedMovieList, setNominatedMovieList] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    getMovies(searchValue, page);
  },[searchValue, page]);

  const saveToLocalStorage = (movies) => {
    localStorage.setItem("nominatedMovies", JSON.stringify(movies));
  }

  useEffect(() => {
    const savedNominations = JSON.parse(localStorage.getItem('nominatedMovies'));
    setNominatedMovieList(savedNominations);
  }, [])

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
    const errorMessage = "Remove movies from nomination list to add new nominations";
    const successMessage = "Great choices! You have reached the maximum 5 nominations";

    if ( nominatedMovieList.length < 5 ) {
      setNominatedMovieList(newNominationList)
      saveToLocalStorage(newNominationList)
    } 
    if (nominatedMovieList.length === 4) {
      enqueueSnackbar(successMessage, { variant: "success" }) 
    }  else if (nominatedMovieList.length === 5) {
      enqueueSnackbar(errorMessage, { variant: "error" }) 
    }
  };

  const removeNomination = movie => {
    const newNominationList = nominatedMovieList.filter(nominatedMovie => nominatedMovie.imdbID !== movie.imdbID);
    setNominatedMovieList(newNominationList);
    saveToLocalStorage(newNominationList)

  }

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
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
            handleNominationClick={addNomination}
            nominationComponent={AddNominationComponent}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <MovieList
            movies={nominatedMovieList}
            header="Nomination List"
            handlePageChange={handlePageChange}
            handleNominationClick={removeNomination}
            nominationComponent={RemoveNominationButton}
            nominatedMoviesCount={nominatedMovieList.length}
          />
        </Grid>
      </Grid>
      <Footer />
    </MuiThemeProvider>
  );
};

export default App;
