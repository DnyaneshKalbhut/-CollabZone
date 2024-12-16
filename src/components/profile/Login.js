import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setIsAuthenticated }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validCredentials = {
    name: "testuser",
    password: "password123",
    aadharNumber: "123456789012", // 12-digit Aadhar Number
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      name === validCredentials.name &&
      password === validCredentials.password &&
      aadharNumber === validCredentials.aadharNumber
    ) {
      setIsAuthenticated(true); // Update the state to show the profile page
      navigate("/calls"); // Redirect to Calls page after successful login
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Aadhar Number</label>
            <input
              type="text"
              placeholder="Enter your Aadhar number"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
