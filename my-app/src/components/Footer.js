import React from "react";
// material ui
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  ButtonGroup,
  InputBase,
  Hidden,
} from "@material-ui/core";
//icon
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
//data
import { footer } from "../data";
import Pic from "../foot.png";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    padding: "0 12px 20px 12px",
    backgroundColor: "#fff",
    boxShadow: "0 0 8px 0 rgb(79 88 100 / 10%)",
    borderRadius: "5px",
    border: "1px solid #dce3ed",
  },
  footContainer: {
    margin: "auto",
    display: "flex",
    height: "60px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: " #fff",
  },
  itemContainer: {
    padding: "30px 5px 0 5px",
  },
  title: {
    fontSize: "14px",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#4f5864",
  },
  iconContainer: {
    display: "flex",
    marginBottom: "20px",
  },
  icon: {
    marginRight: "10px",
    color: " #4f5864",
    "&:hover": {
      color: "#01b2ee",
    },
  },
  downButton: {
    fontSize: "12px",
    height: "50px",
    backgroundColor: "#01b2ee",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1eb3ec",
    },
  },
  links: {
    color: "#4f5864",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.3",
    "&:hover": {
      color: "#1eb3ec",
    },
  },
  subInput: {
    height: "40px",
    fontSize: "15px",
    color: "#4f5864",
    boxShadow: "0 0 8px 0 rgb(79 88 100 / 10%)",
    borderRadius: "5px",
    border: "1px solid #dce3ed",
    width: "100%",
  },
  iconInput: {
    display: "flex",
    alignItems: "center",
    padding: "4px",
  },
  subButton: {
    backgroundColor: "#01b2ee",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1eb3ec",
    },
  },
}));

const Footer = () => {
  console.log(footer);
  const classes = useStyles();
  return (
    <>
      <Hidden lgUp>
        <div className={classes.container}>
          <Grid container direction="column" className={classes.itemContainer}>
            <Grid item>
              <Typography className={classes.title}>
                Newsletter Signup
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="p"
                style={{
                  color: "#4f5864",
                  fontSize: "1rem",
                  fontWeight: "400",
                }}
              >
                Sign up for our daily emails and we'll send you all the best
                deals, tailored for you.
              </Typography>
            </Grid>
            <Grid item style={{ paddingTop: "20px" }}>
              <ButtonGroup style={{ minWidth: "400px" }}>
                <div className={classes.subInput}>
                  <div className={classes.iconInput}>
                    <EmailOutlinedIcon style={{ color: "#92a2ad" }} />
                    <InputBase placeholder="Enter Email address"></InputBase>
                  </div>
                </div>
                <Button className={classes.subButton} variant="contained">
                  Subscribe
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </div>
      </Hidden>
      <div className={classes.container}>
        <Grid container direction="column" className={classes.itemContainer}>
          <Grid item>
            <Typography className={classes.title}>Follow us on</Typography>
          </Grid>
          <Grid item>
            <div className={classes.iconContainer}>
              <a href="#">
                <FacebookIcon className={classes.icon} />
              </a>
              <a href="#">
                <TwitterIcon className={classes.icon} />
              </a>
              <a href="#">
                <InstagramIcon className={classes.icon} />
              </a>
              <a href="#">
                <YouTubeIcon className={classes.icon} />
              </a>
            </div>
          </Grid>
          <Grid item>
            <Typography className={classes.title}>
              Get app exclusive deals
            </Typography>
          </Grid>
          <Grid item>
            <Button className={classes.downButton}>
              <PhoneIphoneIcon /> Download Our App
            </Button>
          </Grid>
        </Grid>
        {footer.map((block) => {
          return (
            <Grid
              container
              direction="column"
              className={classes.itemContainer}
              key={block.id}
            >
              {block.map((item) => {
                return (
                  <div key={item.id}>
                    <Grid item>
                      <Typography className={classes.title}>
                        {item.title}
                      </Typography>
                    </Grid>
                    <Grid item style={{ height: "15px" }}>
                      <a className={classes.links} href="#">
                        {item.text}
                      </a>
                    </Grid>
                  </div>
                );
              })}
            </Grid>
          );
        })}
        <Hidden mdDown>
          <Grid container direction="column" className={classes.itemContainer}>
            <Grid item>
              <Typography className={classes.title}>
                Newsletter Signup
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="p"
                style={{
                  color: "#4f5864",
                  fontSize: "1rem",
                  fontWeight: "400",
                }}
              >
                Sign up for our daily emails and we'll send you all the best
                deals, tailored for you.
              </Typography>
            </Grid>
            <Grid item style={{ paddingTop: "20px" }}>
              <ButtonGroup style={{ minWidth: "400px" }}>
                <div className={classes.subInput}>
                  <div className={classes.iconInput}>
                    <EmailOutlinedIcon style={{ color: "#92a2ad" }} />
                    <InputBase placeholder="Enter Email address"></InputBase>
                  </div>
                </div>
                <Button className={classes.subButton} variant="contained">
                  Subscribe
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Hidden>
      </div>
      <div className={classes.footContainer}>
        <a style={{ paddingRight: "10px", color: "#1eb3ec" }} href="#">
          Privacy Policy
        </a>
        <Typography style={{ paddingRight: "10px", color: "#4f5864" }}>
          &copy; 2021 GarbOne Limited
        </Typography>
        <img src={Pic} alt="logo" />
      </div>
    </>
  );
};

export default Footer;
