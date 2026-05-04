import React, { useState, useEffect } from "react";

import "./assets/styles.css";

import { heroSliderData, aboutContent, visionMissionData, featuresData } from "./data/staticData";

import { Link } from "react-router-dom";

import image0 from "./assets/Heroic/image0.png";

import image from "./assets/Heroic/image.png";

import image1 from "./assets/Heroic/image1.png";

import image2 from "./assets/Heroic/image2.png";

import image3 from "./assets/Heroic/image11.png";

import image4 from "./assets/Heroic/image4.png";

import image5 from "./assets/Heroic/image5.jpeg";

import ceoImage from "./assets/Photos/AboutUs/ceo.png";

import image10 from "./assets/Heroic/image10.png";

import image611 from "./assets/Heroic/image611.png";

import image100 from "./assets/Heroic/image100.png";

import { galleryData } from "./utils/imageLoader";

import MobileHeroSlider from "./components/MobileHeroSlider";

import { useResponsive } from "./hooks/useResponsive";
import SEO from "./components/SEO";


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

  const [statCounts, setStatCounts] = useState({ years: 19, students: 528, faculty: 35, success: 100 });

  const [tickerPosition, setTickerPosition] = useState(0);

  const { isMobile, isTablet, isDesktop } = useResponsive();



  const slides = [

    {

      image: image100,

      title: "Premium Education",

      subtitle: "Excellence Redefined",

      description: "World-class education with premium facilities and experienced faculty",

      cta: "Explore Excellence",

      ctaLink: "/academics",

      badge: "Premium Quality"

    },

    {

      image: image4,

      title: "Empowering Students",

      subtitle: "A Community of Achievers",

      description: "Join a vibrant community of passionate learners and future leaders",

      cta: "View Achievements",

      ctaLink: "/results",

      badge: "Student Success"

    },

    {

      image: image10,

      title: "Sports Excellence",

      subtitle: "Champions in Making",

      description: "Comprehensive sports programs fostering physical fitness and team spirit",

      cta: "Sports Programs",

      ctaLink: "/academics",

      badge: "Sports Champions"

    },

    {

      image: image,

      title: "Excellence in Education",

      subtitle: "Building Future Leaders",

      description: "Comprehensive academic programs with focus on holistic development",

      cta: "Explore Programs",

      ctaLink: "/academics",

      badge: "Quality Education"

    },

    {

      image: image611,

      title: "Research & Innovation",

      subtitle: "Pushing Boundaries",

      description: "Encouraging scientific temper and research mindset among students",

      cta: "Research Initiatives",

      ctaLink: "/academics",

      badge: "Innovation Hub"

    },

    {

      image: image3,

      title: "Holistic Development",

      subtitle: "Beyond Just Academics",

      description: "Fostering overall growth through sports, cultural activities, and leadership programs",

      cta: "Explore Activities",

      ctaLink: "/academics",

      badge: "All-round Growth"

    }

  ];



  useEffect(() => {

    const slideInterval = setInterval(() => {

      setCurrentSlide((prev) => (prev + 1) % slides.length);

    }, 5000);

    return () => clearInterval(slideInterval);

  }, [slides.length]);



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



  useEffect(() => {

    const tickerElement = document.querySelector('.ticker-content');

    if (!tickerElement) return;



    let animationId;

    let position = 0;

    const speed = window.innerWidth <= 768 ? 0.5 : 0.3; // Slower speed for mobile

    let isPaused = false; // declare isPaused here



    const animate = () => {

      if (!isPaused) {

        position -= speed;



        // Reset position when content has fully scrolled

        if (position <= -tickerElement.scrollWidth / 2) {

          position = 0;

        }



        tickerElement.style.transform = `translateX(${position}px)`;

      }



      animationId = requestAnimationFrame(animate);

    };



    // Start animation immediately

    animate();



    // Pause on hover

    const handleMouseEnter = () => {

      isPaused = true;

    };



    const handleMouseLeave = () => {

      isPaused = false;

    };



    tickerElement.addEventListener('mouseenter', handleMouseEnter);

    tickerElement.addEventListener('mouseleave', handleMouseLeave);



    return () => {

      cancelAnimationFrame(animationId);

      tickerElement.removeEventListener('mouseenter', handleMouseEnter);

      tickerElement.removeEventListener('mouseleave', handleMouseLeave);

    };

  }, []);



  const animateStats = () => {

    const targets = { years: 19, students: 528, faculty: 35, success: 100 };

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

    <SEO
      title="Sai Chaitanya Junior College, Madanapalle | MPC, BiPC, MBiPC, MEC, CEC"
      description="Sai Chaitanya Junior College - Premium education in Madanapalle, Andhra Pradesh. 19 years of excellence with 800+ students and 35+ experienced faculty. Offering MPC, BiPC, MBiPC, MEC, and CEC courses."
      keywords="Sai Chaitanya Junior College, Madanapalle, Intermediate College, MPC BiPC MBiPC MEC CEC, NEET Coaching, JEE Coaching, Best Intermediate Junior College AP, Best Intermediate Junior College Madanapalle"
      ogUrl="https://saichaitanyacollege.com"
      canonical="https://saichaitanyacollege.com"
    />

    {/* HERO SECTION - Responsive Component Switch */}

    {isMobile ? (

      <div style={{ marginTop: '60px' }}>

        <MobileHeroSlider />

      </div>

    ) : (

      <section className="hero-strip" style={{ position: 'relative', width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', marginTop: '115px', height: 'calc(100vh - 180px)', overflow: 'hidden', minHeight: '450px !important' }}>

        {/* Slideshow Background */}

        <div className="hero-slideshow" style={{ position: 'absolute', top: 0, left: 0,  width: '100%', height: '100%' }}>

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

                alt={`${slide.title} - Sai Chaitanya Junior College Madanapalle`}

                loading={index <= 1 ? "eager" : "lazy"}

                style={{

                  width: '100%',

                  height: '100%',

                  objectFit: 'fill',

                  objectPosition: 'top'

                }}

              />

            </div>

          ))}

        </div>

      </section>

    )}



    {/* RESULTS TICKER - Only show on desktop */}

    {!isMobile && (

      <section className="results-ticker" style={{

        height: '60px',

        background: 'linear-gradient(135deg, #dc2626, #eb7932ff)',

        position: 'relative',

        overflow: 'hidden',

        display: 'flex',

        alignItems: 'center',

        borderBottom: '2px solid rgba(255, 255, 255, 0.2)'

      }}>

        <style>

          {`

            .ticker-content {

              white-space: nowrap;

              display: inline-block;

              will-change: transform;

            }

          `}

        </style>



        {/* Static Label */}

        <div style={{

          position: 'absolute',

          left: '0',

          top: '0',

          height: '100%',

          background: 'rgba(0, 0, 0, 0.3)',

          display: 'flex',

          alignItems: 'center',

          padding: '0 1rem',

          zIndex: '10',

          backdropFilter: 'blur(5px)'

        }}>

          <span style={{

            color: 'white',

            fontWeight: '700',

            fontSize: '16px',

            fontFamily: 'Poppins, sans-serif',

            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'

          }}>

            🏆AP RESULTS 2026

          </span>

        </div>



        {/* Scrolling Content */}

        <div style={{

          display: 'flex',

          alignItems: 'center',

          width: '100%',

          paddingLeft: '120px'

        }}>

          <div className="ticker-content" style={{

            display: 'flex',

            alignItems: 'center',

            gap: '4rem',

            color: 'white',

            fontSize: '14px',

            fontFamily: 'Inter, sans-serif',

            fontWeight: '500'

          }}>

            {/* AP 10th Results */}

            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>

              🏫 <strong>AP 10th (SSC) Results 2026:</strong>

              <a

                href="https://bse.ap.gov.in"

                target="_blank"

                rel="noopener noreferrer"

                style={{

                  color: '#ffffff',

                  textDecoration: 'none',

                  fontWeight: '700',

                  padding: '0.25rem 0.75rem',

                  background: 'rgba(255, 255, 255, 0.2)',

                  borderRadius: '4px',

                  transition: 'all 0.3s ease'

                }}

                onMouseOver={(e) => {

                  e.target.style.background = 'rgba(255, 255, 255, 0.3)';

                  e.target.style.transform = 'scale(1.05)';

                }}

                onMouseOut={(e) => {

                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';

                  e.target.style.transform = 'scale(1)';

                }}

              >

                BSEAP Official

              </a>

              <a

                href="https://results.bse.ap.gov.in"

                target="_blank"

                rel="noopener noreferrer"

                style={{

                  color: '#ffffff',

                  textDecoration: 'none',

                  fontWeight: '700',

                  padding: '0.25rem 0.75rem',

                  background: 'rgba(255, 255, 255, 0.2)',

                  borderRadius: '4px',

                  transition: 'all 0.3s ease'

                }}

                onMouseOver={(e) => {

                  e.target.style.background = 'rgba(255, 255, 255, 0.3)';

                  e.target.style.transform = 'scale(1.05)';

                }}

                onMouseOut={(e) => {

                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';

                  e.target.style.transform = 'scale(1)';

                }}

              >

                Results Portal

              </a>

              <span style={{ opacity: '0.8' }}>| Expected: April 23, 2026</span>

            </span>



            {/* AP Intermediate Results */}

            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>

              🎓 <strong>AP Intermediate (1st & 2nd Year) Results 2026:</strong>

              <a

                href="https://bie.ap.gov.in/"

                target="_blank"

                rel="noopener noreferrer"

                style={{

                  color: '#ffffff',

                  textDecoration: 'none',

                  fontWeight: '700',

                  padding: '0.25rem 0.75rem',

                  background: 'rgba(255, 255, 255, 0.2)',

                  borderRadius: '4px',

                  transition: 'all 0.3s ease'

                }}

                onMouseOver={(e) => {

                  e.target.style.background = 'rgba(255, 255, 255, 0.3)';

                  e.target.style.transform = 'scale(1.05)';

                }}

                onMouseOut={(e) => {

                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';

                  e.target.style.transform = 'scale(1)';

                }}

              >

                BIEAP Official

              </a>

              <span style={{ opacity: '0.8' }}>| Expected: April 2026 (after SSC)</span>

            </span>



            {/* Repeat for continuous scrolling */}

            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>

              🏫 <strong>AP 10th (SSC) Results 2026:</strong>

              <a

                href="https://bse.ap.gov.in"

                target="_blank"

                rel="noopener noreferrer"

                style={{

                  color: '#ffffff',

                  textDecoration: 'none',

                  fontWeight: '700',

                  padding: '0.25rem 0.75rem',

                  background: 'rgba(255, 255, 255, 0.2)',

                  borderRadius: '4px',

                  transition: 'all 0.3s ease'

                }}

                onMouseOver={(e) => {

                  e.target.style.background = 'rgba(255, 255, 255, 0.3)';

                  e.target.style.transform = 'scale(1.05)';

                }}

                onMouseOut={(e) => {

                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';

                  e.target.style.transform = 'scale(1)';

                }}

              >

                BSEAP Official

              </a>

              <a

                href="https://results.bse.ap.gov.in"

                target="_blank"

                rel="noopener noreferrer"

                style={{

                  color: '#ffffff',

                  textDecoration: 'none',

                  fontWeight: '700',

                  padding: '0.25rem 0.75rem',

                  background: 'rgba(255, 255, 255, 0.2)',

                  borderRadius: '4px',

                  transition: 'all 0.3s ease'

                }}

                onMouseOver={(e) => {

                  e.target.style.background = 'rgba(255, 255, 255, 0.3)';

                  e.target.style.transform = 'scale(1.05)';

                }}

                onMouseOut={(e) => {

                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';

                  e.target.style.transform = 'scale(1)';

                }}

              >

                Results Portal

              </a>

              <span style={{ opacity: '0.8' }}>| Expected: April 23, 2026</span>

            </span>



            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>

              🎓 <strong>AP Intermediate (1st & 2nd Year) Results 2026:</strong>

              <a

                href="https://bie.ap.gov.in/"

                target="_blank"

                rel="noopener noreferrer"

                style={{

                  color: '#ffffff',

                  textDecoration: 'none',

                  fontWeight: '700',

                  padding: '0.25rem 0.75rem',

                  background: 'rgba(255, 255, 255, 0.2)',

                  borderRadius: '4px',

                  transition: 'all 0.3s ease'

                }}

                onMouseOver={(e) => {

                  e.target.style.background = 'rgba(255, 255, 255, 0.3)';

                  e.target.style.transform = 'scale(1.05)';

                }}

                onMouseOut={(e) => {

                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';

                  e.target.style.transform = 'scale(1)';

                }}

              >

                BIEAP Official

              </a>

              <span style={{ opacity: '0.8' }}>| Expected: April 2026 (after SSC)</span>

            </span>

          </div>

        </div>

      </section>

    )}



    {/* STATS STRIP - Acts as a divider between Hero and About */}

    <section className="stats-strip" style={{

      padding: '2.5rem 0',

      background: '#ffffff',

      borderBottom: '1px solid #e5e7eb'

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



    {/* ABOUT STRIP */}

    <section className="about-strip" style={{

      padding: '50px 30px',

      background: '#fcfaf6',

      width: '100%'

    }}>

      <div className="strip-container">



          {/* Main Content Layout */}

          <style>

            {`

              @media (max-width: 768px) {

                .about-content-grid {

                  grid-template-columns: 1fr !important;

                  gap: 2rem !important;

                }

                .about-image {

                  order: 2; /* Move image below text on mobile */

                }

                .about-text {

                  order: 1;

                }

              }

            `}

          </style>

          <div className="about-content-grid" style={{

            display: 'grid',

            gridTemplateColumns: '1fr 1fr',

            gap: '4rem',

            alignItems: 'center', // Center vertically and keep natural heights

            maxWidth: '1200px',

            margin: '0 auto'

          }}>

            {/* Left Side - Image */}

            <div className="about-image" style={{ display: 'flex', position: 'relative' }}>

              {/* Industry Style Decorative Background Border */}

              <div style={{

                position: 'absolute',

                top: '-20px',

                left: '-20px',

                width: '60px',

                height: '60px',

                borderTop: '1px solid #eb7932ff',

                borderLeft: '6px solid #eb7932ff',

                zIndex: 0,

                borderRadius: '15px 0 0 0'

              }}></div>



              <div style={{

                position: 'absolute',

                bottom: '-20px',

                right: '-20px',

                width: '60px',

                height: '60px',

                borderBottom: '6px solid #eb7932ff',

                borderRight: '1px solid #eb7932ff',

                zIndex: 0,

                borderRadius: '0 0 15px 0'

              }}></div>



              <div style={{

                position: 'relative',

                zIndex: 1,

                borderRadius: '20px',

                overflow: 'hidden',

                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',

                border: '2px solid #dc262620',

                width: '100%',

                display: 'flex'

              }}>



                <img

                  src={image0}

                  alt="Sai Chaitanya Junior College"

                  style={{

                    width: '100%',

                    aspectRatio: '16 / 9',

                    objectFit: 'cover'

                  }}

                />

                <div style={{

                  position: 'absolute',

                  top: 0,

                  left: 0,

                  right: 0,

                  bottom: 0,

                  background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(3, 105, 161, 0.1))',

                  zIndex: 1

                }}></div>

                {/* Badge Overlay */}

                <div style={{

                  position: 'absolute',

                  bottom: 0,

                  right: 0,

                  background: 'rgba(255, 255, 255, 0.95)',

                  backdropFilter: 'blur(4px)',

                  padding: '0.6rem 1rem',

                  boxShadow: '-4px -4px 15px rgba(0,0,0,0.05)',

                  zIndex: 3,

                  display: 'flex',

                  flexDirection: 'column',

                  alignItems: 'center',

                  textAlign: 'center',

                  border: '1px solid rgba(220, 38, 38, 0.1)'

                }}>

                  <span style={{

                    fontSize: isMobile ? '1.2rem' : '1.75rem',

                    fontWeight: '800',

                    color: '#dc2626',

                    lineHeight: '1',

                    marginBottom: '0.1rem',

                    fontFamily: 'Poppins, sans-serif'

                  }}>19+</span>

                  <span style={{

                    fontSize: isMobile ? '0.6rem' : '0.75rem',

                    fontWeight: '600',

                    color: '#1f2937',

                    textTransform: 'uppercase',

                    letterSpacing: '0.05em'

                  }}>Years of<br />Excellence</span>

                </div>

              </div>

            </div>



            {/* Right Side - Content */}

            <div className="about-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

              <div style={{ marginBottom: '2rem' }}>

                <h1 style={{

                  ...homePageStyles.headings,

                  fontSize: '22px',

                  color: '#111827',

                  marginBottom: '1.25rem',

                  lineHeight: '1.3',

                  fontWeight: '700'

                }}>

                  Sai Chaitanya Junior College, Madanapalle - Shaping Tomorrow's Leaders Through Academic Excellence

                </h1>

                <p style={{

                  ...homePageStyles.body,

                  fontSize: '12px',

                  lineHeight: '1.8',

                  color: '#4b5563',

                  textAlign: 'justify'

                }}>

                  Since 2007,  Sai Chaitanya Junior College has been synonymous with academic excellence and holistic development. We have successfully mentored over 10,000+ students, helping them achieve their dreams in medical, engineering, and other professional fields.Education is the cornerstone of progress. At Sai Chaitanya Junior College, we are committed to providing an educational experience that nurtures young minds and prepares students for tomorrow's challenges.

                </p>

                <p style={{

                  ...homePageStyles.body,

                  fontSize: '12px',

                  lineHeight: '1.8',

                  color: '#4b5563',

                  marginTop: '1rem',

                  textAlign: 'justify'

                }}>

                  Education is the cornerstone of progress. At Sai Chaitanya Junior College, we are committed to providing an educational experience that nurtures young minds and prepares students for tomorrow's challenges. Our approach combines rigorous academic training with personal mentorship to ensure every student reaches their full potential.

                </p>

              </div>



              {/* Key Features */}















              {/* CTA Buttons */}

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>

                <Link

                  to="/academics"

                  onClick={() => window.scrollTo(0, 0)}

                  style={{

                    padding: '10px 15px',

                    background: 'linear-gradient(135deg, #dc2626, #eb7932ff)',

                    color: 'white',

                    border: 'none',

                    borderRadius: '12px',

                    fontSize: '13px',

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

                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />

                  </svg>

                </Link>



                <Link

                  to="/results"

                  onClick={() => window.scrollTo(0, 0)}

                  style={{

                    padding: '0.75rem 1.5rem',

                    background: 'transparent',

                    color: '#eb7932ff',

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

                    e.target.style.borderColor = '#eb7932ff';

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

          </div>

        </div>

      </section>



      {/* STATS STRIP PREVIOUSLY HERE - MOVED UP */}

      {/* WHY CHOOSE STRIP */}

      <section className="why-choose-strip" style={{ padding: '3rem 0', background: '#ffffff' }}>

        <div className="strip-container">

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>

            <h2 className="section-heading center-text" style={{

              ...homePageStyles.headings,

              color: '#111827'

            }}>

              Why Choose Sai Chaitanya

            </h2>

          </div>

          <style>

            {`

              @media (max-width: 768px) {

                .why-choose-grid {

                  display: grid !important;

                  grid-template-columns: 1fr !important;

                  gap: 1.5rem !important;

                  padding: 0 1rem !important;

                }

                .why-choose-card {

                  min-width: unset !important;

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

                svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>

              },

              {

                title: 'Highly Experienced Faculty',

                description: 'Dedicated team of expert lecturers with proven track record in competitive exam coaching',

                color: '#059669',

                svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" /></svg>

              },

              {

                title: 'Personalized Attention & Mentorship',

                description: 'Limited batch sizes for individual guidance, doubt-clearing & personalized study plans',

                color: '#7c3aed',

                svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /><path d="M19 13v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2z" /></svg>

              },

              {

                title: 'World-Class Infrastructure',

                description: 'Modern labs, digital classrooms, library, sports facilities & safe campus environment',

                color: '#ea580c',

                svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" /><path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /></svg>

              },

              {

                title: 'Holistic & Balanced Development',

                description: 'Focus on academics + extracurriculars, sports, life skills & mental well-being',

                color: '#0369a1',

                svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /><circle cx="12" cy="12" r="3" /></svg>

              },

              {

                title: 'Strong Career Guidance',

                description: 'Comprehensive support for higher education, counseling & future-ready skills',

                color: '#be185d',

                svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /><path d="M12 6v6l4 2-4-2V6z" /></svg>

              }

            ].map((feature, index) => (

              <div key={index} className="why-choose-card" style={{

                background: `linear-gradient(135deg, ${feature.color}08, ${feature.color}15)`,

                borderRadius: '16px',

                padding: '15px',

                boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.1)',

                border: `1px solid ${feature.color}25`,

                transition: 'all 0.3s ease',

                position: 'relative',

                overflow: 'hidden',

                height: '222px'

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

                  width: '50px',

                  height: '50px',

                  background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,

                  borderRadius: '10px',

                  display: 'flex',

                  alignItems: 'center',

                  justifyContent: 'center',

                  marginBottom: '1.5rem',

                  color: 'white',

                  boxShadow: `0 8px 20px ${feature.color}33`

                }}>

                  {feature.svg}

                </div>

                <h4 style={{ ...homePageStyles.headings, fontSize: '15px', color: '#111827', marginBottom: '1rem', fontWeight: '600', letterSpacing: '-0.01em' }}>

                  {feature.title}

                </h4>

                <p style={{

                  ...homePageStyles.body,

                  fontSize: '13px',

                  color: '#6b7280',

                  lineHeight: '1.8',

                  textAlign: 'justify',

                  marginTop: 'auto',

                  hyphens: 'auto',

                  WebkitHyphens: 'auto',

                  wordSpacing: '-0.5px'

                }}>

                  {feature.description}

                </p>

              </div>

            ))}

          </div>



          {/* View Gallery Button */}

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>

            <Link

              to="/academics#teaching-methodology"

              style={{

                padding: '0.75rem 1.5rem',

                background: 'transparent',

                color: '#eb7932ff',

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

                e.target.style.borderColor = '#eb7932ff';

              }}

              onMouseOut={(e) => {

                e.target.style.transform = 'translateY(0)';

                e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';

                e.target.style.borderColor = '#dc262620';

              }}

            >

              View Our Teaching Methodologies

              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">

                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />

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

          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>

            <h2 className="section-heading center-text" style={{

              ...homePageStyles.headings,

              color: '#111827'

            }}>

              Ready to Join Us?

            </h2>

          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>



            {/* Contact Information */}

            <div style={{ background: '#eb7932ff', borderRadius: '16px', padding: '2.5rem', color: 'white' }}>

              <h3 style={{ ...homePageStyles.headings, fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem', color: 'white' }}>Get In Touch</h3>



              <div style={{ marginBottom: '2rem' }}>

                <h4 style={{ ...homePageStyles.headings, fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>Contact Information</h4>



                <div style={{ marginBottom: '1.5rem' }}>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>

                    <div>

                      <p style={{ ...homePageStyles.body, fontWeight: '600', marginBottom: '0.25rem' }}>Phone</p>

                      <a href="tel:+8309440507" style={{ ...homePageStyles.body, color: 'white', textDecoration: 'none' }}>+91 8309440507</a>

                    </div>

                  </div>



                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>

                    <div>

                      <p style={{ ...homePageStyles.body, fontWeight: '600', marginBottom: '0.25rem' }}>Email</p>

                      <a href="mailto:srisaichaitanya222@gmail.com" style={{ ...homePageStyles.body, color: 'white', textDecoration: 'none' }}>srisaichaitanya222@gmail.com</a>

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

              <h3 style={{ ...homePageStyles.headings, fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#111827' }}>Start Your Journey</h3>

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

                    background: 'linear-gradient(135deg, #dc2626, #eb7932ff)',

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

                    e.target.style.background = '#eb7932ff';

                  }}

                  onMouseOut={(e) => {

                    e.target.style.background = 'linear-gradient(135deg, #dc2626, #eb7932ff)';

                  }}

                >

                  Contact Us

                </Link>

                <a

                  href="tel:+918309440507"

                  onClick={(e) => {

                    if (!/Mobi|Android/i.test(navigator.userAgent)) {

                      e.preventDefault();

                      alert('Please call us at +91 8309440507');

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

                    e.target.style.background = '#eb7932ff';

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

