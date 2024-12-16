import React, { useState } from "react";
import "./Profile.css";
import Login from "./Login";
import Register from "./Register";

function Profile() {
  const [view, setView] = useState("login"); // Toggle between login and register views

  return (
    <div className="profile-container">
      <h2 className="profile-header">Welcome to Your Profile</h2>

      {/* Navigation Buttons */}
      <div className="profile-buttons">
        <button onClick={() => setView("login")} className={view === "login" ? "active" : ""}>
          Login
        </button>
        <button onClick={() => setView("register")} className={view === "register" ? "active" : ""}>
          Register
        </button>
      </div>

      {/* Conditional Rendering */}
      <div className="profile-content">
        {view === "login" ? <Login /> : <Register />}
      </div>
    </div>
  );
}

export default Profile;
