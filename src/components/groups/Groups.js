import React from "react";
import "./Groups.css";

const groupsData = [
  {
    id: 1,
    name: "Frontend Developers",
    description: "React, Angular, Vue enthusiasts",
    members: 10,
  },
  {
    id: 2,
    name: "Backend Wizards",
    description: "Node.js, Django, and backend tech",
    members: 8,
  },
  {
    id: 3,
    name: "AI Innovators",
    description: "AI/ML and data science discussion",
    members: 15,
  },
  {
    id: 4,
    name: "UI/UX Designers",
    description: "Design principles, Figma, and Sketch",
    members: 12,
  },
  {
    id: 5,
    name: "Sales Force Club",
    description: "React, Angular, Vue enthusiasts",
    members: 10,
  },
  {
    id: 6,
    name: "C++ coders",
    description: "Node.js, Django, and backend tech",
    members: 8,
  },
  {
    id: 7,
    name: "AI/ML",
    description: "AI/ML and data science discussion",
    members: 15,
  },
  {
    id: 8,
    name: "React Designers",
    description: "Design principles, Figma, and Sketch",
    members: 12,
  },
];

function Groups() {
  return (
    <div className="groups-container">
      {/* Header */}
      <div className="groups-header">
        <h2>Groups</h2>
        <button className="add-group-btn">
          <i className="fi fi-ss-user-add"></i> Add Group
        </button>
      </div>

      {/* Search Bar */}
      <div className="groups-search">
        <input type="text" placeholder="Find a Group" />
      </div>

      {/* Groups List */}
      <div className="groups-list">
        {groupsData.map((group) => (
          <div key={group.id} className="group-card">
            <div className="group-card-content">
              <h3>{group.name}</h3>
              <p>{group.description}</p>
              <span className="group-members">{group.members} Members</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Groups;
