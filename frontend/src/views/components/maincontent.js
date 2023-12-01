import React from 'react';
import './component.css';

function MainContent() {
    return (
        <div className="main-content">
          <div className="title-info">Account Information</div>
         
          <div className="basic-info">
            <p>Username</p>
            <p>User ID</p>
            <p>Email</p>
          </div>
        </div>
      );
    };
    

export default MainContent;