import React from "react";
// material ui
import {
  makeStyles,
  Typography,
  InputBase,
  Button,
  ButtonGroup,
  Hidden,
} from "@material-ui/core";
//icons
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";

const useStyles = makeStyles((theme) => ({
  contactSection: {
    padding: "0 15px",
  },
  container: {
    display: "flex",
    justifyItems: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: "25px 0 0 0",
    padding: "38px 45px",
    backgroundColor: "#fff",
    boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 2px 0 rgba(0, 0, 0, 0.19)",
  },
  subText: {
    color: "#01b2ee",
    fontSize: "24px",
    fontWeight: "700",
    paddingRight: "10px",
    marginRight: "12px",
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

const Sub = () => {
  const classes = useStyles();
  return (
    <div className={classes.contactSection}>
      <div className={classes.container}>
        <Hidden mdDown>
          <Typography className={classes.subText}>
            Get the best deals delivered direct to your inbox each day
          </Typography>
        </Hidden>
        <ButtonGroup style={{ width: "500px" }}>
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
      </div>
    </div>
  );
};

export default Sub;
