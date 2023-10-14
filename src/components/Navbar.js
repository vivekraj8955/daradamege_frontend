import React, { useContext } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GlobalUser } from "../App";
import { deepOrange } from "@mui/material/colors";
import { auth } from "../FireBase";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser, logoName } = useContext(GlobalUser);
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
          {!user && (
            <>
              <Button
                variant="contained"
                color="success"
                sx={{ m: 2, borderRadius: "15px" }}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="success"
                sx={{ m: 2, borderRadius: "15px" }}
                onClick={() => navigate("/signup")}
              >
                Signup
              </Button>
            </>
          )}
          {user && (
            <>
              <Avatar sx={{ bgcolor: deepOrange[300] }}>{logoName}</Avatar>
              <Button
                variant="contained"
                color="error"
                sx={{ m: 2, borderRadius: "15px" }}
                onClick={async () => {
                  setUser(false);
                  navigate("/");
                  await signOut(auth);
                }}
              >
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
