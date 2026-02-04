import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./assets/styles.css";
import logoImage from "./assets/logo.png";
import { galleryData } from './utils/imageLoader';
import { formatFolderName } from './utils/galleryUtils';

// Generate gallery categories dynamically from available folders
const galleryCategories = Object.entries(galleryData).map(([folderName, images]) => ({
  id: folderName.toLowerCase(),
  name: formatFolderName(folderName),
  originalName: folderName
}));

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);
  const [academicDropdownOpen, setAcademicDropdownOpen] = useState(false);
  const [showSocialHeader, setShowSocialHeader] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const navigate = useNavigate();

  const headerStyles = {
    headings: { fontFamily: 'Poppins, sans-serif' },
    body: { fontFamily: 'Inter, sans-serif' }
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle navigation with smooth scrolling
  const handleNavigation = (path, sectionId = null) => {
    if (window.location.pathname === path && sectionId) {
      scrollToSection(sectionId);
    } else {
      navigate(path);
      if (sectionId) {
        setTimeout(() => scrollToSection(sectionId), 100);
      } else {
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
      }
    }
    closeMobileMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowSocialHeader(window.scrollY < 50);
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* SOCIAL MEDIA HEADER STRIP */}
      <div style={{
        background: '#dc2626',
        color: 'white',
        padding: '0.5rem 0',
        fontSize: '0.875rem',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1001,
        transform: showSocialHeader ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease'
      }}>
        <div style={{
          width: '100%',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Left - Social Media Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="https://wa.me/9398138140" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'opacity 0.3s ease' }}
              onMouseOver={(e) => e.target.style.opacity = '0.8'}
              onMouseOut={(e) => e.target.style.opacity = '1'}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
              </svg>
            </a>
            <a href="https://www.facebook.com/groups/702221839983621" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'opacity 0.3s ease' }}
              onMouseOver={(e) => e.target.style.opacity = '0.8'}
              onMouseOut={(e) => e.target.style.opacity = '1'}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/saichaitanyajuniorcollege/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'opacity 0.3s ease' }}
              onMouseOver={(e) => e.target.style.opacity = '0.8'}
              onMouseOut={(e) => e.target.style.opacity = '1'}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'opacity 0.3s ease' }}
              onMouseOver={(e) => e.target.style.opacity = '0.8'}
              onMouseOut={(e) => e.target.style.opacity = '1'}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'opacity 0.3s ease' }}
              onMouseOver={(e) => e.target.style.opacity = '0.8'}
              onMouseOut={(e) => e.target.style.opacity = '1'}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'opacity 0.3s ease' }}
              onMouseOver={(e) => e.target.style.opacity = '0.8'}
              onMouseOut={(e) => e.target.style.opacity = '1'}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Right - Phone Number */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <a href="tel:+919642433777" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>+91 9642433777</a>
          </div>
        </div>
      </div>

      {/* FLOATING SOCIAL MEDIA CARD - Desktop Only */}
      <div style={{
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: !showSocialHeader ? 'translateY(-50%) translateX(0)' : 'translateY(-50%) translateX(100px)',
        transition: 'transform 0.3s ease',
        zIndex: 1000,
        display: window.innerWidth > 768 ? 'block' : 'none'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #ac8484, #b91c1c)',
          borderRadius: '12px',
          padding: '0.5rem',
          boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="https://wa.me/9398138140" target="_blank" rel="noopener noreferrer"
              style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.35rem', borderRadius: '8px', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.target.style.background = 'transparent'}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
              </svg>
            </a>
            <a href="https://www.facebook.com/groups/702221839983621" target="_blank" rel="noopener noreferrer"
              style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.35rem', borderRadius: '8px', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.target.style.background = 'transparent'}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/saichaitanyajuniorcollege/" target="_blank" rel="noopener noreferrer"
              style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.35rem', borderRadius: '8px', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.target.style.background = 'transparent'}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"
              style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.35rem', borderRadius: '8px', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.target.style.background = 'transparent'}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
              style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.35rem', borderRadius: '8px', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.target.style.background = 'transparent'}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header
        className={`header-navbar ${isScrolled ? 'scrolled' : ''}`}
        style={{
          background: isScrolled ? '#f5f5f5' : '#f8f8f8',
          transition: 'background 0.3s ease',
          position: 'fixed',
          top: showSocialHeader ? '40px' : '0',
          left: 0,
          right: 0,
          zIndex: 1000,
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
          height:'75px'
        }}
      >
        <div className="header-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',height:'75px' }}>
          {/* Left side - Logo and Title */}
          <div
            onClick={() => handleNavigation('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              position: 'relative',
              zIndex: 1100,
              cursor: 'pointer'
            }}
          >
            <div className="header-brand">
              <img
                src={logoImage}
                alt="Viswam School"
                className="header-logo"
              />
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              lineHeight: '1.1'
            }}>
              <span style={{
                color: '#B91C1C',
                ...headerStyles.headings,
                fontSize: '25px',
                fontWeight: '600',
                whiteSpace: 'nowrap'
              }}> SAI CHAITANYA</span>
              <span style={{
                color: '#B91C1C',
                ...headerStyles.headings,
                fontSize: '16px',
                fontWeight: '500',
                marginTop: '-2px'
              }}>JUNIOR COLLEGE</span>
            </div>
          </div>

          {/* Right side - Navigation and Mobile Menu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {/* Navigation */}
            <nav className={`header-nav ${mobileMenuOpen ? 'active' : ''}`} style={headerStyles.body}>
              <button
                onClick={() => handleNavigation('/')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: 'inherit', fontFamily: 'inherit' }}
                className="nav-item"
              >
                Home
              </button>



              <div
                className="nav-dropdown"
                onMouseEnter={() => setAcademicDropdownOpen(true)}
                onMouseLeave={() => setAcademicDropdownOpen(false)}
                style={{ position: 'relative' }}
              >
                <button
                  onClick={() => handleNavigation('/academics')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: 'inherit', fontFamily: 'inherit' }}
                  className="nav-item"
                >
                  Academics
                </button>
                {academicDropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    minWidth: '180px',
                    zIndex: 1001,
                    padding: '0.5rem 0'
                  }}>
                    <button
                      onClick={() => handleNavigation('/academics')}
                      style={{
                        display: 'block',
                        width: '100%',
                        padding: '0.5rem 1rem',
                        color: '#374151',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                      onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      Academics
                    </button>
                    <button
                      onClick={() => handleNavigation('/results')}
                      style={{
                        display: 'block',
                        width: '100%',
                        padding: '0.5rem 1rem',
                        color: '#374151',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                      onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      Results & Achievements
                    </button>
                  </div>
                )}
              </div>

              {!isDesktop && (
                <button
                  onClick={() => handleNavigation('/results')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: 'inherit', fontFamily: 'inherit' }}
                  className="nav-item"
                >
                  Results & Achievements
                </button>
              )}

              <div
                className="nav-dropdown"
                onMouseEnter={() => setGalleryDropdownOpen(true)}
                onMouseLeave={() => setGalleryDropdownOpen(false)}
                style={{ position: 'relative' }}
              >
                <button
                  onClick={() => handleNavigation('/gallery')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: 'inherit', fontFamily: 'inherit' }}
                  className="nav-item"
                >
                  Gallery
                </button>
                {galleryDropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    minWidth: '150px',
                    zIndex: 1001,
                    padding: '0.5rem 0'
                  }}>
                    {galleryCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleNavigation(`/gallery/${category.id}`)}
                        style={{
                          display: 'block',
                          width: '100%',
                          padding: '0.5rem 1rem',
                          color: '#374151',
                          background: 'none',
                          border: 'none',
                          textAlign: 'left',
                          cursor: 'pointer',
                          fontSize: '0.875rem',
                          transition: 'background-color 0.2s ease'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => handleNavigation('/about')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: 'inherit', fontFamily: 'inherit' }}
                className="nav-item"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigation('/contact')}
                style={{
                  background: '#dc2626',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontFamily: 'inherit',
                  fontWeight: '600',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(220, 38, 38, 0.4)',
                  transition: 'all 0.3s ease',
                  marginLeft: '0.5rem'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 15px -3px rgba(220, 38, 38, 0.5)';
                  e.target.style.background = '#b91c1c';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 6px -1px rgba(220, 38, 38, 0.4)';
                  e.target.style.background = '#dc2626';
                }}
                className="nav-item-cta"
              >
                Admissions & Contact Us
              </button>
            </nav>


            {/* Mobile Menu Button */}
            <button
              className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
              style={{ position: 'relative', zIndex: 1100 }}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}