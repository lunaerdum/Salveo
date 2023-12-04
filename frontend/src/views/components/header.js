import React from 'react';
import './component.css';

const Header = ({ username }) => {
  const handleLogout = async () => {
    try {
      const response = await fetch('/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log('User logged out successfully');
        window.location.href = '/login';
      } else {
        console.error('Failed to logout');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="index-header">
      <div className="header-logo">
        <img src="SalveoLogoMini.png" alt="TYM Logo" />
      </div>
      <div className="user-info">
        Zkdlinied {username}
        <div className="logout-dropdown" onClick={handleLogout} >Logout </div>
      </div>
    </div>
  );
};

export default Header;