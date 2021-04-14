import React from "react";
//material-ui
import {
  makeStyles,
  Button,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
//icons
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { collections } from "../data";

const useStyles = makeStyles((theme) => ({
  contactSection: {
    padding: "15px 15px 0 15px",
  },
  head: {
    display: "flex",
    margin: "15px 0 20px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    display: "inline-block",
    verticalAlign: "middle",
    color: "#4f5864",
    marginRight: "15px",
    "&:hover": {
      color: "#01b2ee",
    },
  },
  FeaturedButton: {
    backgroundColor: "#01b2ee",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1eb3ec",
    },
  },
}));
const Featured = () => {
  const classes = useStyles();
  return (
    <div className={classes.contactSection}>
      <div className={classes.head}>
        <a className={classes.title} href="#">
          Collections
        </a>
        <Button className={classes.FeaturedButton} variant="contained">
          View More <ChevronRightIcon />
        </Button>
      </div>
      <Grid container spacing={2} justify="center">
        {collections.map((item) => {
          const { id, url, title, info } = item;
          return (
            <Grid item xs={12} sm={5} md={4} lg={3} key={id}>
              <Card style={{ margin: "10px 0 10px 0" }}>
                <CardMedia>
                  <img width="100%" src={url} alt="shh" />
                </CardMedia>
                <CardContent>
                  <Grid
                    container
                    direction="column"
                    style={{ textAlign: "center" }}
                  >
                    <Grid item>
                      <Typography
                        gutterBottom
                        variant="h6"
                        style={{ color: "#4f5864" }}
                      >
                        {title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body2"
                        style={{ color: "#01b2ee" }}
                        component="p"
                      >
                        {info}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        color="primary"
                        style={{ marginTop: "10px" }}
                      >
                        View Collection <ChevronRightIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Featured;
