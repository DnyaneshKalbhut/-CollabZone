import React, { useState } from "react";
import "./Profile.css";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    adharNumber: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registered User:", formData);
    alert("Registration Successful!");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3>Register</h3>
      <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
      <input type="text" name="adharNumber" placeholder="Aadhar Number" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
      <label>Upload Profile Picture:</label>
      <input type="file" name="profilePic" accept="image/*" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
