import { Button, TextField } from "@mui/material";
import React from "react";
import CountrySelect from "../Components/Countryauto";
import Signup from "./Signup";
import { inputLabelClasses } from "@mui/material/InputLabel";
import "./Login.css";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let navigate = useNavigate();
  const handleLogin = async () => {
    let obj = {
      email: email,
      password: password,
    };
    let res = await fetch("http://localhost:6001/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(obj),
    });
    if (res.ok) {
      navigate("/");
    } else {
      alert("Kindly fill correct email and password");
    }
  };

  return (
    <div>
      <div id="login">
        <h1 style={{ color: "white" }}>Log In</h1>

        <TextField
          fullWidth
          id="outlined-basic"
          variant="filled"
          label="Email"
          type={"email"}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          InputLabelProps={{
            sx: {
              // set the color of the label when not shrinked
              color: "white",
              [`&.${inputLabelClasses.shrink}`]: {
                // set the color of the label when shrinked (usually when the TextField is focused)
                color: "#FF9398",
              },
            },
          }}
        />
        <br />
        <br />
        <TextField
          fullWidth
          id="outlined-basic"
          variant="filled"
          label="Password"
          type={"password"}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          InputLabelProps={{
            sx: {
              // set the color of the label when not shrinked
              color: "white",
              [`&.${inputLabelClasses.shrink}`]: {
                // set the color of the label when shrinked (usually when the TextField is focused)
                color: "#FF9398",
              },
            },
          }}
        />
        <br />
        <br />
        <p>
          Dont have an account? <Link to={"/signup"}>Sign Up</Link>
        </p>
        <Button onClick={handleLogin} id="sigup_button" variant="outlined">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
