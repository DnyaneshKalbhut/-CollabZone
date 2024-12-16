import React, { useState } from 'react';
import Header from '../common/header/Header';
import Sidebar from '../common/sidebar/Sidebar';
import RightFold from './right-fold/RightFold';
import LeftFold from './left-fold/Leftfold';

import './calls.css';

function Call() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="calls-container">
      <Header />
      <div className="calls-body">
        {/* Sidebar Toggle Button */}
        <button className="sidebar-toggle-button" onClick={toggleSidebar}>
          ☰
        </button>

        {/* Sidebar */}
        <div className={`calls-sidebar ${isSidebarOpen ? '' : 'sidebar-collapsed'}`}>
          <Sidebar />
        </div>

        {/* LeftFold */}
        <div className="calls-leftFold">
          <LeftFold />
        </div>


        {/* RightFold */}
        <div className="calls-rightFold">
          <RightFold />
        </div>
      </div>
    </div>
  );
}

export default Call;
