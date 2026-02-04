import React, { useState, useEffect } from "react";
import "./assets/styles.css";
import FallbackImage from "./components/FallbackImage";
import logo from "./assets/logo.png";
import heroicImage from "./assets/Heroic/image2.png";
import managementImage1 from "./assets/Photos/ManagementTEam/image1.png";
import managementImage2 from "./assets/Photos/ManagementTEam/image2.png";
import managementImage3 from "./assets/Photos/ManagementTEam/image3.png";
import managementImage4 from "./assets/Photos/ManagementTEam/image4.png";
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

const chairmanImage = getLeaderImage('Chairman');
const principalImage = getLeaderImage(['Principal', '!Vice']);
const vicePrincipalImage = getLeaderImage(['Vice']);

const AboutUs = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [statCounts, setStatCounts] = useState({ years: 29, students: 10000, success: 100 });

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
    const targets = { years: 25, students: 10000, success: 100 };
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

      {/* HERO SECTION */}
      <section style={{
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
        <div style={{ maxWidth: '850px', padding: '2rem ', position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
            About  Sai Chaitanya Junior College
          </h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
            Shaping Futures Since 1995 • Excellence in Intermediate Education
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
            Founded in 1995,  Sai Chaitanya Junior College has grown from a modest institution
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

          <div className="leadership-flex" style={{ display: 'flex', gap: '2rem', maxWidth: '850px', margin: '0 auto' }}>

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
                height: '280px'
              }}>
                <FallbackImage
                  src={chairmanImage}
                  alt="Chairman"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <div>
                  <h3 style={{ fontSize: '1.0rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem', ...homePageStyles.headings }}>
                    Chairman's Message
                  </h3>
                  <p style={{ color: '#4b5563', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', ...homePageStyles.body }}>
                    [Chairman Name]
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
                height: '280px'
              }}>
                <FallbackImage
                  src={principalImage}
                  alt="Principal"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <div>
                  <h3 style={{ fontSize: '1.0rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem', ...homePageStyles.headings }}>
                    Principal's Message
                  </h3>
                  <p style={{ color: '#4b5563', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', ...homePageStyles.body }}>
                    Dr. [Principal Name]
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
          </div>
        </div>
      </section>

      {/* MANAGEMENT DETAILS SECTION */}
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
              .management-section {
                padding: 2rem 1rem !important;
              }
              .management-grid {
                grid-template-columns: 1fr !important;
                gap: 1.5rem !important;
              }
            }
          `}
        </style>
        <div className="management-section" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 className="section-heading center-text" style={{
            ...homePageStyles.headings,
            color: '#111827'
          }}>
            Management Team
          </h2>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
              Meet our distinguished leadership team who bring decades of expertise and dedication to educational excellence and institutional development.
            </p>
          </div>

          <div className="management-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
              { name: ' [Chairman Name]', position: 'Chairman & Correspondent', experience: '30+ Years', qualification: 'M.A., B.Ed.', description: 'Visionary leader with extensive experience in educational administration and institutional development.', color: '#dc2626', image: chairmanImage },
              { name: 'Dr. [Principal Name]', position: 'Principal', experience: '25+ Years', qualification: 'Ph.D., M.Sc., B.Ed.', description: 'Distinguished educator with proven expertise in curriculum development and academic excellence.', color: '#dc2626', image: principalImage },
              { name: 'Prof. [Vice Principal Name]', position: 'Vice Principal', experience: '20+ Years', qualification: 'M.Sc., M.Ed.', description: 'Experienced administrator focused on student development and academic quality assurance.', color: '#dc2626', image: vicePrincipalImage },
            ].map((member, index) => (
              <div key={index} style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '0',
                boxShadow: '0 7px 25px -5px rgba(0, 0, 0, 0.1)',
                border: `0px solid ${member.color}20`,
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.borderColor = member.color;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = `${member.color}20`;
                }}>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '4px',
                  background: `linear-gradient(to bottom, ${member.color}, ${member.color}dd)`
                }}></div>

                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  background: `linear-gradient(135deg, ${member.color}, ${member.color}dd)`,
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderBottomLeftRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  {index === 2 ? 'Vice Principal' : member.position.split(' ')[0]}
                </div>

                <div style={{ width: '100%', borderRadius: '16px 16px 0 0', overflow: 'hidden', height: '200px' }}>
                  <FallbackImage
                    src={member.image}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.0rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem', ...homePageStyles.headings }}>
                    {member.name}
                  </h3>

                  <p style={{ color: member.color, fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.75rem', ...homePageStyles.body }}>
                    {member.position}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#6b7280', ...homePageStyles.body }}>{member.qualification}</span>
                    <span style={{ fontSize: '0.85rem', color: '#6b7280', ...homePageStyles.body }}>{member.experience}</span>
                  </div>

                  <p style={{
                    color: '#4b5563',
                    lineHeight: '1.6',
                    // fontSize: '0.9rem',
                    textAlign: 'justify',
                    hyphens: 'auto',
                    WebkitHyphens: 'auto',
                    wordSpacing: '-0.5px',
                    fontSize: '12px'
                  }}>
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
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





    </div>
  );
};

export default AboutUs;