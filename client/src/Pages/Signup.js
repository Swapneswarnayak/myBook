import { Button, TextField } from "@mui/material";
import React from "react";
import "./Signup.css";
import CountrySelect from "../Components/Countryauto";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let [fname, setFname] = React.useState("");
  let [Lname, setLname] = React.useState("");
  let [occupation, setOccupation] = React.useState("");
  let [avatar, setAvatar] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [location, setLocation] = React.useState("");

  let navigate = useNavigate();
  const handleSignup = async () => {
    let obj = {
      firstName: fname,
      lastName: Lname,
      email: email,
      password: password,
      location: location,
      picturePath: avatar,
      occupation: occupation,
    };
    console.log(obj);
    let res = await fetch("http://localhost:6001/auth/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(obj),
    });
    if (res.ok) {
      navigate("/login");
    }
    console.log(res);
  };
  return (
    <div id="signup">
      <h1 style={{ color: "white" }}>Sign Up</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <TextField
          onChange={(event) => {
            setFname(event.target.value);
          }}
          fullWidth
          color="success"
          id="outlined-basic"
          variant="filled"
          label="First-Name"
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
        <TextField
          fullWidth
          onChange={(event) => {
            setLname(event.target.value);
          }}
          color="success"
          id="outlined-basic"
          variant="filled"
          label="Last-Name"
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
      </div>
      <br />

      <CountrySelect fn={setLocation} />
      <br />
      <TextField
        fullWidth
        id="outlined-basic"
        variant="filled"
        label="Occupation"
        onChange={(event) => {
          setOccupation(event.target.value);
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
        label="Avatar URL   "
        onChange={(event) => {
          setAvatar(event.target.value);
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
        label="Email"
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
      <Button onClick={handleSignup} id="sigup_button" variant="outlined">
        Sign Up
      </Button>
    </div>
  );
};

export default Signup;
