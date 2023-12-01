import React from 'react';
import './component.css';

const Header = ({ username, onLogout }) => {
  return (
    <div className="index-header">
      <div className="header-logo">
        <img src="SalveoLogoMini.png" alt="TYM Logo" />
      </div>
      <div className="user-info">
        Zkdlinied {username}
        <div className="logout-dropdown" onClick={onLogout}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Header;