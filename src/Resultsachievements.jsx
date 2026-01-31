import React, { useState } from "react";
import "./assets/styles.css";

export default function ResultsAchievements() {
  const [selectedYear, setSelectedYear] = useState('2024');
  
  const homePageStyles = {
    headings: { fontFamily: 'Poppins, sans-serif' },
    body: { fontFamily: 'Inter, sans-serif' }
  };

  const allToppers = [
    { name: 'Priya Sharma', rank: 'State 3rd', stream: 'MPC', marks: '965/1000', year: '2024', image: 'https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?w=200&h=200&fit=crop&crop=face' },
    { name: 'Arjun Reddy', rank: 'District 1st', stream: 'BiPC', marks: '978/1000', year: '2024', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
    { name: 'Rahul Verma', rank: 'State 1st', stream: 'MPC', marks: '985/1000', year: '2024', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
    { name: 'Kavya Singh', rank: 'District 1st', stream: 'BiPC', marks: '982/1000', year: '2024', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face' },
    { name: 'Divya Rao', rank: 'District 3rd', stream: 'HEC', marks: '970/1000', year: '2024', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face' },
    { name: 'Sneha Patel', rank: 'State 7th', stream: 'MEC', marks: '972/1000', year: '2023', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
    { name: 'Kiran Kumar', rank: 'District 2nd', stream: 'CEC', marks: '968/1000', year: '2023', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
    { name: 'Arun Nair', rank: 'State 5th', stream: 'MEC', marks: '975/1000', year: '2023', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face' },
    { name: 'Vikram Das', rank: 'State 2nd', stream: 'MPC', marks: '980/1000', year: '2023', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face' },
    { name: 'Meera Gupta', rank: 'District 2nd', stream: 'BiPC', marks: '976/1000', year: '2023', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face' },
    { name: 'Ravi Kumar', rank: 'State 8th', stream: 'CEC', marks: '968/1000', year: '2025', image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face' },
    { name: 'Ananya Reddy', rank: 'District 1st', stream: 'MEC', marks: '973/1000', year: '2025', image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face' },
    { name: 'Suresh Babu', rank: 'State 4th', stream: 'MPC', marks: '978/1000', year: '2025', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=face' },
    { name: 'Lakshmi Devi', rank: 'District 1st', stream: 'BiPC', marks: '974/1000', year: '2025', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face' }
  ];

  const filteredToppers = allToppers.filter(topper => topper.year === selectedYear);

  return (
    <div className="results-achievements-container">
      <section className="results-achievements-strip" style={{ 
        padding: '2rem 0', 
        background: '#f8f9fa',
        marginTop: '80px'
      }}>
        <style>
          {`
            .toppers-scroll::-webkit-scrollbar {
              height: 3px;
            }
            .toppers-scroll::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 3px;
            }
            .toppers-scroll::-webkit-scrollbar-thumb {
              background: #dc2626;
              border-radius: 3px;
            }
            .toppers-scroll::-webkit-scrollbar-thumb:hover {
              background: #b91c1c;
            }
          `}
        </style>
        <div className="strip-container">
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ ...homePageStyles.headings, fontSize: '2rem', color: '#111827', textAlign: 'center', marginBottom: '2rem' }}>Toppers & Rank Holders</h3>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '1rem', 
              justifyContent: 'center', 
              margin: '0 0 2rem',
              padding: '0 1rem'
            }}>
              {['2025', '2024', '2023'].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  style={{
                    background: selectedYear === year ? '#dc2626' : 'transparent',
                    border: '2px solid #dc262620',
                    borderRadius: '12px',
                    padding: '0.75rem 1.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: selectedYear === year ? '#ffffff' : '#111827',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseOver={(e) => {
                    if (selectedYear !== year) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(0, 0, 0, 0.15)';
                      e.currentTarget.style.borderColor = '#dc2626';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (selectedYear !== year) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.borderColor = '#dc262620';
                    }
                  }}
                >
                  {selectedYear !== year && (
                    <div style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '4px',
                      background: 'linear-gradient(to bottom, #dc2626, #dc2626dd)',
                      borderRadius: '12px 0 0 12px'
                    }}></div>
                  )}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={selectedYear === year ? '#ffffff' : '#dc2626'}>
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                  Year {year}
                </button>
              ))}
            </div>
            
            <div className="toppers-scroll" style={{ display: 'flex', overflowX: 'auto', gap: '1.5rem', paddingBottom: '1rem', width: '100%' }}>
              {filteredToppers.map((topper, index) => (
                <div key={index} style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                  border: '2px solid #dc262620',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  backgroundImage: 'linear-gradient(135deg, #fefcf8 0%, #faf7f0 100%)',
                  minWidth: '220px',
                  flexShrink: 0
                }}>
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '4px',
                    background: 'linear-gradient(to bottom, #dc2626, #dc2626dd)'
                  }}></div>
                  
                  <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={topper.image}
                      alt={topper.name}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '0px',
                      right: '0px',
                      background: '#dc2626',
                      color: 'white',
                      padding: '8px 12px',
                      fontSize: '0.9rem',
                      fontWeight: '700'
                    }}>
                      {topper.marks}
                    </div>
                  </div>
                  <div style={{ padding: '0.75rem', textAlign: 'center' }}>
                    <h4 style={{ ...homePageStyles.headings, fontSize: '1rem', color: '#111827', marginBottom: '0.5rem', fontWeight: '600' }}>{topper.name}</h4>
                    <div style={{ color: '#6b7280', fontSize: '0.8rem', marginBottom: '0.25rem' }}>{topper.stream} Stream</div>
                    <div style={{ color: '#9ca3af', fontSize: '0.7rem' }}>Academic Year {topper.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ 
        background: '#dc2626', 
        color: 'white', 
        padding: '3rem 0', 
        textAlign: 'center',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)'
      }}>
        <style>
          {`
            @media (max-width: 768px) {
              .achievements-section {
                padding: 2rem 1rem !important;
              }
              .achievements-grid {
                grid-template-columns: 1fr !important;
                gap: 1rem !important;
              }
            }
          `}
        </style>
        <div className="achievements-section" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '3rem' }}>Our Achievements</h2>
          <div className="achievements-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>1st</div>
              <p style={{ fontSize: '0.875rem' }}>Rank in Annamayya District - 2024</p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>150+</div>
              <p style={{ fontSize: '0.875rem' }}>Students in Top 100 Ranks</p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>12</div>
              <p style={{ fontSize: '0.875rem' }}>State Toppers Since 2015</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
