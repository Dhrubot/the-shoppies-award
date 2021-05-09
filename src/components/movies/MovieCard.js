import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DefaultImg from "../../images/NoImage.jpg";
import {
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
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
  },
  cardHeader: {
    color: "white",
    backgroundColor: "rgba 0 0 0 0.1",
  },
  cardSubheader: {
      textAlign: 'center',
      fontWeight: 'bold'
  }
});

const MovieCard = ({ movie }) => {
  const classes = useStyles();

  // default movie poster
  const poster = movie?.Poster === "N/A" ? DefaultImg : movie.Poster;

  return (
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
            <Typography variant="body2" component="p" className={classes.cardSubheader}>
                  {movie.Year}
                </Typography>
          </CardContent>
        </CardActionArea>
      </CardActions>
  );
};

export default MovieCard;
