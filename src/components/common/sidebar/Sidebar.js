import React from 'react';
import './sidebar.css';
import { SidebarTop, SidebarBottom, SidebarMore } from '../../../data/SidebarData';
import SidebarOptions from './SidebarOptions'; // Import SidebarOptions component
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Top Section */}
      <div className="sidebar-top">
        {SidebarTop.map((option) => (
          <Link key={option.id} to={`/${option.name.toLowerCase()}`} className="sidebar-option-link">
            <SidebarOptions options={option} />
          </Link>
        ))}
      </div>

      {/* More Section */}
      <div className="sidebar-more">
        {SidebarMore.map((option) => (
          <SidebarOptions key={option.id} options={option} />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="sidebar-bottom">
        {SidebarBottom.map((option) => (
          <Link key={option.id} to={`/${option.name.toLowerCase()}`} className="sidebar-option-link">
            <SidebarOptions options={option} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
