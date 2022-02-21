import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { app } from "../../../fire.config";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  let navigate = useNavigate();
  let id = sessionStorage.getItem("id");
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const handleChange = (e) => {
    let isValid;
    if (e.target.name === "name") {
      isValid = true;
    }
    if (e.target.name === "lastName") {
      isValid = true;
    }
    if (e.target.name === "email") {
      isValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      isValid =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
          e.target.value
        );
    }
    if (e.target.name === "confirmPass") {
      isValid =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
          e.target.value
        );
    }

    if (isValid) {
      let newValidation = { ...user };
      newValidation[e.target.name] = e.target.value;
      setUser(newValidation);
    } else {
      toast("invalid input");
    }
  };

  const handleSignUp = () => {
    if (
      user.name &&
      user.email &&
      user.password &&
      user.password === user.confirmPass
    ) {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          // Signed in
          navigate("/booking/3");
          sessionStorage.setItem(
            "access token",
            user._tokenResponse.refreshToken
          );
          sessionStorage.setItem("user", firstName);
          updateProfile(auth.currentUser, {
            displayName: firstName,
          });
          if (id) {
            navigate("/booking/" + id);
          } else {
            navigate("/");
          }
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    } else {
      toast("invalid email or password");
    }
  };

  const handleLogIn = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        // Signed in
        sessionStorage.setItem(
          "access token",
          user._tokenResponse.refreshToken
        );
        sessionStorage.setItem("user", user.user.displayName);
        if (id) {
          navigate("/booking/" + id);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        toast("invalid email or password");
      });
  };
  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              handleLogIn={handleLogIn}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              setFirstName={setFirstName}
              setLastName={setLastName}
              setEmail={setEmail}
              setPassword={setPassword}
              setConfirmPass={setConfirmPass}
              handleSignUp={handleSignUp}
              handleChange={handleChange}
            />
          }
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Form;
