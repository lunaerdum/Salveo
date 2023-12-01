import React from 'react';
import './component.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <div className="sidebar-title">Account <br />Management</div>
          <ul>
            <li><a href="/profile" className="sidebar-link">Account Information</a></li>
            <li><a href="/updateuser" className="sidebar-link">Update Account</a></li>
            <li><a href="/users" className="sidebar-link">Manage Users</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;