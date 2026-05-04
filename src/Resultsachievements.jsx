import React, { useState } from "react";
import "./assets/styles.css";
import SEO from "./components/SEO";

/* 🔥 Auto import all student photos */
const images = import.meta.glob(
  "/src/assets/Achieversphotos/**/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

/* 🔥 Fallback Student SVG */
const StudentFallback = () => (
  <div style={{
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f3f4f6"
  }}>
    <svg width="60" height="60" fill="#9ca3af" viewBox="0 0 24 24">
      <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-4.4 0-8 2.2-8 5v3h16v-3c0-2.8-3.6-5-8-5z" />
    </svg>
  </div>
);

/* 🔥 Function to get image */
const getStudentImage = (year, name) => {
  const fileName = name.toLowerCase().replace(/\s+/g, "") + ".png";
  const path = `/src/assets/Achieversphotos/${year}/${fileName}`;
  return images[path]?.default || null;
};

export default function ResultsAchievements() {

  // ✅ DEFAULT YEAR FIX
  const [selectedYear, setSelectedYear] = useState("2026");

  const homePageStyles = {
    headings: { fontFamily: "Poppins, sans-serif" },
    body: { fontFamily: "Inter, sans-serif" },
  };

  const allToppers = [
    { name: "N Ashok", rank: "State 8th", stream: "MPC", marks: "458/470", year: "2026" },
    { name: "S Nadeera Bhanu", rank: "State 4th", stream: "MPC", marks: "455/470", year: "2026" },
    { name: "M Afraz", rank: "District 1st", stream: "MPC", marks: "451/470", year: "2026" },
    { name: "Z Sumaya", rank: "State 3rd", stream: "MPC", marks: "451/470", year: "2026" },
    { name: "S Zubiya", rank: "District 1st", stream: "BIPC", marks: "441/460", year: "2026" },
    { name: "S Harshitha", rank: "District 2nd", stream: "BIPC", marks: "440/460", year: "2026" },
    { name: "K Vedha Pravallika", rank: "State 5th", stream: "MBIPC", marks: "517/555", year: "2026" },
    { name: "S Mamatha", rank: "District 3rd", stream: "MBIPC", marks: "461/555", year: "2026" },
    { name: "G Sindhu", rank: "State 7th", stream: "CEC", marks: "483/500", year: "2026" },
    { name: "P Shiva Kumar", rank: "District 2nd", stream: "CEC", marks: "478/500", year: "2026" },
    { name: "K Sasindra Reddy", rank: "State 6th", stream: "CEC", marks: "477/500", year: "2026" },
    { name: "V Pradeep", rank: "District 1st", stream: "CEC", marks: "474/500", year: "2026" },
  ];

  const filteredToppers = allToppers.filter(t => t.year === selectedYear);

  return (
    <div className="results-achievements-container">
     <SEO
      title="Results & Achievements | Sai Chaitanya Junior College, Madanapalle"
      description="Explore Sai Chaitanya Junior College results and achievements. View student academic performance, top ranks, pass percentages, and success stories in Intermediate education at Madanapalle, Andhra Pradesh."
      keywords="Sai Chaitanya Results, College Achievements Madanapalle, Inter Results AP, Top Rankers Junior College, Student Performance, Intermediate Results, Best Junior College Results"
      ogUrl="https://saichaitanyacollege.com/results"
      canonical="https://saichaitanyacollege.com/results"
     />

      <section className="results-achievements-strip" style={{ padding: '2.2rem 0', background: '#f8f9fa', marginTop: '80px' }}>

        <div style={{maxWidth:'100% !important',margin:'0 75px !important',padding: '0 1.5rem'}}>
          <style>
            {`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(10px) scale(0.98);
                }
                to {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }
            `}
          </style>
          <div style={{ marginBottom: '4rem' }}>
            <h2 className="section-heading center-text" style={{
              ...homePageStyles.headings,
              color: '#111827'
            }}>
              IPE 2026 Toppers 1st Year
            </h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', margin: '0 0 2rem', padding: '0 1rem' }}>
              {['2026'].map((year) => (
                <button key={year} onClick={() => setSelectedYear(year)}
                  style={{
                    background: selectedYear === year ? '#dc2626' : 'transparent',
                    border: '2px solid #dc262620',
                    borderRadius: '12px',
                    padding: '0.75rem 1.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: selectedYear === year ? '#ffffff' : '#111827',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}>
                  Year {year}
                </button>
              ))}
            </div>

            <div className="toppers-scroll" key={selectedYear} style={{ display: 'flex', gap: '1.5rem', paddingBottom: '1rem', width: '100%',flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
              {filteredToppers.map((topper, index) => {
                const imgSrc = getStudentImage(topper.year, topper.name);
                return (
                  <div key={index} style={{
                    background: '#ffffff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                    border: '2px solid #dc262620',
                    position: 'relative',
                    backgroundImage: 'linear-gradient(135deg, #fefcf8 0%, #faf7f0 100%)',
                    minWidth: '220px',
                    flexShrink: 0,
                    opacity: 0,
                    animation: `fadeInUp 0.4s ease-out forwards ${index * 0.05}s`
                  }}>
                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'linear-gradient(to bottom, #dc2626, #dc2626dd)' }}></div>

                    <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                      {imgSrc ? (
                        <img
                          src={imgSrc}
                          alt={topper.name}
                          loading="lazy"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center 20%'  // ✅ FACE ALIGN FIX
                          }}
                        />
                      ) : <StudentFallback />}

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
                      <h4 style={{ ...homePageStyles.headings, fontSize: '1.2rem', color: '#111827', marginBottom: '0.5rem', fontWeight: '700' }}>{topper.name}</h4>
                      <div style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{topper.stream} Stream</div>
                      <div style={{ color: '#9ca3af', fontSize: '0.7rem' }}>Academic Year {topper.year}</div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
