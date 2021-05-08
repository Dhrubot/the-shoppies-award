import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
});

const MovieList = (props) => {
  const classes = useStyles();
  return (
      <>
      {props.movies.map((movie, index) => (
        <Grid item key={index}>
          <Card raised={true} className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={movie.Title}
                image={movie.Poster}
                title={movie.Title}
                className={classes.cardMedia}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {movie.Title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {movie.Year}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                NOMINATE
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default MovieList;
