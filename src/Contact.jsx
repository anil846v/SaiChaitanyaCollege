import React, { useState, useEffect } from "react";
import "./assets/styles.css";
import jsPDF from 'jspdf';
import emailjs from '@emailjs/browser';
import logoImage from "./assets/logo.png";
import SEO from "./components/SEO";
import mpcImage from "./assets/Academics/mpc.png";
import bipcImage from "./assets/Academics/bipc.png";
import cecImage from "./assets/Academics/cec.png";
import mecImage from "./assets/Academics/mec.png";
import hecImage from "./assets/Academics/hec.png";
import vocationalImage from "./assets/Gallery/Campus and Classrooms/image.png";

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = 'ZCvlhG7N7mzONX1uG';
const EMAILJS_SERVICE_ID = 'service_s68431x';
const EMAILJS_TEMPLATE_ID = 'template_91q93qi';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// PDF generation function with enhanced logo, title and tabular formatting
const generatePDF = () => {
  const doc = new jsPDF();

  // Add logo with better positioning
  try {
    doc.addImage(logoImage, 'PNG', 85, 10, 40, 40);
  } catch (e) {
    console.log('Logo not loaded, continuing without logo');
  }

  // Enhanced header with proper styling
  doc.setTextColor(185, 28, 28);
  doc.setFontSize(20);
  doc.setFont(undefined, 'bold');
  doc.text(" SAI CHAITANYA", 105, 60, { align: 'center' });

  doc.setFontSize(14);
  doc.text("JUNIOR COLLEGE", 105, 70, { align: 'center' });

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(16);
  doc.text("FEE STRUCTURE 2026-27", 105, 85, { align: 'center' });

  // Add decorative line
  doc.setLineWidth(0.5);
  doc.line(20, 95, 190, 95);

  // Table header
  let yPos = 105;
  doc.setFontSize(10);
  doc.setFont(undefined, 'bold');

  // Draw table borders and headers
  doc.rect(20, yPos, 170, 10);
  doc.setFillColor(240, 240, 240);
  doc.rect(20, yPos, 170, 10, 'F');

  // Table headers
  doc.text("Course", 25, yPos + 7);
  doc.text("Tuition Fee", 70, yPos + 7);
  doc.text("Lab Fee", 110, yPos + 7);
  doc.text("Total Fee", 150, yPos + 7);

  // Vertical lines for table
  doc.line(65, yPos, 65, yPos + 10);
  doc.line(105, yPos, 105, yPos + 10);
  doc.line(145, yPos, 145, yPos + 10);

  yPos += 10;

  // Course data in tabular format
  const courseData = [
    ["MPC", "Rs.25,000", "Rs.6,000", "Rs.31,000"],
    ["BiPC", "Rs.25,000", "Rs.7,000", "Rs.32,000"],
    ["CEC", "Rs.22,000", "Rs.3,000", "Rs.25,000"],
    ["MEC", "Rs.23,000", "Rs.4,000", "Rs.27,000"],
    ["HEC", "Rs.20,000", "Rs.2,500", "Rs.22,500"],
    ["Vocational", "Rs.18,000", "Rs.3,500", "Rs.21,500"]
  ];

  doc.setFont(undefined, 'normal');
  doc.setFontSize(9);

  courseData.forEach((row, index) => {
    // Alternate row colors
    if (index % 2 === 0) {
      doc.setFillColor(250, 250, 250);
      doc.rect(20, yPos, 170, 10, 'F');
    }

    // Draw table borders
    doc.rect(20, yPos, 170, 10);

    // Add data
    doc.text(row[0], 25, yPos + 7);
    doc.text(row[1], 70, yPos + 7);
    doc.text(row[2], 110, yPos + 7);
    doc.text(row[3], 150, yPos + 7);

    // Vertical lines
    doc.line(65, yPos, 65, yPos + 10);
    doc.line(105, yPos, 105, yPos + 10);
    doc.line(145, yPos, 145, yPos + 10);

    yPos += 10;
  });

  // Additional charges section
  yPos += 10;
  doc.setFont(undefined, 'bold');
  doc.setFontSize(12);
  doc.text("ADDITIONAL CHARGES", 20, yPos);

  yPos += 8;
  doc.setFontSize(9);
  doc.setFont(undefined, 'normal');

  doc.text("Library Fee: Rs.1,000", 25, yPos);
  doc.text("Sports Fee: Rs.800", 25, yPos + 6);
  doc.text("Development Fee: Rs.1,500", 25, yPos + 12);
  doc.text("Exam Fee: Rs.2,500", 25, yPos + 18);

  // Payment options
  yPos += 30;
  doc.setFont(undefined, 'bold');
  doc.setFontSize(12);
  doc.text("PAYMENT OPTIONS", 20, yPos);

  yPos += 8;
  doc.setFont(undefined, 'normal');
  doc.setFontSize(9);
  doc.text("Annual payment: 5% discount on total fees", 25, yPos);
  doc.text("Monthly installments available", 25, yPos + 6);
  doc.text("Scholarship programs for meritorious students", 25, yPos + 12);

  // Contact information
  yPos += 25;
  doc.setFont(undefined, 'bold');
  doc.setFontSize(12);
  doc.text("CONTACT INFORMATION", 20, yPos);

  yPos += 8;
  doc.setFont(undefined, 'normal');
  doc.setFontSize(9);
  doc.text("Phone: +91  8309440507", 25, yPos);
  doc.text("Email: srisaichaitanya222@gmail.com", 25, yPos + 6);
  doc.text("Address: D.No: 3/145-9-6-4-A-8, Prasanth Nagar Extension,", 25, yPos + 12);
  doc.text("Sai Raghavendra Nagar, Madanapalle - 517325, Chittoor District, AP", 25, yPos + 18);

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(128, 128, 128);
  doc.text("Generated on: " + new Date().toLocaleDateString(), 105, 270, { align: 'center' });

  doc.save('-Sai-Chaitanya-Fee-Structure-2026.pdf');
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    group: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Handle hash navigation on component mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contact-form') {
      setTimeout(() => {
        const element = document.getElementById('contact-form');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const contactStyles = {
    headings: { fontFamily: 'Poppins, sans-serif', fontSize: '1.875rem' },
    body: { fontFamily: 'Inter, sans-serif', fontSize: '1rem' }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Phone field: only allow digits, max 10 characters
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData({
        ...formData,
        [name]: digitsOnly
      });
      return;
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number - must be exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      setSuccessMessage('Please enter a valid 10-digit phone number.');
      setShowSuccess(true);
      return;
    }

    try {
      // Send email using EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        group: formData.group,
        message: formData.message,
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        setSuccessMessage('Thank you for contacting us! Your message has been sent successfully. We will get back to you soon.');
        setShowSuccess(true);
        setFormData({ name: '', email: '', phone: '', group: '', message: '' });
      } else {
        throw new Error('Email send failed');
      }

    } catch (error) {
      console.error('Form submission failed:', error);
      setSuccessMessage('Failed to send message. Please try again or call us at 8309440507.');
      setShowSuccess(true);
    }
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);


  return (
    <div style={{ fontFamily: 'Inter, Roboto, sans-serif', color: '#333', background: '#ffffff', minHeight: 'calc(100vh - 160px)', paddingTop: '2rem' }}>
      <SEO
        title="Contact Us"
        description="Contact Sai Chaitanya Junior College, Madanapalle for admissions and inquiries. Call us at +91 8309440507 or email srisaichaitanya222@gmail.com. Visit our campus at Sai Raghavendra Nagar, Madanapalle - 517325."
        keywords="Contact Sai Chaitanya, Madanapalle College Contact, Junior College Admissions, Phone Number, Email Address, College Location"
        ogUrl="https://saichaitanyacollege.com/contact"
        canonical="https://saichaitanyacollege.com/contact"
      />

      <style>
        {`
          @media (max-width: 768px) {
            .mobile-section {
              padding: 1.5rem 0 !important;
            }
            .admission-process-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 0.5rem !important;
            }
            .admission-process-card {
              padding: 0.5rem !important;
            }
            .admission-process-card h3 {
              font-size: 0.75rem !important;
              margin-bottom: 0.125rem !important;
            }
            .admission-process-card p {
              font-size: 0.5rem !important;
              line-height: 1.2 !important;
            }
            .admission-process-card svg {
              width: 16px !important;
              height: 16px !important;
            }
            .admission-process-card .icon-circle {
              width: 35px !important;
              height: 35px !important;
              margin: 0 auto 0.25rem !important;
            }
            .eligibility-grid {
              grid-template-columns: 1fr !important;
              gap: 0.75rem !important;
            }
            .eligibility-card {
              padding: 0.5rem !important;
            }
            .eligibility-card h3 {
              font-size: 1rem !important;
              margin-bottom: 0.5rem !important;
            }
            .eligibility-card p {
              font-size: 0.75rem !important;
              margin: 0 !important;
              line-height: 1.4 !important;
            }
            .fee-structure-grid {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 0.5rem !important;
            }
            .fee-structure-card {
              padding: 0.5rem !important;
            }
            .fee-structure-card h3 {
              font-size: 0.75rem !important;
              margin-bottom: 0.25rem !important;
            }
            .fee-structure-card p {
              font-size: 0.875rem !important;
              margin: 0 !important;
            }
            .payment-options-card {
              padding: 0.75rem !important;
              margin-bottom: 1rem !important;
            }
            .payment-options-card h3 {
              font-size: 0.875rem !important;
              margin-bottom: 0.5rem !important;
            }
            .payment-options-card p {
              font-size: 0.625rem !important;
              margin: 0.125rem 0 !important;
            }
            .contact-grid {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
            .contact-info-card {
              padding: 1rem !important;
            }
            .contact-info-card h2 {
              font-size: 1.125rem !important;
              margin-bottom: 1rem !important;
            }
            .contact-info-card h3 {
              font-size: 0.875rem !important;
              margin-bottom: 0.5rem !important;
            }
            .contact-info-card p {
              font-size: 0.75rem !important;
              margin-bottom: 0.25rem !important;
            }
            .contact-form-card {
              padding: 1rem !important;
            }
            .contact-form-card h2 {
              font-size: 1.125rem !important;
              margin-bottom: 1rem !important;
            }
            .contact-form-card label {
              font-size: 0.75rem !important;
              margin-bottom: 0.25rem !important;
            }
            .contact-form-card input,
            .contact-form-card textarea {
              padding: 0.5rem !important;
              font-size: 0.875rem !important;
            }
            .contact-form-card .form-group {
              margin-bottom: 1rem !important;
            }
            .section-heading {
              font-size: 1.25rem !important;
              margin-bottom: 1rem !important;
            }
            .hero-section {
              padding: 1.5rem 0 !important;
            }
            .hero-section h1 {
              font-size: 1.5rem !important;
              margin-bottom: 0.25rem !important;
            }
            .hero-section p {
              font-size: 0.875rem !important;
            }
          }
          @media (max-width: 480px) {
            .admission-process-grid {
              grid-template-columns: 1fr !important;
            }
            .fee-structure-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            .section-heading {
              font-size: 1.125rem !important;
            }
          }
        `}
      </style>



      {/* ADMISSION PROCESS STRIP */}
      <section className="mobile-section" style={{ padding: '5em 0', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 className="section-heading center-text" style={{ ...contactStyles.headings, color: '#111827' }}>Admission Process</h2>
          <div className="admission-process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            <div className="admission-process-card" style={{ background: 'white', padding: '1rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <div className="icon-circle" style={{ background: 'linear-gradient(135deg, #dc2626, #eb7932ff)', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem', color: '#111827' }}>Application Form</h3>
              <p style={{ fontSize: '0.75rem', color: '#6b7280', lineHeight: '1.4' }}>Fill out the admission application form with required details</p>
            </div>
            <div className="admission-process-card" style={{ background: 'white', padding: '1rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <div className="icon-circle" style={{ background: 'linear-gradient(135deg, #dc2626, #eb7932ff)', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem', color: '#111827' }}>Document Submission</h3>
              <p style={{ fontSize: '0.75rem', color: '#6b7280', lineHeight: '1.4' }}>Submit required documents and certificates</p>
            </div>
            <div className="admission-process-card" style={{ background: 'white', padding: '1rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <div className="icon-circle" style={{ background: 'linear-gradient(135deg, #dc2626, #eb7932ff)', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A3,3 0 0,1 15,5V7H9V5A3,3 0 0,1 12,2M21,8V7H19V5A7,7 0 0,0 5,5V7H3V8A1,1 0 0,0 2,9V19A3,3 0 0,0 5,22H19A3,3 0 0,0 22,19V9A1,1 0 0,0 21,8M20,19A1,1 0 0,1 19,20H5A1,1 0 0,1 4,19V10H20V19M10.5,15.25L9,13.75L7.75,15L10.5,17.75L16.25,12L15,10.75L10.5,15.25Z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem', color: '#111827' }}>Interview</h3>
              <p style={{ fontSize: '0.75rem', color: '#6b7280', lineHeight: '1.4' }}>Attend counseling session with parents/guardians</p>
            </div>
            <div className="admission-process-card" style={{ background: 'white', padding: '1rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <div className="icon-circle" style={{ background: 'linear-gradient(135deg, #dc2626, #eb7932ff)', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem', color: '#111827' }}>Admission Confirmation</h3>
              <p style={{ fontSize: '0.75rem', color: '#6b7280', lineHeight: '1.4' }}>Pay fees and confirm your admission</p>
            </div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY CRITERIA STRIP */}
      <section className="mobile-section" style={{ padding: '3rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 className="section-heading center-text" style={{ ...contactStyles.headings, color: '#111827' }}>Eligibility Criteria</h2>
          <div className="eligibility-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="eligibility-card" style={{ background: '#f8f9fa', padding: '0', borderRadius: '12px', border: '2px solid #dc262620', position: 'relative', overflow: 'hidden', height: '200px' }}>
              <img src={mpcImage} alt="MPC Course Eligibility - Sai Chaitanya Junior College Madanapalle" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} />
              <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.4)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>MPC</h3>
                <p style={{ fontSize: '0.875rem', color: 'white', lineHeight: '1.4', textShadow: '1px 1px 2px rgba(0,0,0,0.8)', textAlign: 'center', padding: '0 1rem' }}>Min 60% in Class 10th • Age: 15-17 years</p>
              </div>
            </div>
            <div className="eligibility-card" style={{ background: '#f8f9fa', padding: '0', borderRadius: '12px', border: '2px solid #dc262620', position: 'relative', overflow: 'hidden', height: '200px' }}>
              <img src={bipcImage} alt="BiPC Course Eligibility - Sai Chaitanya Junior College Madanapalle" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} />
              <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.4)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>BiPC</h3>
                <p style={{ fontSize: '0.875rem', color: 'white', lineHeight: '1.4', textShadow: '1px 1px 2px rgba(0,0,0,0.8)', textAlign: 'center', padding: '0 1rem' }}>Min 60% in Class 10th • Age: 15-17 years</p>
              </div>
            </div>
            <div className="eligibility-card" style={{ background: '#f8f9fa', padding: '0', borderRadius: '12px', border: '2px solid #dc262620', position: 'relative', overflow: 'hidden', height: '200px' }}>
              <img src={cecImage} alt="CEC Course Eligibility - Sai Chaitanya Junior College Madanapalle" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} />
              <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.4)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>CEC</h3>
                <p style={{ fontSize: '0.875rem', color: 'white', lineHeight: '1.4', textShadow: '1px 1px 2px rgba(0,0,0,0.8)', textAlign: 'center', padding: '0 1rem' }}>Min 55% in Class 10th • Age: 15-17 years</p>
              </div>
            </div>
            <div className="eligibility-card" style={{ background: '#f8f9fa', padding: '0', borderRadius: '12px', border: '2px solid #dc262620', position: 'relative', overflow: 'hidden', height: '200px' }}>
              <img src={mecImage} alt="MEC Course Eligibility - Sai Chaitanya Junior College Madanapalle" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} />
              <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.4)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>MEC</h3>
                <p style={{ fontSize: '0.875rem', color: 'white', lineHeight: '1.4', textShadow: '1px 1px 2px rgba(0,0,0,0.8)', textAlign: 'center', padding: '0 1rem' }}>Min 55% in Class 10th • Age: 15-17 years</p>
              </div>
            </div>
            <div className="eligibility-card" style={{ background: '#f8f9fa', padding: '0', borderRadius: '12px', border: '2px solid #dc262620', position: 'relative', overflow: 'hidden', height: '200px' }}>
              <img src={hecImage} alt="HEC Course Eligibility - Sai Chaitanya Junior College Madanapalle" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} />
              <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.4)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>HEC</h3>
                <p style={{ fontSize: '0.875rem', color: 'white', lineHeight: '1.4', textShadow: '1px 1px 2px rgba(0,0,0,0.8)', textAlign: 'center', padding: '0 1rem' }}>Min 50% in Class 10th • Age: 15-17 years</p>
              </div>
            </div>
            <div className="eligibility-card" style={{ background: '#f8f9fa', padding: '0', borderRadius: '12px', border: '2px solid #dc262620', position: 'relative', overflow: 'hidden', height: '200px', opacity: '0.8' }}>
              <img src={vocationalImage} alt="Vocational Course Eligibility - Sai Chaitanya Junior College Madanapalle" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} />
              <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.4)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Vocational</h3>
                <p style={{ fontSize: '0.875rem', color: 'white', lineHeight: '1.4', textShadow: '1px 1px 2px rgba(0,0,0,0.8)', textAlign: 'center', padding: '0 1rem' }}>Min 50% in Class 10th • Age: 15-17 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEE DETAILS STRIP */}
      <section style={{ padding: '2rem 0', background: '#eb7932ff', color: 'white', width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <h2 className="section-heading center-text" style={{ ...contactStyles.headings, color: 'white' }}>Fee Structure 2026-27</h2>
          <p style={{ fontSize: '1rem', marginBottom: '2rem', opacity: '0.9' }}>Detailed course-wise fee structure</p>

          {/* Unified Fee Grid */}
          <div className="fee-structure-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.75rem', maxWidth: '1200px', margin: '0 auto' }}>
            {/* MPC Cards */}
            <div className="fee-structure-card" style={{ background: 'rgba(255,255,255,0.15)', padding: '0.75rem', borderRadius: '10px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'white', marginBottom: '0.3rem', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.2rem' }}>MPC</span>
              <h4 style={{ fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.15rem', opacity: '0.9' }}>IPE / JEE</h4>
              <h3 style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>M21 - ELITE Prime</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>₹40,000</p>
            </div>
            <div className="fee-structure-card" style={{ background: 'rgba(255,255,255,0.15)', padding: '0.75rem', borderRadius: '10px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'white', marginBottom: '0.3rem', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.2rem' }}>MPC</span>
              <h4 style={{ fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.15rem', opacity: '0.9' }}>IPE / EAMCET</h4>
              <h3 style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>M22 - GOLD (Boys)</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>₹35,000</p>
            </div>
            <div className="fee-structure-card" style={{ background: 'rgba(255,255,255,0.15)', padding: '0.75rem', borderRadius: '10px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'white', marginBottom: '0.3rem', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.2rem' }}>MPC</span>
              <h4 style={{ fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.15rem', opacity: '0.9' }}>IPE / EAMCET</h4>
              <h3 style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>M22 - GOLD (Girls)</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>₹35,000</p>
            </div>
            <div className="fee-structure-card" style={{ background: 'rgba(255,255,255,0.15)', padding: '0.75rem', borderRadius: '10px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'white', marginBottom: '0.3rem', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.2rem' }}>MPC</span>
              <h4 style={{ fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.15rem', opacity: '0.9' }}>IPE / EAMCET</h4>
              <h3 style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>M23 - TITAN</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>₹30,000</p>
            </div>
            <div className="fee-structure-card" style={{ background: 'rgba(255,255,255,0.15)', padding: '0.75rem', borderRadius: '10px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'white', marginBottom: '0.3rem', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.2rem' }}>MPC</span>
              <h4 style={{ fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.15rem', opacity: '0.9' }}>IPE</h4>
              <h3 style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>M24 - PLATINUM</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>₹25,000</p>
            </div>

            {/* MBiPC Card */}
            <div className="fee-structure-card" style={{ background: 'rgba(255,255,255,0.15)', padding: '0.75rem', borderRadius: '10px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'white', marginBottom: '0.3rem', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.2rem' }}>MBiPC</span>
              <h4 style={{ fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.15rem', opacity: '0.9' }}>IPE / EAPCET / JEE / NEET</h4>
              <h3 style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>MB21 - ELITE BIO</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>₹40,000</p>
            </div>

            {/* BiPC Cards */}
            <div className="fee-structure-card" style={{ background: 'rgba(255,255,255,0.15)', padding: '0.75rem', borderRadius: '10px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'white', marginBottom: '0.3rem', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.2rem' }}>BiPC</span>
              <h4 style={{ fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.15rem', opacity: '0.9' }}>IPE + NEET</h4>
              <h3 style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>B21 - NOVA</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>₹40,000</p>
            </div>
            <div className="fee-structure-card" style={{ background: 'rgba(255,255,255,0.15)', padding: '0.75rem', borderRadius: '10px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'white', marginBottom: '0.3rem', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.2rem' }}>BiPC</span>
              <h4 style={{ fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.15rem', opacity: '0.9' }}>IPE + EAPCET</h4>
              <h3 style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>B22 - BIO (Girls)</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>₹35,000</p>
            </div>
            <div className="fee-structure-card" style={{ background: 'rgba(255,255,255,0.15)', padding: '0.75rem', borderRadius: '10px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'white', marginBottom: '0.3rem', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.2rem' }}>BiPC</span>
              <h4 style={{ fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.15rem', opacity: '0.9' }}>IPE + EAPCET</h4>
              <h3 style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>B22 - BIO (Boys)</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>₹35,000</p>
            </div>
            <div className="fee-structure-card" style={{ background: 'rgba(255,255,255,0.15)', padding: '0.75rem', borderRadius: '10px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'white', marginBottom: '0.3rem', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.2rem' }}>BiPC</span>
              <h4 style={{ fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.15rem', opacity: '0.9' }}>IPE</h4>
              <h3 style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>B23 - STARS</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>₹25,000</p>
            </div>

            {/* CEC Cards */}
            <div className="fee-structure-card" style={{ background: 'rgba(255,255,255,0.15)', padding: '0.75rem', borderRadius: '10px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'white', marginBottom: '0.3rem', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.2rem' }}>CEC</span>
              <h4 style={{ fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.15rem', opacity: '0.9' }}>ARTS</h4>
              <h3 style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>C21 - ALFA (Girls)</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>₹18,000</p>
            </div>
            <div className="fee-structure-card" style={{ background: 'rgba(255,255,255,0.15)', padding: '0.75rem', borderRadius: '10px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'white', marginBottom: '0.3rem', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.2rem' }}>CEC</span>
              <h4 style={{ fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.15rem', opacity: '0.9' }}>ARTS</h4>
              <h3 style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>C21 - ALFA (Boys)</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>₹20,000</p>
            </div>
            <div className="fee-structure-card" style={{ background: 'rgba(255,255,255,0.15)', padding: '0.75rem', borderRadius: '10px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'white', marginBottom: '0.3rem', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.2rem' }}>CEC</span>
              <h4 style={{ fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.15rem', opacity: '0.9' }}>ARTS</h4>
              <h3 style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>C22 - NEXT</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>₹16,000</p>
            </div>
            <div className="fee-structure-card" style={{ background: 'rgba(255,255,255,0.15)', padding: '0.75rem', borderRadius: '10px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'white', marginBottom: '0.3rem', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.2rem' }}>CEC</span>
              <h4 style={{ fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.15rem', opacity: '0.9' }}>ARTS</h4>
              <h3 style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>C23 - EDGE</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>₹16,000</p>
            </div>

            {/* MEC Card */}
            <div className="fee-structure-card" style={{ background: 'rgba(255,255,255,0.15)', padding: '0.75rem', borderRadius: '10px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'white', marginBottom: '0.3rem', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.2rem' }}>MEC</span>
              <h4 style={{ fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.15rem', opacity: '0.9' }}>IPE</h4>
              <h3 style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>ME21 - COMMERCE ELITE</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>₹20,000</p>
            </div>
          </div>

          <button
            onClick={() => {
              // Check if it's mobile or desktop
              const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
              
              if (isMobile) {
                // Direct call on mobile
                window.location.href = 'tel:+918309440507';
              } else {
                // Show alert on desktop
                alert('Please call us at: +91 8309440507\n\nOr email us at: srisaichaitanya222@gmail.com');
              }
            }}
            style={{
              background: 'white',
              color: '#dc2626',
              border: 'none',
              padding: '0.75rem 2rem',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              marginTop: '1.25rem'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
            }}>
            Call Us for More Details
          </button>
        </div>
      </section>
      {/* HERO SECTION */}
      <section className="hero-section" style={{
        padding: '2rem 0',
        textAlign: 'center',
        color: '#111827',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h1 className="section-heading center-text" style={{ ...contactStyles.headings, color: '#111827' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '1rem', opacity: '0.7', color: '#4b5563', ...contactStyles.body }}>
            Get in touch with us for admissions and inquiries
          </p>
        </div>
      </section>
      {/* CONTACT INFORMATION & FORM */}
      <section id="contact-form" style={{ padding: '1.5rem 1.5rem' }}>
        <div className="contact-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>

          {/* Contact Information */}
          <div className="contact-info-card" style={{ background: '#eb7932ff', borderRadius: '16px', padding: '2.5rem', color: 'white' }}>
            <h2 style={{ ...contactStyles.headings, fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem', color: 'white' }}>Get In Touch</h2>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ ...contactStyles.headings, fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>Contact Information</h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.25rem' }}>📞</span>
                  <div>
                    <p style={{ ...contactStyles.body, fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.25rem' }}>Phone</p>
                    <a href="tel:+8309440507" style={{ ...contactStyles.body, fontSize: '1rem', color: 'white', textDecoration: 'none' }}>+91 8309440507</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.25rem' }}>✉️</span>
                  <div>
                    <p style={{ ...contactStyles.body, fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.25rem' }}>Email</p>
                    <a href="mailto:srisaichaitanya222@gmail.com" style={{ ...contactStyles.body, fontSize: '1rem', color: 'white', textDecoration: 'none' }}>srisaichaitanya222@gmail.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.25rem' }}>📍</span>
                  <div>
                    <p style={{ ...contactStyles.body, fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.25rem' }}>Address</p>
                    <p style={{ ...contactStyles.body, fontSize: '0.875rem', lineHeight: '1.5' }}>D.No: 3/145-9-6-4-A-8, Prasanth Nagar Extension,<br />Sai Raghavendra Nagar, Madanapalle – 517325,<br />Chittoor District, Andhra Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ ...contactStyles.headings, fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>Office Hours</h3>
              <div style={{ ...contactStyles.body, fontSize: '0.875rem', lineHeight: '1.6' }}>
                <p><strong>Monday - Saturday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>
          </div>


          {/* Contact Form */}
          <div className="contact-form-card" style={{ background: '#ffffff', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.1)', border: '1px solid #e5e7eb' }}>
            {showSuccess ? (
              <div style={{
                background: '#10b981',
                color: 'white',
                padding: '2rem',
                borderRadius: '8px',
                textAlign: 'center',
                fontSize: '1.125rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '200px'
              }}>
                ✓ {successMessage || 'Thank you for contacting us!'}
              </div>
            ) : (
              <>
                <h2 style={{ ...contactStyles.headings, fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#111827' }}>Send us a Message</h2>

                <form onSubmit={handleSubmit}>
                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label style={{ ...contactStyles.body, display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem' }}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label style={{ ...contactStyles.body, display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem' }}
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label style={{ ...contactStyles.body, display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem' }}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label style={{ ...contactStyles.body, display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>Select Group *</label>
                    <select
                      name="group"
                      value={formData.group}
                      onChange={handleInputChange}
                      required
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem', backgroundColor: 'white' }}
                    >
                      <option value="">Select a group</option>
                      <option value="MPC">MPC (Mathematics, Physics, Chemistry)</option>
                      <option value="MBiPC">MBiPC (Mathematics,Biology, Physics, Chemistry)</option>
                      <option value="BiPC">BiPC (Biology, Physics, Chemistry)</option>   
                     <option value="MEC">MEC (Mathematics, Economics, Commerce)</option>
                      <option value="CEC">CEC (Commerce, Economics, Civics)</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '2rem' }}>
                    <label style={{ ...contactStyles.body, display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem', resize: 'vertical' }}
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    style={{ width: '100%', background: 'linear-gradient(135deg, #dc2626, #eb7932ff)', color: 'white', border: 'none', padding: '0.875rem', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', transition: 'background 0.3s ease' }}
                    onMouseOver={(e) => e.target.style.background = 'linear-gradient(135deg, #dc2626, #eb7932ff)'}
                    onMouseOut={(e) => e.target.style.background = '#eb7932ff'}
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

      </section>

      {/* MAP SECTION */}
      <section
        style={{
          padding: '2rem 0',
          background: '#f8f9fa',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)'
        }}
      >
        <style>
          {`
            @media (max-width: 768px) {
              .map-section {
                padding: 2rem 1rem !important;
              }
              .map-iframe {
                height: 300px !important;
              }
            }
          `}
        </style>
        <div className="map-section" style={{ width: '100%', margin: '0', padding: '0' }}>
          <h2
            style={{
              ...contactStyles.headings,
              fontSize: '2rem',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '1.5rem',
              color: '#111827',
              paddingTop: '2rem'
            }}
          >
            Our Campus Location
          </h2>

          <div
            style={{
              marginTop: '1.5rem',
              width: '100%',
              boxShadow: 'none'
            }}
          >
            <iframe
              className="map-iframe"
              title=" Sai Chaitanya Junior College - Madanapalle Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d78.501!3d13.560!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb267323a02b485%3A0x99a4090847f1dfdf!2s%20SAI%20CHAITANYA%20JUNIOR%20COLLEGE!5e0!3m2!1sen!2sin!4v1730000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

    </div>

  );
};

export default Contact;