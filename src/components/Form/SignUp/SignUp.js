import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = ({
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setConfirmPass,
  handleSignUp,
  handleChange
}) => {
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
            id="firstName-basic"
            label="First Name"
            variant="standard"
            color="secondary"
            name="name"
            onChange={(e) => setFirstName(e.target.value)}
            onBlur={handleChange}
            required
          />
          <TextField
            id="lastName-basic"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            variant="standard"
            name="lastName"
            onBlur={handleChange}
            required
          />
          <TextField
            id="email-basic"
            label="Email"
            variant="standard"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleChange}
            required
          />
          <TextField
            id="pass-basic"
            label="Password"
            variant="standard"
            name="password"
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handleChange}
            required
          />
          <TextField
            id="confirmpass-basic"
            label="Confirm Password"
            name="confirmPass"
            variant="standard"
            type='password'
            onBlur={handleChange}
            required

            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <Button onClick={handleSignUp} variant="contained" size="small" fullWidth>
            Create an account
          </Button>
        <p>or have an account? <Link to='/form/login'>Log in</Link></p>
        </div>

      </Box>
    </div>
  );
};

export default SignUp;
