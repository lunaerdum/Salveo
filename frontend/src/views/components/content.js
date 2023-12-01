import React from 'react';
import Sidebar from './sidebar';
import MainContent from './maincontent';
import './component.css';

function Content() {
  return (
    <div className="content">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default Content;