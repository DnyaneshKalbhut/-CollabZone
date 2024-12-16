import React from 'react';
import './sidebarOptions.css';

function SidebarOptions({ options }) {
  return (
    <div className="sidebar-options">
      <div className="sidebar-icon">{options.icon}</div>
      {options.name && <label className="sidebar-label">{options.name}</label>}
    </div>
  );
}

export default SidebarOptions;
