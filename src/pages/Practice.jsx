import { ThemeProvider } from "@emotion/react";
import {
  Android,
  Camera,
  Facebook,
  GitHub,
  Google,
  Menu,
  MoreVert,
} from "@mui/icons-material";
import {
  AppBar,
  Card,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  Container,
  createTheme,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Box,
  Drawer,
  Modal,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";
import React, { useState } from "react";

const CardComponent = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };

  return (
    <Grid item xs={4}>
      <Card elevation={3} sx={{ flexBasis: 350, mb: 2 }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "#455954" }}>J</Avatar>}
          action={
            <IconButton onClick={openModal}>
              <MoreVert />
            </IconButton>
          }
          title="Penetration Testing Course"
          subheader="October 28, 2023"
        />
        <Modal open={modal} onClose={openModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
        <CardMedia
          height="194"
          image="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhacker&psig=AOvVaw18L2F9WQEoGe4ooVovxEvf&ust=1698821358190000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCJC8n-7Yn4IDFQAAAAAdAAAAABAE"
        />
        <CardContent>
          <Typography>
            If you wanna learn how to hack systems, please enroll to this
            course!
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const Practice = () => {
  const theme = createTheme({
    root: {
      flexGrow: 1,
    },
  });

  const [toggle, setToggle] = useState(false);

  const toggleDrawer = () => {
    setToggle(!toggle);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar
          position="fixed"
          sx={{ mb: 5, backgroundColor: "#9d7463", px: 20 }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton>
              <Menu onClick={toggleDrawer} sx={{ color: "white" }} />
              <Drawer anchor="left" open={toggle} onClose={toggleDrawer}>
                <List sx={{ width: 200 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <Android />
                    </ListItemIcon>
                    <ListItemText primary="Android" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <Facebook />
                    </ListItemIcon>
                    <ListItemText primary="Facebook" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <Google />
                    </ListItemIcon>
                    <ListItemText primary="Google" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <GitHub />
                    </ListItemIcon>
                    <ListItemText primary="GitHub" />
                  </ListItemButton>
                </List>
              </Drawer>
            </IconButton>
            <Box>
              <IconButton>
                <GitHub sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <Google sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <Facebook sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        <Container sx={{ mt: 11 }}>
          <Grid container spacing={2} flexGrow={1}>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Practice;
