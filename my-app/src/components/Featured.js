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
  Hidden,
} from "@material-ui/core";
//icons
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { feature } from "../data";

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
          Featured <Hidden smDown>Auckland deals</Hidden>
        </a>
        <Button className={classes.FeaturedButton} variant="contained">
          View More <ChevronRightIcon />
        </Button>
      </div>
      <Grid container spacing={2} justify="center">
        {feature.map((item) => {
          const { id, url, title, oldPrice, price, info, number } = item;
          return (
            <Grid item xs={12} sm={5} md={4} lg={3} key={id}>
              <Card>
                <CardMedia>
                  <img width="100%" src={url} alt="shh" />
                </CardMedia>
                <CardContent>
                  <Grid container direction="column">
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
                    <Grid container justify="flex-end">
                      <Grid item>
                        <Typography
                          variant="body2"
                          style={{
                            color: "#01b2ee",
                            fontSize: "0.8rem",
                            marginTop: "5px",
                          }}
                          component="p"
                        >
                          form
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container alignItems="flex-end">
                      <Grid item style={{ flexGrow: "1" }}>
                        <Typography variant="p" color="textSecondary">
                          {number} bought
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        style={{
                          marginRight: "5px",
                          textDecoration: "line-through",
                          color: "#727986",
                          fontSize: "14px",
                        }}
                      >
                        <Typography variant="p">{oldPrice}</Typography>
                      </Grid>
                      <Grid item style={{ color: "#01b2ee", fontSize: "35px" }}>
                        <Typography variant="p">${price}</Typography>
                      </Grid>
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
