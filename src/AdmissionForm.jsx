import React, { useState } from "react";
import "./assets/styles.css";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    classApplied: "",
    parentName: "",
    contactNo: "",
    email: "",
    address: "",
    documents: ""
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:9090/api/home/admission",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed");
      }

      setMessage(data.message);

      // Optional: clear form
      setFormData({
        studentName: "",
        dob: "",
        classApplied: "",
        parentName: "",
        contactNo: "",
        email: "",
        address: "",
        documents: ""
      });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-layout">
      <div className="page-container">
        <div className="form-container">
          <h1 className="form-title">Admission Form</h1>

          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit} className="form-content">

            <div className="form-group">
              <label className="form-label">Student Name</label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Class Applied</label>
              <select
                name="classApplied"
                value={formData.classApplied}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="">Select Class</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={`${i + 1}`}>
                    Class {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Parent Name</label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Contact Number</label>
              <input
                type="tel"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Documents (Links / Notes)</label>
              <input
                type="text"
                name="documents"
                value={formData.documents}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <button type="submit" className="form-button" disabled={loading}>
              {loading ? "Submitting..." : "Submit Admission"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
