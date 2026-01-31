import React, { useState, useEffect } from "react";
import "./assets/styles.css";
import { heroSliderData, aboutContent, visionMissionData, featuresData } from "./data/staticData";
import { Link } from "react-router-dom";
import image0 from "./assets/Heroic/image0.png";
import image2 from "./assets/Heroic/image2.png";
import { galleryData } from "./utils/imageLoader";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [statCounts, setStatCounts] = useState({ years: 25, students: 2000, faculty: 60, success: 100 });

  const slides = [
    { 
      image: image0, 
      title: "Admissions Open 2025-26", 
      subtitle: "Shape Your Future with Excellence",
      description: "Join India's leading junior college with 95% success rate in competitive exams",
      cta: "Apply Now",
      ctaLink: "/contact",
      badge: "Limited Seats"
    },
    { 
      image: image2, 
      title: "Modern Infrastructure", 
      subtitle: "State-of-the-art Learning Environment",
      description: "Experience world-class facilities with smart classrooms, advanced labs, and digital learning resources",
      cta: "Virtual Tour",
      ctaLink: "/gallery",
      badge: "New Campus"
    },
    { 
      image: image0, 
      title: "Expert Faculty", 
      subtitle: "Learn from the Best Educators",
      description: "Our experienced teachers with proven track record in IIT-JEE, NEET, and Board exam preparation",
      cta: "Meet Faculty",
      ctaLink: "/about",
      badge: "25+ Years Experience"
    },
    { 
      image: image2, 
      title: "100% Placement Support", 
      subtitle: "Your Success is Our Mission",
      description: "Comprehensive career guidance and placement assistance for engineering, medical, and commerce streams",
      cta: "Enquire Now",
      ctaLink: "/contact",
      badge: "Guaranteed Support"
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const statsSection = document.querySelector('.stats-strip');
          if (statsSection && !statsAnimated) {
            const rect = statsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              setStatsAnimated(true);
              animateStats();
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [statsAnimated]);

  const animateStats = () => {
    const targets = { years: 25, students: 2000, faculty: 60, success: 100 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStatCounts({
        years: Math.floor(targets.years * progress),
        students: Math.floor(targets.students * progress),
        faculty: Math.floor(targets.faculty * progress),
        success: Math.floor(targets.success * progress)
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setStatCounts(targets);
      }
    }, stepTime);
  };

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
      strength: "Multiple sections available"
    },
    {
      title: "BiPC",
      subtitle: "Biology, Physics, Chemistry",
      description: "Perfect for aspiring medical professionals – prepares for NEET, EAMCET (Medical), Biotechnology, Pharmacy, and allied health sciences.",
      medium: "English / Telugu Medium",
      strength: "Multiple sections available"
    },
    {
      title: "HEC",
      subtitle: "History, Economics, Civics",
      description: "Suited for humanities, social sciences, civil services (UPSC/APPSC), law, journalism, and teaching careers.",
      medium: "English / Telugu Medium",
      strength: "Available sections"
    },
    {
      title: "CEC",
      subtitle: "Civics, Economics, Commerce",
      description: "Focuses on commerce fundamentals – great foundation for B.Com, CA, CS, Banking, Business Management, and entrepreneurship.",
      medium: "English / Telugu Medium",
      strength: "Available sections"
    },
    {
      title: "MEC",
      subtitle: "Mathematics, Economics, Commerce",
      description: "Blends quantitative skills with commerce – ideal for BBA, MBA, Economics honors, Data Analytics, Finance, and competitive exams like IPMAT.",
      medium: "English / Telugu Medium",
      strength: "Available sections"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Determine contact method based on filled fields
    let contactMethod = '';
    if (formData.email && formData.phone) {
      contactMethod = `We'll contact you via email (${formData.email}) or phone (${formData.phone})`;
    } else if (formData.email) {
      contactMethod = `We'll contact you via email at ${formData.email}`;
    } else if (formData.phone) {
      contactMethod = `We'll contact you via phone at ${formData.phone}`;
    } else {
      contactMethod = 'We\'ll contact you soon';
    }
    
    setSuccessMessage(`Thank you ${formData.name}! Your inquiry has been submitted successfully. ${contactMethod} within 24 hours.`);
    setShowSuccess(true);
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="homepage-container">

      {/* HERO SECTION */}
      <section className="hero-strip" style={{ position: 'relative', width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', height: '0', paddingBottom: '45%', overflow: 'hidden' }}>
        {/* Slideshow Background */}
        <div className="hero-slideshow" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: currentSlide === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                zIndex: currentSlide === index ? 1 : 0
              }}
            >
              <img 
                src={slide.image} 
                alt={slide.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
          ))}
        </div>

        {/* Hero Content Overlay */}
        <div className="hero-content-wrapper" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          zIndex: 2,
          padding: '0 2rem',
          background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.2) 40%, transparent 50%)'
        }}>
          <div className="hero-content" style={{
            textAlign: 'left',
            color: 'white',
            maxWidth: '600px',
            position: 'relative'
          }}>
           
            
            <h1 className="hero-main-heading" style={{
              ...homePageStyles.headings,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
              marginBottom: '1rem',
              lineHeight: '1.1'
            }}>
              {slides[currentSlide]?.title}
            </h1>
            
            <h2 style={{
              ...homePageStyles.headings,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: '400',
              color: 'rgba(255,255,255,0.95)',
              marginBottom: '1.5rem',
              textShadow: '1px 1px 4px rgba(0,0,0,0.7)'
            }}>
              {slides[currentSlide]?.subtitle}
            </h2>
            
            <p style={{
              ...homePageStyles.body,
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              margin: '0 auto 2.5rem',
              lineHeight: '1.6',
              textShadow: '1px 1px 3px rgba(0,0,0,0.7)'
            }}>
              {slides[currentSlide]?.description}
            </p>
            
            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link 
                to={slides[currentSlide]?.ctaLink === '/contact' ? '/contact#contact-form' : slides[currentSlide]?.ctaLink || '/contact#contact-form'}
                onClick={(e) => {
                  if (slides[currentSlide]?.ctaLink === '/contact') {
                    e.preventDefault();
                    window.location.href = '/contact#contact-form';
                  }
                }}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transform: 'translateY(0)',
                  ...homePageStyles.body
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(220, 38, 38, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(220, 38, 38, 0.4)';
                }}
              >
                {slides[currentSlide]?.cta}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                </svg>
              </Link>
              
              <a 
                href="tel:+919642433777"
                onClick={(e) => {
                  if (!/Mobi|Android/i.test(navigator.userAgent)) {
                    e.preventDefault();
                    alert('Please call us at +91 9642433777');
                  }
                }}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid #dc262620',
                  borderRadius: '12px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transform: 'translateY(0)',
                  ...homePageStyles.body
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.25)';
                  e.target.style.borderColor = 'rgba(255,255,255,0.5)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.15)';
                  e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

 {/* ABOUT STRIP */}
      <section className="about-strip" style={{ 
        padding: '4rem 0', 
        background: '#ffffff'
      }}>
        <div className="strip-container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            {/* <h2 className="section-heading" style={{ ...homePageStyles.headings, fontSize: '2rem', color: '#111827', marginBottom: '0.5rem' }}>About Sai Chaitanya Junior College</h2> */}
          </div>
          
          {/* Main Content Layout */}
          <style>
            {`
              @media (max-width: 768px) {
                .about-content-grid {
                  grid-template-columns: 1fr !important;
                  gap: 2rem !important;
                }
                .about-image {
                  display: none !important;
                }
              }
            `}
          </style>
          <div className="about-content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Left Side - Image */}
            <div className="about-image" style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                border: '2px solid #dc262620'
              }}>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: '4px',
                  background: 'linear-gradient(to right, #dc2626, #dc2626dd)'
                }}></div>
                <img 
                  src={image2} 
                  alt="Sai Chaitanya Junior College" 
                  style={{ 
                    width: '100%', 
                    height: '450px', 
                    objectFit: 'fill'
                  }} 
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(3, 105, 161, 0.1))'
                }}></div>
              </div>
              
              {/* Floating Stats Card */}
             
            </div>
            
            {/* Right Side - Content */}
            <div>
              <div style={{ marginBottom: '2rem' }}>
                {/* <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #dc2626, #b91c1c)', color: 'white', padding: '0.5rem 1rem', borderRadius: '25px', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem' }}>🏆 Premier Educational Institution</div> */}
                <h3 style={{ ...homePageStyles.headings, fontSize: '2rem', color: '#111827', marginBottom: '1rem', lineHeight: '1.3' }}>Shaping Tomorrow's Leaders Through Academic Excellence</h3>
                <p style={{ ...homePageStyles.body, fontSize: '0.875rem', lineHeight: '1.7', color: '#4b5563', marginBottom: '1.5rem' }}>
                  Since 1995, Sai Chaitanya Junior College has been synonymous with academic excellence and holistic development. We have successfully mentored over 10,000+ students, helping them achieve their dreams in medical, engineering, and other professional fields.                  Education is the cornerstone of progress. At Sai Chaitanya Junior College, we are committed to providing an educational experience that nurtures young minds and prepares students for tomorrow's challenges.
                  Education is the cornerstone of progress. At Sai Chaitanya Junior College, we are committed to providing an educational experience that nurtures young minds and prepares students for tomorrow's challenges.

                </p>
              </div>
              
              {/* Key Features */}
              
                  
                  
                  
                 
                  
                 
              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Link 
                  to="/academics"
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 12px 35px rgba(220, 38, 38, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 25px rgba(220, 38, 38, 0.3)';
                  }}
                >
                  Explore Academics
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                  </svg>
                </Link>
                
                <Link 
                  to="/results"
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: 'transparent',
                    color: '#dc2626',
                    border: '2px solid #dc262620',
                    borderRadius: '12px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
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
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                  </svg>
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stats-strip" style={{ 
        padding: '2rem 0'
      }}>
        <div className="strip-container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-number" style={homePageStyles.headings}>{statCounts.years}+</h3>
              <p className="stat-label" style={homePageStyles.body}>Years of Excellence</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number" style={homePageStyles.headings}>{statCounts.students}+</h3>
              <p className="stat-label" style={homePageStyles.body}>Happy Students</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number" style={homePageStyles.headings}>{statCounts.faculty}+</h3>
              <p className="stat-label" style={homePageStyles.body}>Expert Faculty</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number" style={homePageStyles.headings}>{statCounts.success}%</h3>
              <p className="stat-label" style={homePageStyles.body}>Success Rate</p>
            </div>
          </div>
        </div>
      </section>
       {/* WHY CHOOSE STRIP */}
      <section className="why-choose-strip" style={{ padding: '3rem 0', background: '#ffffff' }}>
        <div className="strip-container">
          <h2 className="section-heading center-text" style={{ ...homePageStyles.headings, marginBottom: '3rem' }}>Why Choose Sai Chaitanya Junior College</h2>
          <style>
            {`
              @media (max-width: 768px) {
                .why-choose-grid {
                  display: flex !important;
                  overflow-x: auto !important;
                  gap: 1rem !important;
                  padding-bottom: 1rem !important;
                }
                .why-choose-card {
                  min-width: 280px !important;
                  flex-shrink: 0 !important;
                }
              }
            `}
          </style>
          <div className="why-choose-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            {[
              {
                title: 'Proven Academic Excellence',
                description: 'Year after year, our students secure top ranks in Board exams, JEE, NEET & other entrances',
                color: '#dc2626',
                svg: <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              },
              {
                title: 'Highly Experienced Faculty',
                description: 'Dedicated team of expert lecturers with proven track record in competitive exam coaching',
                color: '#059669',
                svg: <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
              },
              {
                title: 'Personalized Attention & Mentorship',
                description: 'Limited batch sizes for individual guidance, doubt-clearing & personalized study plans',
                color: '#7c3aed',
                svg: <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M19 13v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2z"/></svg>
              },
              {
                title: 'World-Class Infrastructure',
                description: 'Modern labs, digital classrooms, library, sports facilities & safe campus environment',
                color: '#ea580c',
                svg: <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/><path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
              },
              {
                title: 'Holistic & Balanced Development',
                description: 'Focus on academics + extracurriculars, sports, life skills & mental well-being',
                color: '#0369a1',
                svg: <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/><circle cx="12" cy="12" r="3"/></svg>
              },
              {
                title: 'Strong Career Guidance',
                description: 'Comprehensive support for higher education, counseling & future-ready skills',
                color: '#be185d',
                svg: <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><path d="M12 6v6l4 2-4-2V6z"/></svg>
              }
            ].map((feature, index) => (
              <div key={index} className="why-choose-card" style={{
                background: `linear-gradient(135deg, ${feature.color}08, ${feature.color}15)`,
                borderRadius: '16px',
                padding: '2.5rem',
                boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.1)',
                border: `1px solid ${feature.color}25`,
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  color: 'white',
                  boxShadow: `0 8px 20px ${feature.color}33`
                }}>
                  {feature.svg}
                </div>
                <h4 style={{ ...homePageStyles.headings, fontSize: '1rem', color: '#111827', marginBottom: '1rem', fontWeight: '600' }}>
                  {feature.title}
                </h4>
                <p style={{ ...homePageStyles.body, fontSize: '0.75rem', color: '#6b7280', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* View Gallery Button */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link 
              to="/gallery"
              onClick={() => window.scrollTo(0, 0)}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: '#dc2626',
                border: '2px solid #dc262620',
                borderRadius: '12px',
                fontSize: '0.875rem',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
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
              View Gallery
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST NOTICES / ANNOUNCEMENTS STRIP */}
      {/* <section className="notices-strip" style={{ background: '#f8f9fa', padding: '3rem 0' }}>
        <div className="strip-container">
        <h2 className="section-heading center-text" style={homePageStyles.headings}>Latest Notices & Announcements</h2>
          <style>
            {`
              @media (max-width: 768px) {
                .notices-grid {
                  display: flex !important;
                  overflow-x: auto !important;
                  gap: 1rem !important;
                  padding-bottom: 1rem !important;
                }
                .notice-card {
                  min-width: 300px !important;
                  flex-shrink: 0 !important;
                }
              }
            `}
          </style>
          <div className="notices-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            {[
              {
                type: 'URGENT',
                title: 'Admission Process 2025-26 Started',
                content: 'Online applications are now open for Intermediate First Year admissions. Last date for submission is March 15, 2025. Required documents: SSC marks memo, TC, caste certificate.',
                date: '2025-01-15',
                priority: 'high'
              },
              {
                type: 'EXAM',
                title: 'Mid-Term Examination Schedule',
                content: 'Mid-term examinations for all streams (MPC, BiPC, CEC, HEC, MEC) will commence from February 10, 2025. Time table available on notice board and website.',
                date: '2025-01-12',
                priority: 'medium'
              },
              {
                type: 'EVENT',
                title: 'Annual Science Exhibition 2025',
                content: 'Students are invited to participate in the Annual Science Exhibition. Registration deadline: January 25, 2025. Prizes worth ₹50,000 for winners.',
                date: '2025-01-10',
                priority: 'medium'
              },
              {
                type: 'ACADEMIC',
                title: 'Special Coaching Classes for NEET/JEE',
                content: 'Additional coaching sessions for NEET and JEE preparation starting from January 20, 2025. Limited seats available. Contact office for registration.',
                date: '2025-01-08',
                priority: 'medium'
              },
              {
                type: 'HOLIDAY',
                title: 'Republic Day Celebration',
                content: 'College will remain closed on January 26, 2025 for Republic Day. Flag hoisting ceremony at 9:00 AM. All students and staff are invited.',
                date: '2025-01-05',
                priority: 'low'
              },
              {
                type: 'FEE',
                title: 'Fee Payment Reminder',
                content: 'Second installment fee payment due date is January 31, 2025. Late fee of ₹500 will be charged after the due date. Pay online or at college office.',
                date: '2025-01-03',
                priority: 'high'
              }
            ].map((notice, index) => (
              <div key={index} className="notice-card" style={{
                background: '#ffffff',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                border: `3px solid ${notice.priority === 'high' ? '#dc2626' : notice.priority === 'medium' ? '#f59e0b' : '#10b981'}`,
                position: 'relative',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-1px',
                  right: '-1px',
                  background: notice.priority === 'high' ? '#dc2626' : notice.priority === 'medium' ? '#f59e0b' : '#10b981',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '0 12px 0 12px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  {notice.type}
                </div>
                
                <div style={{ marginTop: '0.5rem' }}>
                  <h3 style={{ ...homePageStyles.headings, fontSize: '1rem', color: '#111827', marginBottom: '0.75rem' }}>
                    {notice.title}
                  </h3>
                  
                  <p style={{ ...homePageStyles.body, fontSize: '0.75rem', color: '#4b5563', lineHeight: '1.6', marginBottom: '1rem' }}>
                    {notice.content}
                  </p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ ...homePageStyles.body, fontSize: '0.875rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                      </svg>
                      {new Date(notice.date).toLocaleDateString('en-IN', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    {notice.priority === 'high' && (
                      <span style={{
                        background: '#fef2f2',
                        color: '#dc2626',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                        </svg>
                        URGENT
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link 
              to="/announcements"
              style={{
                padding: '0.75rem 2rem',
                background: '#dc2626',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#b91c1c';
              }}
              onMouseOut={(e) => {
                e.target.style.background = '#dc2626';
              }}
              
            >
              View All Announcements →
            </Link>
          </div>
        </div> */}
      {/* </section> */}
  
      {/* FINAL CTA STRIP */}
      <section className="cta-strip" style={{ 
        padding: '3rem 0',
        background: '#ffffff'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ ...homePageStyles.headings, fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>Ready to Join Us?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            {/* Contact Information */}
            <div style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)', borderRadius: '16px', padding: '2.5rem', color: 'white' }}>
              <h3 style={{ ...homePageStyles.headings, fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem', color: 'white' }}>Get In Touch</h3>
              
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ ...homePageStyles.headings, fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>Contact Information</h4>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div>
                      <p style={{ ...homePageStyles.body, fontWeight: '600', marginBottom: '0.25rem' }}>Phone</p>
                      <a href="tel:+919642433777" style={{ ...homePageStyles.body, color: 'white', textDecoration: 'none' }}>+91 9642433777</a>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div>
                      <p style={{ ...homePageStyles.body, fontWeight: '600', marginBottom: '0.25rem' }}>Email</p>
                      <a href="mailto:office@viswamengg.in" style={{ ...homePageStyles.body, color: 'white', textDecoration: 'none' }}>info@saichaitanyajuniorcollege.edu.in</a>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div>
                      <p style={{ ...homePageStyles.body, fontWeight: '600', marginBottom: '0.25rem' }}>Address</p>
                      <p style={{ ...homePageStyles.body, lineHeight: '1.5' }}>D.No: 3/145-9-6-4-A-8, Prasanth Nagar Extension,<br />Sai Raghavendra Nagar, Madanapalle – 517325,<br />Chittoor District, Andhra Pradesh</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 style={{ ...homePageStyles.headings, fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>Office Hours</h4>
                <div style={{ ...homePageStyles.body, fontSize: '0.875rem', lineHeight: '1.6' }}>
                  <p><strong>Monday - Saturday:</strong> 9:00 AM - 6:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div> 
            </div>
            
            {/* CTA Content */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.1)', border: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ ...homePageStyles.headings, fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#111827' }}>Start Your Journey</h3>
              <p style={{ ...homePageStyles.body, fontSize: '0.875rem', color: '#4b5563', marginBottom: '2rem', lineHeight: '1.6' }}>
                Take the first step towards academic excellence. Contact us today to learn more about admissions, courses, and how we can help shape your future.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                <Link 
                  to="/contact#contact-form"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/contact#contact-form';
                  }}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-block',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = '#b91c1c';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = '#dc2626';
                  }}
                >
                  Contact Us
                </Link>
                <a 
                  href="tel:+919642433777"
                  onClick={(e) => {
                    if (!/Mobi|Android/i.test(navigator.userAgent)) {
                      e.preventDefault();
                      alert('Please call us at +91 9642433777');
                    }
                  }}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: 'transparent',
                    color: '#dc2626',
                    border: '2px solid #dc262620',
                    borderRadius: '12px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-block',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = '#dc2626';
                    e.target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#dc2626';
                  }}
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}