import Button from "@mui/material/Button";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import img from '../../Travelguru.png';
const Navbar = () => {
  let accessToken = sessionStorage.getItem("access token");
  let user = sessionStorage.getItem("user");
  let navigate = useNavigate();
  const handleLogOut = () => {
    sessionStorage.removeItem("access token");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("id");
    navigate("/form/login");
  };

  return (
    <div style={{
      background:'#202124',
    }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          margin:'auto',
          zIndex:'40',
          padding:'1rem'
        }}
      >
        <div>
          <Link to="/">
            <img src={img} alt="" />
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width:'20%'
          }}
        >
          <div>
            <h4 style={{
              textTransform:'uppercase',
              color:'#ffeb3b'
            }}>{user}</h4>
          </div>
          <div>
            {accessToken ? (
              <Button style={{background:'#35363A'}} variant="contained" onClick={handleLogOut}>LogOut</Button>
            ) : (
             
                <Link to="/form/login" style={{textDecoration:'none'}}> <Button style={{background:'#35363A' }} variant="contained" >
                  Log In
                  </Button></Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
