import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DefaultImg from "../images/NoImage.jpg";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    width: 250,
    height: 400,
    margin: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  cardMedia: {
    width: "100%",
    height: 250,
    display: "block",
    paddingTop: "56.25%",
    // marginTop: "10px",
  },
  cardHeader: {
    color: "white",
    backgroundColor: "rgba 0 0 0 0.1",
  },
});

const MovieCard = ({ movie, nominateMovie, nominatedMovies }) => {
  const classes = useStyles();

  // default movie poster
  const poster = movie?.Poster === "N/A" ? DefaultImg : movie.Poster;

  return (
    <Card className={classes.card} key={movie.imdbID}>
      <CardActions >
        <CardActionArea>
          <CardMedia className={classes.cardMedia} image={poster} />
          <CardContent>
            <Typography
              style={{ fontWeight: "bold" }}
              align="center"
              noWrap={true}
            >
              {movie.Title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </CardActions>
      <CardContent>
        <Button
          fullWidth
          variant="contained"
          style={{ color: "red" }}
        >
          NOMINATE
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;