import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import MovieCard from "./MovieCard";
import MovieListHeader from "./MovieListHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  moviesListContainer: {
    minHeight: "40vh",
    maxHeight: "100vh",
    overflow: "auto",
    margin: 20,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
  },
}));

const MovieList = ({ movies, header }) => {
  const classes = useStyles();
  return (
    <Box className={classes.rootContainer}>
      <MovieListHeader header={header} />
      <Grid container spacing={1} className={classes.moviesListContainer}>
        {movies.map((movie, idx) => (
          <Grid item key={idx}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieList;
