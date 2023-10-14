import { Alert, Box, Button, Container, Grid, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("success");
  const submit = async () => {
    console.log(name, email, password, repassword);
    if (password !== repassword) {
      setShowAlert(true);
      setMessage("Password doesn't match with Re-Password");
      setColor("error");
    } else if (password.length <= 5) {
      setShowAlert(true);
      setMessage("Password lenght should be more than 5");
      setColor("error");
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        setShowAlert(true);
        setMessage("Successfully signedUp Redirecting ...");
        setColor("success");
      } catch (error) {
        setShowAlert(true);
        setMessage("Something went wrong Signup unsuccessful");
        setColor("error");
      }
    }
  };
  return (
    <Container
      disableGutters
      maxWidth="sm"
      sx={{
        marginTop: "50px",
        background: "blue",
        borderRadius: "10px",
        opacity: "0.80",
      }}
    >
      {showAlert && (
        <Alert
          severity={color}
          onClose={() => setShowAlert(false)}
          sx={{ position: "absolute", top: "12%", left: "36%" }}
        >
          {message}
        </Alert>
      )}
      <Grid
        container
        rowSpacing={1}
        direction={"column"}
        alignItems="center"
        sx={{
          background: "white",
          borderRadius: "10px",
          padding: "40px",
          opacity: "0.80",
        }}
      >
        <Grid item xs={12} container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              background: "green",
              width: "100%",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <h1>SIGNUP</h1>
          </Box>
        </Grid>
        <Grid item xs={12} container>
          <TextField
            variant="filled"
            label="Name"
            color="warning"
            fullWidth
            sx={{
              background: "white",
              border: "2px solid white",
              borderRadius: "5px",
            }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={6} container>
          <TextField
            variant="filled"
            label="Email"
            color="warning"
            fullWidth
            sx={{
              background: "white",
              border: "2px solid white",
              borderRadius: "5px",
            }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} container>
          <TextField
            variant="filled"
            color="warning"
            label="Password"
            sx={{
              background: "white",
              border: "2px solid white",
              borderRadius: "5px",
            }}
            type="password"
            fullWidth
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} container>
          <TextField
            variant="filled"
            color="warning"
            label="Re-Enter Password"
            sx={{
              background: "white",
              border: "2px solid white",
              borderRadius: "5px",
            }}
            type="password"
            fullWidth
            onChange={(e) => {
              setRepassword(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} container>
          <Button
            fullWidth
            sx={{
              color: "white",
              border: "2px solid white",
              borderRadius: "5px",
              background: "blue",
              borderRadius: "10px",
              "&:hover": {
                background: "green",
              },
            }}
            onClick={submit}
          >
            SIGNUP
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;
