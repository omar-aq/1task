import React from "react";
//material-ui
import {
  makeStyles,
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
} from "@material-ui/core";
//icons
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import CategoryIcon from "@material-ui/icons/Category";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#fff",
  },
}));
const BottomNav = () => {
  const classes = useStyles();
  return (
    <>
      <Hidden mdUp>
        <div className={classes.container}>
          <BottomNavigation showLabels>
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Search" icon={<SearchIcon />} />
            <BottomNavigationAction
              label="Categories"
              icon={<CategoryIcon />}
            />
            <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
            <BottomNavigationAction
              label="Account"
              icon={<PersonOutlineRoundedIcon />}
            />
          </BottomNavigation>
        </div>
      </Hidden>
    </>
  );
};

export default BottomNav;
