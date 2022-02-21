import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Login = ({ handleLogIn, setEmail, setPassword }) => {
  return (
    <div>
      <Box>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            width: "60%",
          }}
        >
          <TextField
            id="sd-basic"
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="pasaess-basic"
            label="Password"
            variant="standard"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            onClick={handleLogIn}
            variant="contained"
            size="small"
            fullWidth
          >
            Create an account
          </Button>
        <p>or haven't an account? <Link to='/form/signup'>Create an account</Link></p>
        </div>
      </Box>
    </div>
  );
};

export default Login;
