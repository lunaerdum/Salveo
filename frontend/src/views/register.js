import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import './style.css';
import { NavLink } from 'react-router-dom';

const Register = () => {

  const [inpval, setInpval] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: ""

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

  const addUserdata = (e) => {
    e.preventDefault();

    const { username, email, password, cpassword } = inpval;

    if (username === "") {
      alert("Please enter your username!");
    } else if (email === "") {
      alert("Please enter your email!");
    } else if (!email.includes("@")) {
      alert("Make sure to use a valid email!");
    } else if (password === "") {
      alert("Please enter your password!");
    } else if (password.length < 8) {
      alert("Passwords must be at least 8 characters in length!");
    } else if (password !== cpassword) {
      alert("Passwords aren't matching, please check!");
    } else {
      console.log("User registration successfully done!");
    }
  };

  return (
    <>
      <section>
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
                Already have an account? <NavLink to="/">Login</NavLink></p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;