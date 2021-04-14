import React from "react";
// material ui
import {
  makeStyles,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Hidden,
} from "@material-ui/core";
//data
import { links, content } from "../data";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "15px 15px 0 15px",
  },
  hederItem: {
    width: "100%",
    fontSize: "28px",
    fontWeight: "700",
    backgroundColor: "#fff",
    borderBottom: "1px solid #dce3ed",
    borderRadius: "3px 3px 0 0",
    padding: "15px 20px",
    color: "#01b2ee",
  },
  item: {
    padding: "15px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    fontWeight: "500",
    color: "#4f5864",
    lineHeight: "1",
    transition: "all .15s ease-out",
    backgroundColor: "#fff",
    "&:hover": {
      color: "#01b2ee",
    },
    content: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "rgba(1, 178, 238, 0.9)",
      opacity: "0",
      transition: "all .15s ease-out",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));

const Content = () => {
  const classes = useStyles();
  console.log(links);
  return (
    <div className={classes.container}>
      <Grid container spacing={2} justify="space-between">
        <Hidden mdDown>
          <Grid item>
            <Typography variant="h4" className={classes.hederItem}>
              Discover
            </Typography>
            <Grid container direction="column">
              {links.map((link) => {
                const { id, text, number } = link;
                return (
                  <div item className={classes.item} key={id}>
                    <a href="#">{text}</a>
                    <Typography style={{ color: "#92a2ad", fontSize: "12px" }}>
                      {number}
                    </Typography>
                  </div>
                );
              })}
            </Grid>
          </Grid>
        </Hidden>
        {content.map((item) => {
          const { id, title, info, oldPrice, price, number, url } = item;
          return (
            <Grid item key={id} xs={12} sm={12} md={4}>
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
                        <Typography variant="p">${oldPrice}</Typography>
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

export default Content;
