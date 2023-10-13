import { Box, Button, Container, Grid, TextField } from "@mui/material";
import React from "react";

const Login = () => {
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
          >
            Login with Google
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
