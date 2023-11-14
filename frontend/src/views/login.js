import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import './style.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
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
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
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