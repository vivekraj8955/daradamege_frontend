import { Alert, Box, Button, Container, Grid, TextField } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { auth } from "../FireBase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [color, setColor] = useState("success");
  const submit = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowAlert(true);
      setMessage("Login Successfully redirecting....");
    } catch (err) {
      setShowAlert(true);
      setColor("error");
      setMessage("Login failed Enter correct credentials");
    }
  };
  return (
    <Container
      disableGutters
      maxWidth="sm"
      sx={{
        marginTop: "100px",
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
            <h1>LOGIN</h1>
          </Box>
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
