import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
const Navbar = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{ flexGrow: 1, background: "black", opacity: 0.7 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Dancing Script",
              color: "yellow",
              textShadow: "2px 2px 1px red",
            }}
          >
            CARDAMAGEDETECTOR
          </Typography>
          <Button
            variant="contained"
            color="success"
            sx={{ m: 2, borderRadius: "15px" }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{ m: 2, borderRadius: "15px" }}
          >
            Signup
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
