import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import React from "react";
import useStyles from "./sideBar.style";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { classes } = useStyles();
  return (
    <Box variant="outlined" className={classes.root} sx={{ boxShadow: 5 }}>
      <List className={classes.list}>
        <ListItem disablePadding>
          <Link to={"/"} className={classes.link}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to={"/products"} className={classes.link}>
            <ListItemButton>
              <ListItemIcon>
                <StorefrontIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to={"/aboutMe"} className={classes.link}>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
