import { ThemeProvider } from "@emotion/react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  createTheme,
  Grid,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({});

const Header = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Roboto",
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          disableGutters
          sx={{ backgroundColor: "#362FD9" }}
        >
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#1AACAC",
                  },
                }}
              >
                <ArrowBack sx={{ color: "white" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#1AACAC",
                  },
                }}
              >
                <ArrowForward sx={{ color: "white" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <TextField
                label="Search"
                variant="outlined"
                sx={{
                  backgroundColor: "#FFF",
                  padding: 0,
                }}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
