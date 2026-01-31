import React from "react";
import { Link } from "react-router-dom";
import logoImage from "./assets/logo.png";
import heroicImage from "./assets/Heroic/image1.png";

export default function Footer() {
  const footerStyles = {
    headings: { fontFamily: 'Poppins, sans-serif' },
    body: { fontFamily: 'Inter, sans-serif' }
  };

  return (
    <footer className="footer" style={{ 
      position: 'relative',
      backgroundImage: `url(${heroicImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      borderTop: '2px solid #e5e7eb',
      color: 'white'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1
      }}></div>
      <div className="footer-container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              {/* <img src={logoImage} alt="Viswam School" className="footer-logo-image" /> */}
              <div className="footer-brand-text">
                <h3 className="footer-school-name" style={footerStyles.headings}>Sai Chaitanya Junior School</h3>
                <p className="footer-tagline" style={footerStyles.body}>Excellence in Education Since 1995</p>
              </div>
            </div>
          </div>

          <div className="footer-navigation">
            <h4 className="footer-section-title" style={footerStyles.headings}>Navigation</h4>
            <div className="footer-links" style={footerStyles.body}>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link>
              <Link to="/gallery" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Gallery</Link>
              <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About Us</Link>
              <Link to="/contact#contact-form" onClick={() => window.location.href = '/contact#contact-form'}>Contact</Link>
            </div>
          </div>

          <div className="footer-contact">
            <h4 className="footer-section-title" style={footerStyles.headings}>Contact</h4>
            <div className="contact-info" style={footerStyles.body}>
              <p>📞 +91 9642433777</p>
              <p>✉️ info@saichaitanyajuniorcollege.edu.in</p>
              <p>📍 D.No: 3/145-9-6-4-A-8, Prasanth Nagar Extension,<br />
                 Sai Raghavendra Nagar, Madanapalle – 517325,<br />
                 Chittoor District, Andhra Pradesh</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={footerStyles.body}>&copy; 2025 Viswam School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}