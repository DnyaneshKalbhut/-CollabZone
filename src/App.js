import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat";
import Calendar from "./components/calendar/Calendar.js";
import Groups from "./components/groups/Groups";
import Calls from "./components/calls/Call";
import Activity from "./components/activity/Activity.js";
import Profile from "./components/profile/Profile.js";
import Login from "./components/profile/Login.js";  // Import Login component
import "./App.css";

function App() {
  // State to track if user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app-container">
        {/* Sidebar and other content components */}

        <div className="content-area">
          <Routes>
            {/* Route for the Profile page */}
            <Route
              path="/profile"
              element={
                isAuthenticated ? (
                  <Profile />
                ) : (
                  <Login setIsAuthenticated={setIsAuthenticated} />
                )
              }
            />
            <Route path="/chat" element={<Chat />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/calls" element={<Calls />} />
            <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} /> {/* Default route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
