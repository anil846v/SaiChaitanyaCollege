import React, { useState, useEffect } from "react";

import "./assets/styles.css";

import FallbackImage from "./components/FallbackImage";

import SEO from "./components/SEO";
// import logo from "./assets/logo.png";

import heroicImage from "./assets/Heroic/image2.png";

// Management team images will be added when available

// Import specific leadership photos

import chairmanPhoto from "./assets/Photos/AboutUs/Chairman.png";

import principalPhoto from "./assets/Photos/AboutUs/principal.png";

import ceophoto from "./assets/Photos/AboutUs/ceo.png";

// Dynamic image loading for Leaders

const leaderImages = import.meta.glob('./assets/Photos/Leaders/*.{png,jpg,jpeg,svg,webp}', { eager: true });



const getLeaderImage = (keywords) => {

  const foundPath = Object.keys(leaderImages).find(path => {

    const lowerPath = path.toLowerCase();

    const searchTerms = Array.isArray(keywords) ? keywords : [keywords];

    return searchTerms.every(k => {

      if (k.startsWith('!')) return !lowerPath.includes(k.slice(1).toLowerCase());

      return lowerPath.includes(k.toLowerCase());

    });

  });

  return foundPath ? leaderImages[foundPath].default : null;

};



const chairmanImage = chairmanPhoto;

const principalImage = principalPhoto;

const vicePrincipalImage = ceophoto;



const AboutUs = () => {

  const [currentText, setCurrentText] = useState("");

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isTyping, setIsTyping] = useState(true);

  const [statsAnimated, setStatsAnimated] = useState(false);

  const [statCounts, setStatCounts] = useState({ years: 19, students: 10000, success: 100 });



  const phrases = [

    "A nurturing & dynamic space for curious minds",

    "Empowering students for a brighter future",

    "Where learning meets excellence"

  ];



  const homePageStyles = {

    headings: { fontFamily: 'Poppins, sans-serif' },

    body: { fontFamily: 'Inter, sans-serif' }

  };



  useEffect(() => {

    const currentPhrase = phrases[currentIndex];



    if (isTyping) {

      if (currentText.length < currentPhrase.length) {

        const timeout = setTimeout(() => {

          setCurrentText(currentPhrase.slice(0, currentText.length + 1));

        }, 100);

        return () => clearTimeout(timeout);

      } else {

        const timeout = setTimeout(() => {

          setIsTyping(false);

        }, 2000);

        return () => clearTimeout(timeout);

      }

    } else {

      if (currentText.length > 0) {

        const timeout = setTimeout(() => {

          setCurrentText(currentText.slice(0, -1));

        }, 50);

        return () => clearTimeout(timeout);

      } else {

        setCurrentIndex((prev) => (prev + 1) % phrases.length);

        setIsTyping(true);

      }

    }

  }, [currentText, currentIndex, isTyping, phrases]);



  useEffect(() => {

    let ticking = false;

    const handleScroll = () => {

      if (!ticking) {

        requestAnimationFrame(() => {

          const statsSection = document.querySelector('.journey-stats');

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

    const targets = { years: 19, students: 10000, success: 100 };

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

        success: Math.floor(targets.success * progress)

      });



      if (currentStep >= steps) {

        clearInterval(timer);

        setStatCounts(targets);

      }

    }, stepTime);

  };

  return (

    <div style={{ fontFamily: 'Inter, Roboto, sans-serif', color: '#333', background: '#ffffff', minHeight: 'calc(100vh - 160px)' }}>

      <SEO
        title="About Us"
        description="Learn about Sai Chaitanya Junior College's 19 years of excellence in education. Our vision, mission, and commitment to shaping future leaders in Madanapalle, Andhra Pradesh."
        keywords="About Sai Chaitanya, College History, Vision Mission, Educational Excellence, Madanapalle College, Junior College AP"
        ogUrl="https://saichaitanyacollege.com/about"
        canonical="https://saichaitanyacollege.com/about"
      />


      {/* HERO SECTION */}

      <section className="hero-section" style={{

        position: 'relative',

        height: '40vh',

        minHeight: '300px',

        display: 'flex',

        alignItems: 'center',

        justifyContent: 'center',

        color: 'white',

        textAlign: 'center',

        width: '100vw',

        marginLeft: 'calc(-50vw + 50%)',

        marginRight: 'calc(-50vw + 50%)'

      }}>

        <style>

          {`

            @media (max-width: 768px) {

              .hero-section {

                height: 50vh !important;

                min-height: 400px !important;

              }

              .hero-content {

                padding: 1rem !important;

                max-width: 95% !important;

              }

              .hero-title {

                font-size: 1.75rem !important;

                line-height: 1.2 !important;

                margin-bottom: 0.75rem !important;

              }

              .hero-subtitle {

                font-size: 0.95rem !important;

                line-height: 1.4 !important;

              }

            }

            @media (max-width: 480px) {

              .hero-section {

                height: 60vh !important;

                min-height: 450px !important;

              }

              .hero-content {

                padding: 0.75rem !important;

                max-width: 90% !important;

              }

              .hero-title {

                font-size: 1.5rem !important;

                line-height: 1.3 !important;

                margin-bottom: 0.5rem !important;

              }

              .hero-subtitle {

                font-size: 0.875rem !important;

                line-height: 1.5 !important;

              }

            }

            @media (max-width: 360px) {

              .hero-title {

                font-size: 1.25rem !important;

              }

              .hero-subtitle {

                font-size: 0.75rem !important;

              }

            }

          `}

        </style>

        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>

          <FallbackImage

            src={heroicImage}

            alt="About Us Hero"

            style={{ width: '100%', height: '100%', objectFit: 'cover' }}

          />

          <div style={{

            position: 'absolute',

            top: 0,

            left: 0,

            right: 0,

            bottom: 0,

            background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))'

          }}></div>

        </div>

        <div className="hero-content" style={{ maxWidth: '850px', padding: '2rem', position: 'relative', zIndex: 2 }}>

          <h1 className="hero-title" style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0rem', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>

            About  Sai Chaitanya Junior College

          </h1>

          <p className="hero-subtitle" style={{ fontSize: '1.125rem', opacity: 0.9, textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>

            Shaping Futures Since 2007 • Excellence in Intermediate Education

          </p>

        </div>

      </section>



      {/* HISTORY SECTION */}

      <section style={{

        padding: '3rem 0',

        textAlign: 'center',

        width: '100vw',

        marginLeft: 'calc(-50vw + 50%)',

        marginRight: 'calc(-50vw + 50%)',

        background: '#f9fafb'

      }}>

        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '9px' }}>

          <h2 className="section-heading center-text" style={{

            ...homePageStyles.headings,

            color: '#111827'

          }}>

            Our Journey

          </h2>

          <p style={{

            ...homePageStyles.body,

            fontSize: '0.875rem',

            lineHeight: '1.8',

            color: '#4b5563',

            maxWidth: '800px',

            margin: '0 auto 3rem',

            textAlign: 'justify'

          }}>

            Founded in 2007,  Sai Chaitanya Junior College has grown from a modest institution

            to a premier intermediate college in Madanapalle, consistently delivering exceptional

            academic results and holistic student development.Education is the key to cornerstone of progress. At Sai Chaitanya Junior College, we are committed to providing an educational experience that nurtures young minds and prepares students for tomorrow's setbacks and challenges .



          </p>



          <div className="journey-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem' }}>

            <div style={{ textAlign: 'center' }}>

              <h3 style={{ fontSize: '27px', fontWeight: '700', color: '#dc2626', marginBottom: '0.5rem' }}>{statCounts.years}</h3>

              <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Years of Excellence</p>

            </div>

            <div style={{ textAlign: 'center' }}>

              <h3 style={{ fontSize: '27px', fontWeight: '700', color: '#dc2626', marginBottom: '0.5rem' }}>{statCounts.students}+</h3>

              <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Students Passed Out</p>

            </div>

            <div style={{ textAlign: 'center' }}>

              <h3 style={{ fontSize: '27px', fontWeight: '700', color: '#dc2626', marginBottom: '0.5rem' }}>{statCounts.success}%</h3>

              <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Success Rate</p>

            </div>

          </div>

        </div>

      </section>



      {/* JOIN THE JOURNEY SECTION */}



      <style>

        {`

            @media (max-width: 768px) {

              .vision-mission-grid {

                grid-template-columns: 1fr !important;

                gap: 2rem !important;

              }

              .vision-mission-section {

                padding: 2rem 1rem !important;

              }

            }

            @media (max-width: 480px) {

              .vision-mission-grid {

                gap: 1.25rem !important;

              }

              .vision-mission-section {

                padding: 1.5rem 0.75rem !important;

              }

            }

          `}

      </style>



      {/* VISION & MISSION SECTION */}

      <section style={{

        background: '#f8f9fa',

        padding: '3rem 0',

        width: '100vw',

        marginLeft: 'calc(-50vw + 50%)',

        marginRight: 'calc(-50vw + 50%)'

      }}>

        <style>

          {`

            @media (max-width: 768px) {

              .vision-mission-grid {

                grid-template-columns: 1fr !important;

                gap: 2rem !important;

              }

              .vision-mission-section {

                padding: 2rem 1rem !important;

              }

            }

            @media (max-width: 480px) {

              .vision-mission-grid {

                gap: 1.25rem !important;

              }

              .vision-mission-section {

                padding: 1.5rem 0.75rem !important;

              }

            }

          `}

        </style>

        <div className="vision-mission-section" style={{ maxWidth: '100%', margin: '0 auto', padding: '0 2rem' }}>

          <h2 className="section-heading center-text" style={{

            ...homePageStyles.headings,

            color: '#111827'

          }}>

            Vision Mission

          </h2>

          <div className="vision-mission-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: '1400px', margin: '0 auto' }}>

            {[

              {

                type: 'VISION',

                title: 'Our Vision',

                content: 'To be a leading educational institution that nurtures creative, confident, and compassionate individuals who will make a positive impact on the world. We envision creating an environment where academic excellence meets character development, fostering critical thinking alongside emotional intelligence.',

                priority: 'high'

              },

              {

                type: 'MISSION',

                title: 'Our Mission',

                content: 'To provide excellent education through innovative teaching methods, foster critical thinking, and develop well-rounded personalities in a supportive learning environment. We are committed to creating an inclusive atmosphere that encourages academic excellence and lifelong learning.',

                priority: 'medium'

              }

            ].map((item, index) => (

              <div key={index} style={{

                background: '#ffffff',

                borderRadius: '12px',

                padding: '2rem',

                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',

                border: `3px solid ${item.priority === 'high' ? '#dc2626' : '#059669'}`,

                position: 'relative',

                transition: 'transform 0.3s ease',

                height: '100%'

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

                  background: item.priority === 'high' ? '#dc2626' : '#059669',

                  color: 'white',

                  padding: '0.5rem 1rem',

                  borderRadius: '0 12px 0 12px',

                  fontSize: '0.875rem',

                  fontWeight: '600'

                }}>

                  {item.type}

                </div>



                <div style={{ marginTop: '1rem' }}>

                  <h3 style={{ fontSize: '1rem', color: '#111827', marginBottom: '1rem', fontWeight: '600' }}>

                    {item.title}

                  </h3>



                  <p style={{ color: '#4b5563', lineHeight: '1.7', fontSize: '0.75rem' }}>

                    {item.content}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* CHAIRMAN & PRINCIPAL MESSAGE SECTION */}

      <section style={{

        padding: '4rem 0',

        width: '100vw',

        marginLeft: 'calc(-50vw + 50%)',

        marginRight: 'calc(-50vw + 50%)',

        background: '#ffffff'

      }}>

        <style>

          {`

            @media (max-width: 768px) {

              .leadership-messages {

                padding: 2rem 1rem !important;

              }

              .leadership-flex {

                flex-direction: column !important;

                gap: 2rem !important;

              }

              .leadership-card {

                height: auto !important;

              }

            }

            @media (max-width: 480px) {

              .leadership-messages {

                padding: 1.5rem 0.75rem !important;

              }

              .leadership-flex {

                gap: 1.25rem !important;

              }

            }

          `}

        </style>

        <div className="leadership-messages" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1rem' }}>

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>

            <h2 className="section-heading center-text" style={{

              ...homePageStyles.headings,

              color: '#111827'

            }}>

              Leadership Messages

            </h2>

            <p style={{ fontSize: '0.9rem', color: '#6b7280', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>

              Words of wisdom and guidance from our esteemed leadership team who have dedicated their lives to educational excellence and student success

            </p>

          </div>



          <div className="leadership-flex" style={{ display: 'flex', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>



            {/* CHAIRMAN MESSAGE */}

            <div className="leadership-card" style={{

              background: '#f8f9fa',

              borderRadius: '16px',

              overflow: 'hidden',

              border: '2px solid rgba(220, 38, 38, 0.1)',

              display: 'flex',

              flexDirection: 'column'

            }}>

              <div style={{

                width: '100%',

                height: '280px',

                display: 'flex',

                alignItems: 'center',

                justifyContent: 'center',

                backgroundColor: '#ffffff'

              }}>

                <FallbackImage

                  src={chairmanImage}

                  alt="Chairman"

                  style={{

                    width: '100%',

                    height: '100%',

                    objectFit: 'cover',

                    objectPosition: 'top'

                  }}

                />

              </div>



              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>

                <div>

                  <h3 style={{ fontSize: '1.0rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem', ...homePageStyles.headings }}>

                    Chairman's Message

                  </h3>

                  <p style={{ color: '#4b5563', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', ...homePageStyles.body }}>

                    Dr. K. Nirmal Reddy

                    <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '400', color: '#6b7280', marginTop: '0.25rem' }}>M.Com, MBA, Ph.D</span>

                  </p>



                  <h4 style={{ fontSize: '1.0rem', fontWeight: '600', color: '#dc2626', marginBottom: '1rem', ...homePageStyles.headings }}>

                    Building Tomorrow's Leaders

                  </h4>

                </div>



                <p style={{ fontSize: '12px', lineHeight: '1.6', color: '#374151', textAlign: 'justify', ...homePageStyles.body }}>

                  Education is the cornerstone of progress. At Sai Chaitanya Junior College, we are committed to providing an educational experience that nurtures young minds and prepares students for tomorrow's challenges.

                </p>

              </div>

            </div>



            {/* PRINCIPAL MESSAGE */}

            <div className="leadership-card" style={{

              background: '#f8f9fa',

              borderRadius: '16px',

              overflow: 'hidden',

              border: '2px solid rgba(5, 150, 105, 0.1)',

              display: 'flex',

              flexDirection: 'column'

            }}>

              <div style={{

                width: '100%',

                height: '280px',

                display: 'flex',

                alignItems: 'center',

                justifyContent: 'center',

                backgroundColor: '#ffffff'

              }}>

                <FallbackImage

                  src={principalImage}

                  alt="Principal"

                  style={{

                    width: '100%',

                    height: '100%',

                    objectFit: 'cover',

                    objectPosition: 'top'

                  }}

                />

              </div>



              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>

                <div>

                  <h3 style={{ fontSize: '1.0rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem', ...homePageStyles.headings }}>

                    Principal's Message

                  </h3>

                  <p style={{ color: '#4b5563', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', ...homePageStyles.body }}>

                    R. Dhananjaya Reddy

                    <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '400', color: '#6b7280', marginTop: '0.25rem' }}>M.Sc Mathematics</span>

                  </p>



                  <h4 style={{ fontSize: '1.0rem', fontWeight: '600', color: '#059669', marginBottom: '1rem', ...homePageStyles.headings }}>

                    Leading with Vision & Excellence

                  </h4>

                </div>



                <p style={{ fontSize: '12px', lineHeight: '1.6', color: '#374151', textAlign: 'justify', ...homePageStyles.body }}>

                  Welcome to Sai Chaitanya Junior College, where we believe every student has the potential to achieve greatness. Our commitment to academic excellence ensures students are well-prepared for tomorrow's challenges.

                </p>

              </div>

            </div>



            {/* VICE PRINCIPAL MESSAGE */}

            <div className="leadership-card" style={{

              background: '#f8f9fa',

              borderRadius: '16px',

              overflow: 'hidden',

              border: '2px solid rgba(217, 119, 6, 0.1)',

              display: 'flex',

              flexDirection: 'column'

            }}>

              <div style={{

                width: '100%',

                height: '280px',

                display: 'flex',

                alignItems: 'center',

                justifyContent: 'center',

                backgroundColor: '#ffffff'

              }}>

                <FallbackImage

                  src={vicePrincipalImage}

                  alt="Vice Principal"

                  style={{

                    width: '100%',

                    height: '100%',

                    objectFit: 'cover',

                    objectPosition: 'top'

                  }}

                />

              </div>



              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>

                <div>

                  <h3 style={{ fontSize: '1.0rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem', ...homePageStyles.headings }}>

                    CEO's Message

                  </h3>

                  <p style={{ color: '#4b5563', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', ...homePageStyles.body }}>

                    M.Rajeswara Reddy

                                        <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '400', color: '#6b7280', marginTop: '0.25rem' }}>Rtd. HOD.Statistics in B.T College</span>



                  </p>



                  <h4 style={{ fontSize: '1.0rem', fontWeight: '600', color: '#d97706', marginBottom: '1rem', ...homePageStyles.headings }}>

                    Nurturing Academic Excellence

                  </h4>

                </div>



                <p style={{ fontSize: '12px', lineHeight: '1.6', color: '#374151', textAlign: 'justify', ...homePageStyles.body }}>

                  At Sai Chaitanya Junior College, we focus on creating a supportive learning environment that encourages both academic achievement and personal growth. Our dedicated faculty ensures each student reaches their full potential.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>





      {/* AFFILIATION & RECOGNITION SECTION */}

      <section style={{

        padding: '3rem 0',

        width: '100vw',

        marginLeft: 'calc(-50vw + 50%)',

        marginRight: 'calc(-50vw + 50%)',

        background: '#ffffff'

      }}>

        <style>

          {`

            @media (max-width: 768px) {

              .affiliation-section {

                padding: 2rem 1rem !important;

              }

              .affiliation-grid {

                grid-template-columns: repeat(2, 1fr) !important;

                gap: 1rem !important;

              }

            }

          `}

        </style>

        <div className="affiliation-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>

          <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>

            Affiliation & Recognition

          </h2>



          <div className="affiliation-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>

            {[

              {

                title: 'Board Affiliation',

                subtitle: 'Andhra Pradesh',

                description: 'Affiliated to the Board of Intermediate Education, AP.',

                icon: '🏛️',

                color: '#dc2626'

              },

              {

                title: 'Government Recognition',

                subtitle: 'State Approved',

                description: 'Recognized by the Government of Andhra Pradesh.',

                icon: '✅',

                color: '#dc2626'

              },

              {

                title: 'Academic Excellence',

                subtitle: 'Top Performance',

                description: 'Consistently ranked among top colleges in district.',

                icon: '🏆',

                color: '#dc2626'

              },

              {

                title: 'Quality Assurance',

                subtitle: 'Standards Compliance',

                description: 'Maintains high educational standards and quality.',

                icon: '⭐',

                color: '#d97706'

              }

            ].map((item, index) => (

              <div key={index} style={{

                background: '#f8f9fa',

                borderRadius: '8px',

                padding: '1rem',

                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',

                border: `2px solid ${item.color}20`,

                transition: 'transform 0.3s ease',

                textAlign: 'center'

              }}

                onMouseOver={(e) => {

                  e.currentTarget.style.transform = 'translateY(-3px)';

                  e.currentTarget.style.borderColor = item.color;

                }}

                onMouseOut={(e) => {

                  e.currentTarget.style.transform = 'translateY(0)';

                  e.currentTarget.style.borderColor = `${item.color}20`;

                }}>

                <div style={{

                  fontSize: '2rem',

                  marginBottom: '0.5rem'

                }}>

                  {item.icon}

                </div>



                <h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>

                  {item.title}

                </h3>



                <p style={{ color: item.color, fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.5rem' }}>

                  {item.subtitle}

                </p>



                <p style={{ color: '#4b5563', lineHeight: '1.4', fontSize: '0.75rem' }}>

                  {item.description}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* GOOGLE REVIEWS SECTION */}

      <section style={{

        padding: '4rem 0',

        width: '100vw',

        marginLeft: 'calc(-50vw + 50%)',

        marginRight: 'calc(-50vw + 50%)',

        background: '#f9fafb'

      }}>

        <style>

          {`

            @media (max-width: 768px) {

              .reviews-section {

                padding: 2rem 1rem !important;

              }

              .reviews-grid {

                grid-template-columns: 1fr !important;

                gap: 1.5rem !important;

              }

              .review-buttons {

                flex-direction: column !important;

                gap: 1rem !important;

              }

            }

            @media (max-width: 480px) {

              .reviews-section {

                padding: 1.5rem 0.75rem !important;

              }

            }

          `}

        </style>

        <div className="reviews-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>

            <h2 className="section-heading center-text" style={{

              ...homePageStyles.headings,

              color: '#111827',

              fontSize: '2rem',

              fontWeight: '610',

              marginBottom: '1rem'

            }}>

              What Our Students Say

            </h2>

            {/* <p style={{ fontSize: '0.9rem', color: '#6b7280', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>

              Hear what our students and parents have to say about their experience at Sai Chaitanya Junior College

            </p> */}

          </div>



          {/* Elfsight Google Reviews Widget Container */}

          <div style={{ 

            margin: '2rem 0',

            minHeight: '400px',

            background: '#ffffff',

            borderRadius: '12px',

            padding: '2rem',

            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',

            border: '2px solid rgba(220, 38, 38, 0.1)'

          }}>

            <style>

              {`

                .reviews-widget-wrapper {

                  height: 480px;

                  overflow: hidden;

                  background: '#ffffff';

                  border-radius: '8px';

                }

                

                @media (max-width: 768px) {

                  .reviews-widget-wrapper {

                    height: 570px; /* Adjust height for mobile devices */

                  }

                }

              `}

            </style>

            {/* Elfsight Google Reviews Widget */}

            <script src="https://elfsightcdn.com/platform.js" async></script>

            <div className="reviews-widget-wrapper">

              <div className="elfsight-app-ae4a56f1-de2a-467f-94ce-b8b56350d0b2" data-elfsight-app-lazy></div>

            </div>

            

                      </div>



          <div className="review-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>

            <a

              href="https://share.google/KoiQjhUefyh0iG0vG"

              target="_blank"

              rel="noopener noreferrer"

              style={{

                display: 'inline-flex',

                alignItems: 'center',

                gap: '0.5rem',

                background: '#eb7932ff',

                color: 'white',

                padding: '0.875rem 2rem',

                borderRadius: '8px',

                textDecoration: 'none',

                fontWeight: '600',

                fontSize: '0.95rem',

                transition: 'all 0.3s ease',

                border: '2px solid #eb7932ff'

              }}

              onMouseOver={(e) => {

                e.currentTarget.style.background = '#eb7932ff';

                e.currentTarget.style.transform = 'translateY(-2px)';

                e.currentTarget.style.boxShadow = '0 4px 12px rgba(220, 38, 38, 0.3)';

              }}

              onMouseOut={(e) => {

                e.currentTarget.style.background = '#eb7932ff';

                e.currentTarget.style.transform = 'translateY(0)';

                e.currentTarget.style.boxShadow = 'none';

              }}

            >

              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">

                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />

              </svg>

              Read More Reviews on Google

            </a>



            <a

              href="https://www.google.com/search?sca_esv=c9874bb074d0c29e&hl=en-IN&sxsrf=ANbL-n7h9iH9KuOE6wy4eukIfx36IrVoMg:1777024254771&kgmid=/g/11vjyffp37&q=SRI+SAI+CHAITANYA+JUNIOR+COLLEGE&shem=rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=b5047a6e39afebd8&utm_source=rimspwouoe,sh/x/loc/uni/m1/1#lrd=0x3bb267323a02b485:0x99a4090847f1dfdf,3,,,,"

              target="_blank"

              rel="noopener noreferrer"

              style={{

                display: 'inline-flex',

                alignItems: 'center',

                gap: '0.5rem',

                background: 'transparent',

                color: '#dc2626',

                padding: '0.875rem 2rem',

                borderRadius: '8px',

                textDecoration: 'none',

                fontWeight: '600',

                fontSize: '0.95rem',

                transition: 'all 0.3s ease',

                border: '2px solid #eb7932ff'

              }}

              onMouseOver={(e) => {

                e.currentTarget.style.background = '#eb7932ff';

                e.currentTarget.style.color = 'white';

                e.currentTarget.style.transform = 'translateY(-2px)';

                e.currentTarget.style.boxShadow = '0 4px 12px rgba(220, 38, 38, 0.3)';

              }}

              onMouseOut={(e) => {

                e.currentTarget.style.background = 'transparent';

                e.currentTarget.style.color = '#dc2626';

                e.currentTarget.style.transform = 'translateY(0)';

                e.currentTarget.style.boxShadow = 'none';

              }}

            >

              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">

                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />

              </svg>

              Leave Us a Review

            </a>

          </div>

        </div>

      </section>









    </div>

  );

};



export default AboutUs;

