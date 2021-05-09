import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  input: {
    borderRadius: "20px",
    height: "40px",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    border: "2px solid #dadada;",
    width: "100%",
    color: "white",
    outline: "none",
    fontSize: 20,
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  containerCard: {
    width: "50%",
    minWidth: "200px",
    backgroundColor: "rgba(48, 48, 48, 0.1)",
    border: "none",
    boxShadow: "none",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
}));

const Search = ({ search }) => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
    search(searchValue);
  }
  

  return (
      <Card className={classes.containerCard}>
        <form style={{ width: "100%" }}>
          <Input
            className={classes.input}
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchInputChanges}
            disableUnderline
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </form>
      </Card>
  );
};

export default Search;