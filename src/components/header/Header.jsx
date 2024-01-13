import React from "react";
import useStyles from "./header.style";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const { classes } = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            color={theme.palette.text.main}
            sx={{ flexGrow: 1 }}
          >
            MehrdadRD Fake-Shop
          </Typography>
          <IconButton size="large" aria-label="Profile">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
