import React from "react";
// material ui
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Hidden,
  MenuItem,
  Button,
  Menu,
} from "@material-ui/core";

//icons
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import SearchIcon from "@material-ui/icons/Search";

import logo from "../logo.png";

const useStyles = makeStyles((theme) => ({
  nav: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: "-1px",
  },
  items: {
    margin: "0 10px 0 10px",
    cursor: "pointer",
    display: "flex",
    boxShadow: "none",
    border: "none",
    background: "none",
    fontSize: "14px",
    lineHeight: "40px",
    verticalAlign: "middle",
    fontWeight: 500,
    padding: "0 5px",
    color: "#fff",
    marginBottom: 0,
    outline: "none",
  },
  secondaryItems: {
    paddingRight: "30px",
    paddingBottom: "10px",
    cursor: "pointer",
    display: "inline-block",
    whiteSpace: "nowrap",
    boxShadow: "none",
    border: "none",
    background: "none",
    lineHeight: "40px",
    fontWeight: 500,
    color: "#4F5864",
    outline: "none",
    "&:hover": {
      color: "#01b2ee",
    },
    searchInput: {
      display: "flex",
      height: "40px",
      padding: "0 15px 0 40px",
      fontSize: "15px",
      color: "#4f5864",
      boxShadow: "0 0 8px 0 rgb(79 88 100 / 10%)",
      borderRadius: "5px",
      border: "1px solid #dce3ed",
      width: "100%",
    },
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={classes.nav}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              GarbOne
            </Typography>
            <Button
              className={classes.items}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Auckland <RoomOutlinedIcon />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Auckland</MenuItem>
              <MenuItem onClick={handleClose}>Waikato</MenuItem>
              <MenuItem onClick={handleClose}>Wellington</MenuItem>
            </Menu>
            <Hidden smDown>
              <button className={classes.items}>
                <FavoriteBorderIcon />
              </button>
              <button className={classes.items}>
                <ShoppingCartOutlinedIcon />
              </button>
              <Button
                className={classes.items}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <PermIdentityOutlinedIcon />
                <ExpandMoreOutlinedIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
              <button className={classes.items}>
                <MailOutlineOutlinedIcon />
                <Typography>Subscribe</Typography>
              </button>
              <button
                className={classes.items}
                style={{ borderLeft: "1px solid", paddingLeft: "15px" }}
              >
                <img src={logo} alt="logo" />
              </button>
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
      {/* secondary navigation */}
      <Hidden smDown>
        <div className={classes.nav}>
          <AppBar position="static" color="inherit" style={{ height: "60px" }}>
            <Toolbar>
              <div className={classes.title}>
                <button className={classes.secondaryItems}>
                  <Typography style={{ display: "flex" }}>
                    Browse Categories <ExpandMoreOutlinedIcon color="primary" />
                  </Typography>
                </button>
                <Typography className={classes.secondaryItems}>
                  What's New
                </Typography>
                <Typography className={classes.secondaryItems}>
                  Trending
                </Typography>
                <Typography className={classes.secondaryItems}>
                  For You
                </Typography>
              </div>

              <div
                style={{
                  height: "40px",
                  fontSize: "15px",
                  color: "#4f5864",
                  boxShadow: "0 0 8px 0 rgb(79 88 100 / 10%)",
                  borderRadius: "5px",
                  border: "1px solid #dce3ed",
                  width: "40%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "4px",
                  }}
                >
                  <SearchIcon style={{ color: "#92a2ad" }} />
                  <InputBase placeholder="Search…"></InputBase>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </Hidden>
    </>
  );
};

export default Navigation;
