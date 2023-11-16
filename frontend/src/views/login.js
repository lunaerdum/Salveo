import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import './style.css';
import { NavLink } from 'react-router-dom';

const Login = () => {

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const setVal = (e) => {
    //console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  };

  const loginUser = (e) => {
    e.preventDefault();

    const { email, password } = inpval;

    if (email === "") {
      alert("Please enter your email!");
    } else if (!email.includes("@")) {
      alert("Make sure to use a valid email!");
    } else if (password === "") {
      alert("Please enter your password!");
    } else if (password.length < 8) {
      alert("Passwords must be at least 8 characters in length!");
    } else {
      console.log("User logged successfully done!");
    }
  };

  return (
    <div>
      <div className="blob"></div>
      <div className="wrapper">
        <form action="">
          <div className="header">
            <div className="logo">
              <img src="TYMLogoMini.png" alt="TYM Logo" />
            </div>
          </div>
          <div className="input-box">
            <span className="icon">
              <EmailIcon />
            </span>
            <input type="email" onChange={setVal} value={inpval.email} name="email" className="input-field" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-box">
            <span className="icon">
              <LockIcon />
            </span>
            <input type="password" onChange={setVal} value={inpval.password} name="password" className="input-field" id="password" placeholder="Enter your password" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button className="button" onClick={loginUser}>Login</button>
          <div className="social-media">
            <div className="loginButton facebook">
              <img src="facebook.png" alt="facebook" className="icon" />
              Facebook
            </div>
            <div className="loginButton google">
              <img src="google.png" alt="google" className="icon" />
              Google
            </div>
          </div>
          <div className="register-link">
            <p>
              Don't have an account? <NavLink to="/Register">Register</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;