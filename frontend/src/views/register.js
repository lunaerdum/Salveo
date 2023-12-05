import React, { useState, useEffect } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import './style.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [inpval, setInpval] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const [alertMessage, setAlertMessage] = useState(null);

  const setVal = (e) => {
    const { name, value } = e.target;
    setInpval(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => {
      setAlertMessage(null);
    }, 3000);
  };

  const addUserdata = async (e) => {
    e.preventDefault();

    try {
      const { username, email, password, cpassword } = inpval;

      console.log("Submitting form...");

      if (username === "") {
        showAlert("Please enter your username!");
      } else if (email === "") {
        showAlert("Please enter your email!");
      } else if (!email.includes("@")) {
        showAlert("Make sure to use a valid email!");
      } else if (password === "") {
        showAlert("Please enter your password!");
      } else if (password.length < 8) {
        showAlert("Passwords must be at least 8 characters in length!");
      } else if (password !== cpassword) {
        showAlert("Passwords aren't matching, please check!");
      } else {
        const data = await fetch("/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username, email, password, cpassword
          })
        });

        if (!data.ok) {
          const errorResponse = await data.json();
          console.log("Registration failed:", errorResponse);
          showAlert(`${errorResponse.error}`);
        } else {
          const res = await data.json();
          console.log("Response:", res);

          if (res._id) {
            console.log("User Registration Done!");
            showAlert("Welcome to Salveo!");
            setTimeout(() => {
              navigate('/login');
            }, 3000);
          } else {
            console.log("Unexpected response:", res);
          }
        }
      }
    } catch (error) {
      console.error("Error in addUserdata:", error);
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
              <img src="SalveoLogoMini.png" alt="Salveo Logo" />
            </div>
          </div>
          <div className="input-box">
            <span className="icon">
              <EmailIcon />
            </span>
            <input type="text" onChange={setVal} value={inpval.username} name="username" className="input-field" id="username" placeholder="Enter your username" />
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
          <div className="input-box">
            <span className="icon">
              <LockIcon />
            </span>
            <input type="password" onChange={setVal} value={inpval.cpassword} name="cpassword" className="input-field" id="cpassword" placeholder="Re-enter your password" />
          </div>
          <div className="term">
            <label>
              <input type="checkbox" /> I have agreed to
              <a href="#"> all the terms and policies.</a>
            </label>
          </div>
          <button className="button" onClick={addUserdata}>Register</button>
          <div className="register-link">
            <p>
              Already have an account? <NavLink to="/login">Login</NavLink></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
