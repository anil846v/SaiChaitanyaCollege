import React, { useState } from "react";
import "./assets/modern-layout.css";
import "./assets/mobileview.css";
import { Link } from "react-router-dom";

export default function TeacherRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    subject: "",
    contactNo: "",
    email: "",
    photo: ""
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:9090/api/register/teacher",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setMessage("Teacher registration submitted. Await admin approval.");
      setFormData({
        name: "",
        password: "",
        subject: "",
        contactNo: "",
        email: "",
        photo: ""
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-layout">
      <div className="form-container">
        <h1 className="form-title">Teacher Registration</h1>

        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Teacher Name</label>
            <input 
              name="name" 
              value={formData.name}
              onChange={handleChange} 
              className="form-input" 
              required 
              placeholder="Enter teacher name"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
              name="email" 
              type="email" 
              value={formData.email}
              onChange={handleChange} 
              className="form-input" 
              required 
              placeholder="Enter email address"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              name="password" 
              type="password" 
              value={formData.password}
              onChange={handleChange} 
              className="form-input" 
              required 
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Subject</label>
            <input 
              name="subject" 
              value={formData.subject}
              onChange={handleChange} 
              className="form-input" 
              required 
              placeholder="Enter subject you teach"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Contact Number</label>
            <input 
              name="contactNo" 
              value={formData.contactNo}
              onChange={handleChange} 
              className="form-input" 
              placeholder="Enter contact number"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Photo URL</label>
            <input 
              name="photo" 
              value={formData.photo}
              onChange={handleChange} 
              className="form-input" 
              placeholder="Enter photo URL (optional)"
            />
          </div>

          <button type="submit" className="form-button" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <div className="form-links">
            <p>Already have an account?</p>
            <Link to="/login">Sign in here</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
