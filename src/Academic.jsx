import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./assets/styles.css";
import classroomBg from "./assets/Gallery/Campus and Classrooms/image.png";
import image1 from "./assets/Heroic/image1.png";
import faculty1 from "./assets/Photos/Faculty/Faculty1.png";
import faculty2 from "./assets/Photos/Faculty/Faculty2.png";
import faculty3 from "./assets/Photos/Faculty/Faculty3.png";
import faculty4 from "./assets/Photos/Faculty/Faculty4.png";
import faculty5 from "./assets/Photos/Faculty/Faculty5.png";

export default function Academic() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const homePageStyles = {
    headings: { fontFamily: 'Poppins, sans-serif' },
    body: { fontFamily: 'Inter, sans-serif' }
  };

  const groupsOffered = [
    {
      title: "MPC", 
      subtitle: "Mathematics, Physics, Chemistry",
      description: "Ideal for students aiming for Engineering, IIT-JEE, Architecture, and pure sciences. Strong focus on problem-solving and competitive exam preparation.",
      medium: "English / Telugu Medium",
      strength: "Multiple sections available",
      features: ["IIT-JEE Coaching", "Advanced Labs", "Problem Solving"],
      color: "#dc2626"
    },
    {
      title: "BiPC",
      subtitle: "Biology, Physics, Chemistry",
      description: "Perfect for aspiring medical professionals – prepares for NEET, EAMCET (Medical), Biotechnology, Pharmacy, and allied health sciences.",
      medium: "English / Telugu Medium",
      strength: "Multiple sections available",
      features: ["NEET Preparation", "Medical Labs", "Clinical Training"],
      color: "#dc2626"
    },
    {
      title: "HEC",
      subtitle: "History, Economics, Civics",
      description: "Suited for humanities, social sciences, civil services (UPSC/APPSC), law, journalism, and teaching careers.",
      medium: "English / Telugu Medium",
      strength: "Available sections",
      features: ["UPSC Guidance", "Research Skills", "Essay Writing"],
      color: "#dc2626"
    },
    {
      title: "CEC",
      subtitle: "Civics, Economics, Commerce",
      description: "Focuses on commerce fundamentals – great foundation for B.Com, CA, CS, Banking, Business Management, and entrepreneurship.",
      medium: "English / Telugu Medium",
      strength: "Available sections",
      features: ["CA Foundation", "Business Skills", "Accounting"],
      color: "#dc2626"
    },
    {
      title: "MEC",
      subtitle: "Mathematics, Economics, Commerce",
      description: "Blends quantitative skills with commerce – ideal for BBA, MBA, Economics honors, Data Analytics, Finance, and competitive exams like IPMAT.",
      medium: "English / Telugu Medium",
      strength: "Available sections",
      features: ["IPMAT Prep", "Data Analytics", "Finance Basics"],
      color: "#dc2626"
    }
  ];

  return (
    <div className="academic-container">
      {/* COURSES OFFERED STRIP */}
      <section id="courses-section" className="courses-strip" style={{ background: '#f8f9fa', padding: '2rem 0', marginTop: '80px' }}>
        <style>
          {`
            @media (max-width: 768px) {
              .courses-strip {
                padding: 1.5rem 1rem !important;
              }
              .courses-grid {
                display: flex !important;
                overflow-x: auto !important;
                gap: 1.5rem !important;
                padding-bottom: 1rem;
              }
              .course-card {
                min-width: 240px !important;
                flex-shrink: 0 !important;
                padding: 1.5rem !important;
              }
            }
          `}
        </style>
        <div className="strip-container">
          <h2 className="section-heading center-text" style={{ ...homePageStyles.headings, fontSize: '2rem', color: '#111827', marginBottom: '1rem' }}>Courses Offered</h2>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ ...homePageStyles.body, fontSize: '0.875rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
              Choose from our comprehensive range of intermediate courses designed to prepare students for competitive exams and higher education with expert faculty guidance and proven teaching methodologies.
            </p>
          </div>
          <div className="courses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', width: '100%' }}>
            {groupsOffered.map((course, index) => (
              <div key={index} className="course-card" style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.1)',
                border: `2px solid ${course.color}20`,
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: 'linear-gradient(135deg, #fefcf8 0%, #faf7f0 100%)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = course.color;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = `${course.color}20`;
              }}>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '4px',
                  background: `linear-gradient(to bottom, ${course.color}, ${course.color}dd)`
                }}></div>
                
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  background: `linear-gradient(135deg, ${course.color}, ${course.color}dd)`,
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderBottomLeftRadius: '12px',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  {course.title}
                </div>
                
                <div style={{ marginTop: '1rem' }}>
                  <h3 className="process-title" style={{ ...homePageStyles.headings, fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>
                    {course.subtitle}
                  </h3>
                  
                  <p className="process-description" style={{ ...homePageStyles.body, fontSize: '0.75rem', color: '#4b5563', lineHeight: '1.4', marginBottom: '0.5rem' }}>
                    {course.description}
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: course.color, fontWeight: '600', fontSize: '0.875rem' }}>Medium:</span>
                    <span style={{ color: '#374151', fontSize: '0.875rem' }}>{course.medium}</span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Admission Button Card */}
            
           
              
          </div>
          
          {/* Admission Button */}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link 
              to="/contact#contact-form"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/contact#contact-form';
              }}
              style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '600',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px -5px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }}>
              Apply for Admission
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* TEACHING METHODOLOGY STRIP */}
      <section className="teaching-methodology-strip" style={{ 
        padding: '4rem 0', 
        backgroundImage: `url(${image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          zIndex: 1
        }}></div>
        <style>
          {`
            @media (max-width: 768px) {
              .teaching-methodology-strip {
                padding: 2rem 1rem !important;
              }
              .methodology-step {
                flex-direction: column !important;
                text-align: center !important;
                margin-bottom: 2rem !important;
              }
              .methodology-step > div {
                padding: 0 !important;
                text-align: center !important;
                margin-bottom: 1rem;
              }
              .methodology-timeline-line {
                display: none !important;
              }
              .methodology-step-number {
                position: static !important;
                margin: 1rem auto !important;
              }
            }
          `}
        </style>
        <div className="strip-container" style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="section-heading center-text" style={{ ...homePageStyles.headings, fontSize: '2rem', color: '#111827', marginBottom: '1rem' }}>Our Teaching Methodology</h2>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            
          </div>
          
          <div style={{ position: 'relative', width: '100%', margin: '0' }}>
            {/* Vertical Timeline Line */}
            <div className="methodology-timeline-line" style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '2px',
              background: '#e5e7eb',
              transform: 'translateX(-50%)'
            }}></div>
            
            {/* Step 1 - Interactive Learning (Left) */}
            <div className="methodology-step" style={{ display: 'flex', alignItems: 'center', marginBottom: '4rem', position: 'relative' }}>
              <div style={{ flex: 1, textAlign: 'right', paddingRight: '3rem' }}>
                <h3 style={{ ...homePageStyles.headings, fontSize: '1.5rem', color: '#111827', marginBottom: '0.5rem', fontWeight: '700' }}>Interactive Learning</h3>
                <p style={{ ...homePageStyles.body, color: '#6b7280', fontSize: '1rem', lineHeight: '1.6' }}>Smart classrooms with digital boards and multimedia presentations for enhanced understanding</p>
              </div>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#ffffff',
                border: '4px solid #0369a1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 2,
                boxShadow: '0 4px 12px rgba(3, 105, 161, 0.2)'
              }}>
                <div style={{ fontSize: '2rem', color: '#0369a1' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
                  </svg>
                </div>
              </div>
              <div style={{ flex: 1, paddingLeft: '3rem' }}>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&crop=center" 
                  alt="Interactive Learning" 
                  style={{
                    width: '100%',
                    maxWidth: '250px',
                    height: '150px',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </div>
              <div className="methodology-step-number" style={{
                position: 'absolute',
                left: 'calc(50% - 15px)',
                top: '-10px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: '#0369a1',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: '700'
              }}>1</div>
            </div>
            
            {/* Step 2 - Practical Approach (Right) */}
            <div className="methodology-step" style={{ display: 'flex', alignItems: 'center', marginBottom: '4rem', position: 'relative' }}>
              <div style={{ flex: 1, paddingRight: '3rem' }}>
                <img 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=200&fit=crop&crop=center" 
                  alt="Practical Learning" 
                  style={{
                    width: '100%',
                    maxWidth: '250px',
                    height: '150px',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </div>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#ffffff',
                border: '4px solid #059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 2,
                boxShadow: '0 4px 12px rgba(5, 150, 105, 0.2)'
              }}>
                <div style={{ fontSize: '2rem', color: '#059669' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
              </div>
              <div style={{ flex: 1, textAlign: 'left', paddingLeft: '3rem' }}>
                <h3 style={{ ...homePageStyles.headings, fontSize: '1.5rem', color: '#111827', marginBottom: '0.5rem', fontWeight: '700' }}>Practical Approach</h3>
                <p style={{ ...homePageStyles.body, color: '#6b7280', fontSize: '1rem', lineHeight: '1.6' }}>Well-equipped laboratories for hands-on experiments and practical learning experiences</p>
              </div>
              <div className="methodology-step-number" style={{
                position: 'absolute',
                left: 'calc(50% - 15px)',
                top: '-10px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: '#059669',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: '700'
              }}>2</div>
            </div>
            
            {/* Step 3 - Regular Assessments (Left) */}
            <div className="methodology-step" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
              <div style={{ flex: 1, textAlign: 'right', paddingRight: '3rem' }}>
                <h3 style={{ ...homePageStyles.headings, fontSize: '1.5rem', color: '#111827', marginBottom: '0.5rem', fontWeight: '700' }}>Regular Assessments</h3>
                <p style={{ ...homePageStyles.body, color: '#6b7280', fontSize: '1rem', lineHeight: '1.6' }}>Continuous evaluation through weekly tests and mock exams to track student progress</p>
              </div>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#ffffff',
                border: '4px solid #7c3aed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 2,
                boxShadow: '0 4px 12px rgba(124, 58, 237, 0.2)'
              }}>
                <div style={{ fontSize: '2rem', color: '#7c3aed' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
              </div>
              <div style={{ flex: 1, paddingLeft: '3rem' }}>
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop&crop=center" 
                  alt="Regular Assessments" 
                  style={{
                    width: '100%',
                    maxWidth: '250px',
                    height: '150px',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </div>
              <div className="methodology-step-number" style={{
                position: 'absolute',
                left: 'calc(50% - 15px)',
                top: '-10px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: '#7c3aed',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: '700'
              }}>3</div>
            </div>
          </div>
        </div>
      </section>

      <section className="faculty-overview-strip" style={{ 
        padding: '4rem 0', 
        background: '#f8f9fa'
      }}>
        <style>
          {`
            .faculty-scroll::-webkit-scrollbar {
              height: 3px;
            }
            .faculty-scroll::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 3px;
            }
            .faculty-scroll::-webkit-scrollbar-thumb {
              background: #dc2626;
              border-radius: 3px;
            }
            .faculty-scroll::-webkit-scrollbar-thumb:hover {
              background: #b91c1c;
            }
            @media (max-width: 768px) {
              .faculty-overview-strip {
                padding: 2rem 1rem !important;
              }
              .faculty-scroll {
                gap: 1rem !important;
                padding-left: 1rem;
                padding-right: 1rem;
              }
              .faculty-card {
                width: 250px !important;
                min-height: 280px !important;
              }
            }
          `}
        </style>
       <div className="strip-container">
  <h2 
    className="section-heading center-text" 
    style={{ 
      ...homePageStyles.headings, 
      fontSize: '2rem', 
      color: '#111827', 
      marginBottom: '1rem' 
    }}
  >
    Faculty Overview
  </h2>

  <div className="strip-container">
  
  <div style={{ 
    textAlign: 'center', 
    marginBottom: '2rem', 
    padding: '0 1rem' 
  }}>
    <p 
      style={{ 
        ...homePageStyles.body, 
        fontSize: '0.875rem', 
        color: '#6b7280', 
        maxWidth: '780px', 
        margin: '0 auto', 
        lineHeight: '1.6'
      }}
    >
      Sai Chaitanya Junior College 
      is proud to have an excellent team of highly qualified, experienced, and dedicated lecturers who 
      are committed to providing quality education in the Andhra Pradesh Intermediate curriculum. 
      Our faculty members, particularly the Heads of Departments in Mathematics, Physics, Chemistry, 
      Botany, Commerce, Economics, Civics and History, possess rich academic credentials 
      including M.Sc., M.Com., M.A., B.Ed./M.Ed. qualifications along with years of valuable teaching 
      experience in reputed junior colleges across Andhra Pradesh. With their deep subject knowledge, 
      innovative teaching methods, continuous guidance, and personal attention, they inspire and 
      motivate every student to achieve outstanding results in Board examinations as well as in 
      competitive exams like JEE Main, JEE Advanced, NEET, EAMCET, CA Foundation, CLAT and other 
      entrance tests. The college management and faculty work together with utmost sincerity to 
      create a strong academic foundation, discipline, moral values, and all-round personality 
      development in every student so that they become responsible citizens and successful professionals 
      in future.
    </p>
  </div>
</div>
   </div> 
      </section>

          
          
          {/* <div className="faculty-scroll" style={{ 
            display: 'flex', 
            overflowX: 'auto', 
            gap: '2rem', 
            paddingBottom: '1rem'
          }}>
            {[
              { name: 'Dr. Ramesh Babu', position: 'Head of MPC Department', subjects: 'Mathematics, Physics, Chemistry', experience: '18+ Years', qualification: 'M.Sc Physics, Ph.D', color: '#dc2626', image: faculty1 },
              { name: 'Dr. Lakshmi Devi', position: 'Head of BiPC Department', subjects: 'Biology, Physics, Chemistry', experience: '15+ Years', qualification: 'M.Sc Botany, Ph.D', color: '#059669', image: faculty2 },
              { name: 'Prof. Srinivas Rao', position: 'Head of MEC Department', subjects: 'Mathematics, Economics, Commerce', experience: '12+ Years', qualification: 'M.Com, MBA, CA', color: '#7c3aed', image: faculty3 },
              { name: 'Dr. Madhavi Reddy', position: 'Head of CEC Department', subjects: 'Civics, Economics, Commerce', experience: '14+ Years', qualification: 'M.A Economics, Ph.D', color: '#d97706', image: faculty4 },
              { name: 'Prof. Venkatesh Kumar', position: 'Head of HEC Department', subjects: 'History, Economics, Civics', experience: '16+ Years', qualification: 'M.A History, M.Phil', color: '#2563eb', image: faculty5 }
            ].map((faculty, index) => (
              <div key={index} className="faculty-card" style={{
                background: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                border: '2px solid #dc262620',
                transition: 'all 0.3s ease',
                position: 'relative',
                minHeight: '320px',
                width: '300px',
                flexShrink: 0,
                backgroundImage: 'linear-gradient(135deg, #fefcf8 0%, #faf7f0 100%)',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#dc2626';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#dc262620';
              }}>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '4px',
                  background: 'linear-gradient(to bottom, #dc2626, #dc2626dd)'
                }}></div>
                
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={faculty.image}
                    alt={faculty.name}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                
                <div style={{ padding: '1rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem', ...homePageStyles.headings }}>
                    {faculty.name}
                  </h3>
                  <p style={{ fontSize: '0.75rem', color: '#4b5563', lineHeight: '1.4', marginBottom: '0.5rem', ...homePageStyles.body }}>
                    {faculty.position}
                  </p>
                  <div style={{ fontSize: '0.7rem', color: '#6b7280', marginBottom: '0.5rem', ...homePageStyles.body }}>
                    Specializes in {faculty.subjects}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#6b7280', ...homePageStyles.body }}>
                    {faculty.qualification}
                  </div>
                </div>
              </div>
            ))}
          </div>*/}
     

      

      {/* Academic Calendar - Simple Grid */}
      <section style={{ padding: '2rem 0', background: '#f8f9fa' }}>
        <style>
          {`
            .calendar-scroll::-webkit-scrollbar {
              height: 4px;
            }
            .calendar-scroll::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 4px;
            }
            .calendar-scroll::-webkit-scrollbar-thumb {
              background: #dc2626;
              border-radius: 4px;
            }
            @media (max-width: 768px) {
              .calendar-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 1rem !important;
              }
              .calendar-section {
                padding: 2rem 1rem !important;
              }
            }
          `}
        </style>
        <div className="calendar-section" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '1rem' }}>
              Academic Calendar 2024-25
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Complete academic year overview with key dates, examinations, and important events
            </p>
          </div>
          
          <div className="calendar-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            {[
              { month: 'JAN', title: 'Admissions Open', desc: 'New student admissions\nSankranti holidays', color: '#dc2626', date: '1-31' },
              { month: 'FEB', title: 'Practical Exams', desc: 'Lab practicals\nRevision classes', color: '#2563eb', date: '1-28' },
              { month: 'MAR', title: 'Board Exams', desc: 'IPE theory exams\nFinal assessments', color: '#059669', date: '1-31' },
              { month: 'APR', title: 'Summer Break', desc: 'Vacation period\nSummer activities', color: '#d97706', date: '1-30' },
              { month: 'MAY', title: 'Results', desc: 'Result declaration\nCounseling sessions', color: '#d97706', date: '1-31' },
              { month: 'JUN', title: 'New Session', desc: 'Classes begin\nOrientation program', color: '#7c3aed', date: '1-30' },
              { month: 'JUL', title: 'Regular Classes', desc: 'Full curriculum\nSyllabus coverage', color: '#7c3aed', date: '1-31' },
              { month: 'AUG', title: 'First Term', desc: 'Unit tests\nAssessments', color: '#dc2626', date: '1-31' },
              { month: 'SEP', title: 'Quarterly Exams', desc: 'First quarter exams\nDussehra holidays', color: '#dc2626', date: '1-30' },
              { month: 'OCT', title: 'Festivals', desc: 'Diwali celebrations\nRevision classes', color: '#2563eb', date: '1-31' },
              { month: 'NOV', title: 'Half-Yearly', desc: 'Mid-term exams\nProgress evaluation', color: '#059669', date: '1-30' },
              { month: 'DEC', title: 'Winter Activities', desc: 'Cultural events\nPre-final prep', color: '#d97706', date: '1-31' }
            ].map((event, index) => (
              <div key={index} style={{
                background: '#ffffff',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: `2px solid ${event.color}20`,
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
                e.currentTarget.style.borderColor = event.color;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = `${event.color}20`;
              }}>
                {/* Month Badge */}
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: event.color,
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                }}>
                  {event.month}
                </div>
                
                {/* Date */}
                <div style={{
                  fontSize: '0.75rem',
                  color: '#6b7280',
                  textAlign: 'center',
                  marginTop: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  {event.date}
                </div>
                
                {/* Title */}
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '0.75rem',
                  textAlign: 'center',
                  ...homePageStyles.headings
                }}>
                  {event.title}
                </h3>
                
                {/* Description */}
                <p style={{
                  fontSize: '0.75rem',
                  color: '#6b7280',
                  lineHeight: '1.5',
                  whiteSpace: 'pre-line',
                  textAlign: 'center',
                  ...homePageStyles.body
                }}>
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}