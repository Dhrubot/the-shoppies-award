import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import MovieCard from "./MovieCard";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

const MovieList = (props) => {
  const classes = useStyles();
  return (
        <Grid container spacing={1}>
            {props.movies.map((movie, idx) => (
          <Grid item sm={12} md={6} key={idx}>
            <MovieCard movie={movie}/>
          </Grid>
      ))}
      </Grid>
  );
};

export default MovieList;
