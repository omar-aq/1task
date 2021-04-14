import React from "react";

// material ui
import { makeStyles } from "@material-ui/core";

import Pic from "../main.png";

const useStyles = makeStyles((theme) => ({
  imgSection: {
    marginRight: "auto",
    marginLeft: "auto",
    boxSizing: "border-box",
    padding: "10px 15px 20px",
  },
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    paddingLeft: "15px",
    paddingRight: "15px",
    boxSizing: "borderBox",
  },
  imgContainer: {
    width: "100%",
    paddingTop: "15px",
  },
  textContainer: {
    textAlign: "center",
    paddingTop: "5px",
    color: "#4f5864",
    fontSize: "1.1rem",
    fontWeight: "bold",
    lineHeight: "1.3",
  },
  textColor: {
    color: "#01b2ee",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.imgSection}>
      <a href="#">
        <img src={Pic} alt="main" className={classes.imgContainer} />
      </a>
      <div
        className={classes.textContainer}
        style={{ padding: "none", margin: "none" }}
      >
        <p>
          <span className={classes.textColor}>
            <a href="#">Sign in</a>
          </span>{" "}
          and purchase any deal on site to be in the draw to win your share of
          our prize pool worth over $10,000!{" "}
          <span className={classes.textColor}>
            <a href="#"> T's & c's apply.</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
