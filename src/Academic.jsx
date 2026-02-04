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
import teachingImage1 from "./assets/Photos/Teaching Methdodolgy/image.png";

export default function Academic() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#teaching-methodology') {
      setTimeout(() => {
        const element = document.getElementById('teaching-methodology');
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
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
                margin-top: 110px !important;
                padding: 1.5rem 0 !important;
              }
              .courses-grid {
                display: grid !important;
                grid-template-columns: 1fr !important;
                gap: 1.5rem !important;
                padding: 0 1rem !important;
              }
              .course-card {
                min-width: unset !important;
                padding: 1.5rem !important;
              }
            }
            @media (max-width: 480px) {
              .courses-strip {
                padding: 1rem 0 !important;
              }
              .courses-grid {
                gap: 1rem !important;
                padding: 0 1rem !important;
              }
              .course-card {
                padding: 1.25rem !important;
              }
            }
          `}
        </style>
        <div className="strip-container">
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <h2 className="section-heading center-text" style={{
              ...homePageStyles.headings,
              color: '#111827'
            }}>
              Courses Offered
            </h2>
          </div>
          <p style={{ ...homePageStyles.body, fontSize: '0.875rem', color: '#6b7280', width: '100%', textAlign: 'center', margin: '0 0 3rem 0', lineHeight: '1.6' }}>
            Choose from our comprehensive range of intermediate courses designed to prepare students for competitive exams and higher education with expert faculty guidance and proven teaching methodologies.
          </p>
        </div>
        <div className="courses-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          width: '100%',
          padding: '5px 39px',
          boxSizing: 'border-box'
        }}>
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
                <h3 className="process-title" style={{ ...homePageStyles.headings, fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>
                  {course.subtitle}
                </h3>

                <p className="process-description" style={{
                  ...homePageStyles.body,
                  fontSize: '12px',
                  color: '#4b5563',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}>
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
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </Link>
        </div>
      </section>

      {/* TEACHING METHODOLOGY STRIP */}
      <section id="teaching-methodology" className="teaching-methodology-strip" style={{
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
                padding: 3rem 1rem !important;
                background-attachment: scroll !important;
              }
              .methodology-step {
                flex-direction: column !important;
                text-align: center !important;
                margin-bottom: 3rem !important;
                gap: 1.5rem;
              }
              .methodology-step > div {
                padding: 0 !important;
                text-align: center !important;
              }
              .methodology-timeline-line {
                display: none !important;
              }
              .methodology-step-number {
                position: static !important;
                margin: 0 auto !important;
                transform: none !important;
              }
              .methodology-img {
                max-width: 100% !important;
                height: auto !important;
                aspect-ratio: 16/10;
              }
            }
            .methodology-img:hover {
              transform: scale(1.03);
            }
          `}
        </style>
        <div className="strip-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-heading center-text" style={{
              ...homePageStyles.headings,
              color: '#111827'
            }}>
              Our Teaching Methodology
            </h2>
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
              <div style={{ flex: 1, textAlign: 'left', paddingRight: '3rem' }}>
                <h3 style={{ ...homePageStyles.headings, fontSize: '1.5rem', color: '#111827', marginBottom: '0.5rem', fontWeight: '700' }}>Interactive Learning</h3>
                <p style={{ ...homePageStyles.body, color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.7', textAlign: 'justify' }}>
                  Our smart classrooms integrate cutting-edge digital boards and multimedia tools to transform passive listening into an immersive experience.
                  Lessons come alive through high-quality videos and 3D animations, making complex theories intuitive and memorable for every student.
                </p>
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
                    <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
                  </svg>
                </div>
              </div>
              <div style={{ flex: 1, paddingLeft: '3rem' }}>
                <img
                  src={teachingImage1}
                  alt="Interactive Learning"
                  className="methodology-img"
                  style={{
                    width: '100%',
                    maxWidth: '450px',
                    height: '280px',
                    borderRadius: '16px',
                    objectFit: 'cover',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',

                    transition: 'transform 0.5s ease'
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
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=500&fit=crop&crop=center"
                  alt="Practical Learning"
                  className="methodology-img"
                  style={{
                    width: '100%',
                    maxWidth: '450px',
                    height: '280px',
                    borderRadius: '16px',
                    objectFit: 'cover',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                    transition: 'transform 0.5s ease'
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
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
              </div>
              <div style={{ flex: 1, textAlign: 'left', paddingLeft: '3rem' }}>
                <h3 style={{ ...homePageStyles.headings, fontSize: '1.5rem', color: '#111827', marginBottom: '0.5rem', fontWeight: '700' }}>Practical Approach</h3>
                <p style={{ ...homePageStyles.body, color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.7', textAlign: 'justify' }}>
                  We bridge the gap between theory and application through state-of-the-art laboratories.
                  Our hands-on experimental environment encourages students to explore, analyze, and innovate,
                  building technical proficiency and deep-seated confidence in scientific principles.
                </p>
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
              <div style={{ flex: 1, textAlign: 'left', paddingRight: '3rem' }}>
                <h3 style={{ ...homePageStyles.headings, fontSize: '1.5rem', color: '#111827', marginBottom: '0.5rem', fontWeight: '700' }}>Regular Assessments</h3>
                <p style={{ ...homePageStyles.body, color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.7', textAlign: 'justify' }}>
                  We ensure consistent academic growth through a structured evaluation system.
                  From weekly diagnostic tests to national-level mock exams, our continuous assessment strategy
                  helps identify learning gaps early and provides personalized feedback for steady improvement.
                </p>
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
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                  </svg>
                </div>
              </div>
              <div style={{ flex: 1, paddingLeft: '3rem' }}>
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop&crop=center"
                  alt="Regular Assessments"
                  className="methodology-img"
                  style={{
                    width: '100%',
                    maxWidth: '450px',
                    height: '280px',
                    borderRadius: '16px',
                    objectFit: 'cover',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                    transition: 'transform 0.5s ease'
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

          {/* View Results Button */}
          <div style={{ textAlign: 'center', marginTop: '4rem', position: 'relative', zIndex: 2 }}>
            <Link
              to="/results"
              onClick={() => window.scrollTo(0, 0)}
              style={{
                padding: '0.75rem 1.5rem',
                color: '#c75e5eff',
                border: '2px solid #dc262620',
                borderRadius: '12px',
                fontSize: '0.875rem',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                background: 'white'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px -5px rgba(0, 0, 0, 0.15)';
                e.target.style.borderColor = '#dc2626';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                e.target.style.borderColor = '#dc262620';
              }}
            >
              View Results & Achievements
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
              </svg>
            </Link>
          </div>
        </div>
      </section >

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
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 className="section-heading center-text" style={{
              ...homePageStyles.headings,
              color: '#111827'
            }}>
              Faculty Overview
            </h2>
          </div>

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
              { name: 'Prof. nivas Rao', position: 'Head of MEC Department', subjects: 'Mathematics, Economics, Commerce', experience: '12+ Years', qualification: 'M.Com, MBA, CA', color: '#7c3aed', image: faculty3 },
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

                <div style={{ padding: '1.25rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#111827', marginBottom: '0.5rem', ...homePageStyles.headings }}>
                    {faculty.name}
                  </h3>
                  <div style={{ color: '#dc2626', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', ...homePageStyles.body }}>
                    {faculty.expert}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#6b7280', ...homePageStyles.body }}>
                    {faculty.exp}
                  </div>
                </div>
 style={{ fontSize: '0.7rem', color: '#6b7280', ...homePageStyles.body }}>
                    {faculty.qualification}
                  </div>
                </div>
              </div>
            ))}
          </div>*/}




      {/* Academic Calendar - Simple Grid */}
      <section className="calendar-bg-section" style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
      }}>
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
                gap: 1.5rem !important;
              }
              .calendar-section {
                padding: 3rem 1rem !important;
              }
              .calendar-bg-section {
                background-attachment: scroll !important;
              }
            }
            @media (max-width: 480px) {
              .calendar-grid {
                grid-template-columns: 1fr !important;
                gap: 1.5rem !important;
              }
            }
          `}
        </style>
        <div className="calendar-section" style={{
          maxWidth: '1400px', margin: '0 auto', padding: '30px 2rem',
          backgroundColor: ' rgba(255, 255, 255, 0.9)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 className="section-heading center-text" style={{
              ...homePageStyles.headings,
              color: '#111827'
            }}>
              Academic Calendar
            </h2>
            <p style={{
              ...homePageStyles.body,
              color: '#6b7280',
              fontSize: '0.95rem',
              marginTop: '0.5rem'
            }}>
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
    </div >
  );
}