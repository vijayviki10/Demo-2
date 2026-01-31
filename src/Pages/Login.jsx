import React, { useContext, useState } from "react";
import "./LoginPage.css";
import GoogleIcon from "@mui/icons-material/Google";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import TextField from "@mui/material/TextField";
import { LoginContext } from "./LoginContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setLoggedIn } = useContext(LoginContext);

  function Clicksign() {
    if (email === "vijayvignesh910@gmail.com" && password === "12345678") {
      localStorage.setItem("isLoggedin", true);
      setLoggedIn(true);
    } else {
      alert("Wrong");
    }
  }

  function onChange(event) {
    if (event.target.type === "password") {
      setPassword(event.target.value);
    } else {
      setEmail(event.target.value);
    }

    console.log(email, password);
  }

  return (
    <div className="login-container">
      <h2>
        <CheckroomIcon style={{ fontSize: 40, marginRight: 8 }}/>
        JUNGLE BOX LOGIN
      </h2>

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={onChange}
      />

      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={onChange}
      />

      <button className="login-btn" onClick={Clicksign}>
        Login
      </button>

      <div className="divider">or continue with</div>

      <div className="glow-box fb-glow">
        <button className="social-btn fb">
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
            alt="Facebook"
          />
          Continue with Facebook
        </button>
      </div>

      <div className="glow-box google-glow">
        <button className="social-btn google">
          <GoogleIcon sx={{ color: "#4285F4" }} />
          Continue with Google
        </button>
      </div>

      <div className="glow-box apple-glow">
        <button className="social-btn apple">
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apple.svg"
            alt="Apple"
          />
          Continue with Apple
        </button>
      </div>
    </div>
  );
}

export default LoginForm;

