import React, { useEffect } from "react";
import "./Main.css";
import { Button } from "@mui/material";
const Main = () => {
  // useEffect(() => {
  //   window.location.href = "http://localhost:3001";
  // }, []);

  return (
    <div className="homemain">
      <Button
        variant="contained"
        color="success"
        onClick={() => (window.location.href = "http://localhost:3001")}
        sx={{
          color: "white",
          height: "8vh",
          ":hover": {
            background: "red",
          },
          margin: "10px",
        }}
      >
        READY TO DETECT DAMAGE
      </Button>
    </div>
  );
};

export default Main;
