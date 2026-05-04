import React, { useState, useEffect, useRef } from 'react';
import image1 from '../assets/MobileHeroic/image1.png';
import image2 from '../assets/MobileHeroic/image2.png';
import image3 from '../assets/MobileHeroic/image3.png';
import image4 from '../assets/MobileHeroic/image4.png';
import image5 from '../assets/Heroic/image10.png';
import image6 from '../assets/MobileHeroic/image3.png';

const MobileHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const tickerRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  const slides = [
    { image: image1, title: 'Premium Education' },
    { image: image2, title: 'Student Success' },
    { image: image3, title: 'Sports Excellence' },
    { image: image4, title: 'Excellence in Education' },
    { image: image6, title: 'Holistic Development' }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Ticker animation
  useEffect(() => {
    const tickerElement = tickerRef.current;
    if (!tickerElement) return;

    const animate = () => {
      positionRef.current -= 1;
      
      // Reset position when content has fully scrolled
      if (positionRef.current <= -tickerElement.scrollWidth / 2) {
        positionRef.current = 0;
      }
      
      tickerElement.style.transform = `translateX(${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const handleMouseLeave = () => {
      animationRef.current = requestAnimationFrame(animate);
    };

    tickerElement.addEventListener('mouseenter', handleMouseEnter);
    tickerElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      tickerElement.removeEventListener('mouseenter', handleMouseEnter);
      tickerElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Hero Slider */}
      <div style={{ position: 'relative', width: '100%', height: 'calc(100vh - 160px)', overflow: 'hidden', marginTop: '115px' }}>
        {slides.map((slide, index) => (
          <div
            key={index}
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
        
        {/* Slide Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: '10'
        }}>
          {slides.map((_, index) => (
            <div
              key={index}
              style={{
                width: currentSlide === index ? '8px' : '6px',
                height: currentSlide === index ? '8px' : '6px',
                borderRadius: '50%',
                backgroundColor: currentSlide === index ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Results Ticker */}
      <div style={{
        height: '44px',
        background: 'linear-gradient(135deg, #dc2626, #eb7932ff)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Static Label */}
        <div style={{
          position: 'absolute',
          left: '0',
          top: '0',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 0.75rem',
          zIndex: '10',
          backdropFilter: 'blur(5px)'
        }}>
          <span style={{
            color: 'white',
            fontWeight: '700',
            fontSize: '12px',
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
          paddingLeft: '70px'
        }}>
          <div
            ref={tickerRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              color: 'white',
              fontSize: '11px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '500',
              whiteSpace: 'nowrap',
              willChange: 'transform'
            }}
          >
            {/* AP 10th Results */}
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flexShrink: 0 }}>
              🏫 <strong>AP 10th (SSC) Results 2026:</strong>
              <a
                href="https://bse.ap.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: '700',
                  padding: '0.2rem 0.5rem',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '3px',
                  transition: 'all 0.3s ease',
                  fontSize: '10px'
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
                BSEAP
              </a>
              <span style={{ opacity: '0.8' }}>| April 23, 2026</span>
            </span>

            {/* AP Intermediate Results */}
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flexShrink: 0 }}>
              🎓 <strong>AP Intermediate Results 2026:</strong>
              <a
                href="https://bie.ap.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: '700',
                  padding: '0.2rem 0.5rem',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '3px',
                  transition: 'all 0.3s ease',
                  fontSize: '10px'
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
                BIEAP
              </a>
              <span style={{ opacity: '0.8' }}>| April 2026</span>
            </span>

            {/* Repeat for continuous scrolling */}
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flexShrink: 0 }}>
              🏫 <strong>AP 10th (SSC) Results 2026:</strong>
              <a
                href="https://bse.ap.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: '700',
                  padding: '0.2rem 0.5rem',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '3px',
                  transition: 'all 0.3s ease',
                  fontSize: '10px'
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
                BSEAP
              </a>
              <span style={{ opacity: '0.8' }}>| April 23, 2026</span>
            </span>

            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flexShrink: 0 }}>
              🎓 <strong>AP Intermediate Results 2026:</strong>
              <a
                href="https://bie.ap.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: '700',
                  padding: '0.2rem 0.5rem',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '3px',
                  transition: 'all 0.3s ease',
                  fontSize: '10px'
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
                BIEAP
              </a>
              <span style={{ opacity: '0.8' }}>| April 2026</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeroSlider;
