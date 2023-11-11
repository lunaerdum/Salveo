import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import './style.css';

const RegisterComponent = () => {
  return (
    <div>
      <div className="blob"></div>
      <div className="wrapper">
        <form action="#">
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
          <div className="input-box">
            <span className="icon">
              <LockIcon />
            </span>
            <input type="password" />
            <label>Confirm Password</label>
          </div>
          <button type="submit">Register</button>
          <div className="register-link">
            <p>Already have an account? <a href="#">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;