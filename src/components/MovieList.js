import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Card, CardContent } from "@material-ui/core";
import MovieCard from "./MovieCard";
import MovieListHeader from "./MovieListHeader";
import Pagination from "@material-ui/lab/Pagination";
import { SnackbarProvider } from "notistack";

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
    alignItems: "center",
  },
  card: {
    width: 250,
    height: 400,
    margin: "auto",
    // backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  nominationCount: {
    fontWeight: "bold"
  }
}));

const MovieList = ({
  movies,
  header,
  page,
  handlePageChange,
  totalResult,
  nominationComponent,
  handleNominationClick,
  nominatedMoviesCount,
}) => {
  const classes = useStyles();
  const NominationComponet = nominationComponent;
  const pagination = movies?.length ? (
    <Pagination
      style={{ marginBottom: "10px" }}
      page={page}
      count={Math.ceil(totalResult / 10)}
      onChange={handlePageChange}
    />
  ) : (
    ""
  );

  return (
    <SnackbarProvider>
    <Box className={classes.rootContainer}>
      <MovieListHeader header={header} />
      {header === "Nomination List" && nominatedMoviesCount > 0 && <Box className={classes.nominationCount}>{nominatedMoviesCount}/5</Box>}
      <Grid container spacing={1} className={classes.moviesListContainer}>
        {movies.map((movie, idx) => (
          <Grid item key={idx}>
            <Card className={classes.card}>
              <MovieCard movie={movie} />
              <CardContent onClick={() => handleNominationClick(movie)}>
                <NominationComponet />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {header === "movies" && <Grid style={{ margin: 14 }}>{pagination}</Grid>}
    </Box>
    </SnackbarProvider>
  );
};

export default MovieList;
