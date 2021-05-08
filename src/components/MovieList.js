import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import MovieCard from "./MovieCard";

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
  }));

const MovieList = (props) => {
  const classes = useStyles();
  return (
        <Grid container spacing={1} className={classes.moviesListContainer}>
            {props.movies.map((movie, idx) => (
          <Grid item sm={12} md={6} key={idx}>
            <MovieCard movie={movie}/>
          </Grid>
      ))}
      </Grid>
  );
};

export default MovieList;
