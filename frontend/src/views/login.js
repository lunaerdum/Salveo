import React, { useEffect, useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { NavLink, useNavigate } from 'react-router-dom'; 
import './style.css';

const Login = () => {
  const navigate = useNavigate(); 
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const setVal = (e) => {
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  };

  const [alertMessage, setAlertMessage] = useState(null);

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => {
      setAlertMessage(null);
    }, 3000);
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = inpval;

    if (email === "") {
      showAlert("Please enter your email!");
    } else if (!email.includes("@")) {
      showAlert("Make sure to use a valid email!");
    } else if (password === "") {
      showAlert("Please enter your password!");
    } else {
      try {
        const data = await fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email, password
          })
        });

        const res = await data.json();
        if (res.success) {
          navigate('/index')
        } else {
          if (res.error === "Invalid email or password") {
            showAlert("Invalid email or password. Please check your credentials.");
          } else {
            showAlert("Login failed. Please try again.");
          }
        }
      } catch (error) {
        console.error("Login Error:", error);
        showAlert("Oops! Something went wrong. Please try again later.");
      }
    }
  };

  useEffect(() => {
    document.querySelector('.auth').classList.add('visible');
  }, []);

  return (
    <div className="auth">
      <div className="blob"></div>
      <div className="wrapper">
        {alertMessage && (
          <div className="custom-alert">
            <p>{alertMessage}</p>
          </div>
        )}
        <form action="">
          <div className="header">
            <div className="logo">
              <img src="SalveoLogoMini.png" alt="TYM Logo" />
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
              <input type="checkbox" />Remember me
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