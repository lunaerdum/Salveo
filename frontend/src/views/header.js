import React, { useState } from 'react';

const Header = () => {
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);

  const toggleLogoutMenu = () => {
    setShowLogoutMenu(!showLogoutMenu);
  };

  const logout = () => {
    // Implement your logout logic here
    alert("Logout clicked. Implement your logout logic here.");
  };

  return (
    <header style={headerStyle}>
      <div className="logo-container">
        <img className="logo" src="TYMLogoMini.png" alt="Logo" style={logoStyle} />
      </div>
      <div className="user-info" style={userInfoStyle}>
        <span id="username" style={usernameStyle}>Admin</span>
        <button onClick={toggleLogoutMenu} style={logoutButtonStyle}>Logout</button>
        {showLogoutMenu && (
          <div className="logout-menu" style={logoutMenuStyle}>
            <a href="#" onClick={logout} style={logoutLinkStyle}>Logout</a>
          </div>
        )}
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#fff',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const logoStyle = {
  maxWidth: '50px',
  maxHeight: '50px',
};

const userInfoStyle = {
  display: 'flex',
  alignItems: 'center',
};

const usernameStyle = {
  marginRight: '10px',
};

const logoutButtonStyle = {
  cursor: 'pointer',
};

const logoutMenuStyle = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50px',
  right: '10px',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  padding: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const logoutLinkStyle = {
  display: 'block',
  padding: '5px',
  textDecoration: 'none',
  color: '#333',
  cursor: 'pointer',
};

export default Header;