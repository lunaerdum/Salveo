import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import './style.css';
import { NavLink } from 'react-router-dom';

const Register = () => {

  const [inpval, setInpval] = useState({

  })
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
            <input type="email" />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <EmailIcon />
            </span>
            <input type="email" />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <LockIcon />
            </span>
            <input type="password" />
            <label>Password</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <LockIcon />
            </span>
            <input type="password" />
            <label>Confirm Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> I have agreed to
              <a href="#"> all the terms and policies.</a>
            </label>
          </div>
          <button type="submit">Register</button>
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