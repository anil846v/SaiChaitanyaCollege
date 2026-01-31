import React from "react";
import "./assets/styles.css";

export default function Results() {
  const homePageStyles = {
    headings: { fontFamily: 'Poppins, sans-serif' },
    body: { fontFamily: 'Inter, sans-serif' }
  };

  return (
    <div className="results-container">
      {/* YEAR-WISE RESULTS STRIP */}
      <section className="results-strip" style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both', background: '#f8f9fa', padding: '2rem 0', marginTop: '80px' }}>
        <div className="strip-container">
          <h2 className="section-heading center-text" style={{ ...homePageStyles.headings, fontSize: '2.5rem', color: '#111827', marginBottom: '1rem' }}>Year-wise Academic Results</h2>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ ...homePageStyles.body, fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
              Consistent excellence in IPE Board examinations with outstanding pass percentages and distinction rates year after year.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            {[
              { year: '2024', passPercentage: '98.5%', distinction: '85%', firstClass: '92%', color: '#dc2626' },
              { year: '2023', passPercentage: '97.8%', distinction: '82%', firstClass: '89%', color: '#059669' },
              { year: '2022', passPercentage: '96.9%', distinction: '79%', firstClass: '87%', color: '#7c3aed' },
              { year: '2021', passPercentage: '98.1%', distinction: '83%', firstClass: '90%', color: '#d97706' }
            ].map((result, index) => (
              <div key={index} style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: result.color,
                  marginBottom: '1rem'
                }}>{result.year}</div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: result.color }}>{result.passPercentage}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Pass %</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: result.color }}>{result.distinction}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Distinction</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: result.color }}>{result.firstClass}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>First Class</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOPPERS & RANK HOLDERS STRIP */}
      <section className="toppers-strip" style={{ animation: 'fadeInUp 0.8s ease-out 1s both', padding: '4rem 0', background: '#ffffff' }}>
        <div className="strip-container">
          <h2 className="section-heading center-text" style={{ ...homePageStyles.headings, fontSize: '2.5rem', color: '#111827', marginBottom: '1rem' }}>Toppers & Rank Holders</h2>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ ...homePageStyles.body, fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
              Celebrating our brilliant students who achieved top ranks in IPE Board examinations and brought glory to our institution.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            {[
              { name: 'Priya Sharma', rank: 'State Rank 3', stream: 'MPC', marks: '985/1000', year: '2024', color: '#dc2626' },
              { name: 'Arjun Reddy', rank: 'District Rank 1', stream: 'BiPC', marks: '978/1000', year: '2024', color: '#059669' },
              { name: 'Sneha Patel', rank: 'State Rank 7', stream: 'MEC', marks: '972/1000', year: '2023', color: '#7c3aed' },
              { name: 'Kiran Kumar', rank: 'District Rank 2', stream: 'CEC', marks: '968/1000', year: '2023', color: '#d97706' }
            ].map((topper, index) => (
              <div key={index} style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: `${topper.color}15`,
                  border: `3px solid ${topper.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '2rem'
                }}>🏆</div>
                
                <h3 style={{ ...homePageStyles.headings, fontSize: '1.25rem', color: '#111827', marginBottom: '0.5rem', fontWeight: '700' }}>
                  {topper.name}
                </h3>
                
                <p style={{ ...homePageStyles.body, color: topper.color, fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  {topper.rank}
                </p>
                
                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                  <div><strong>Stream:</strong> {topper.stream}</div>
                  <div><strong>Marks:</strong> {topper.marks}</div>
                  <div><strong>Year:</strong> {topper.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITIVE EXAM ACHIEVEMENTS STRIP */}
      <section className="competitive-strip" style={{ animation: 'fadeInUp 0.8s ease-out 1.2s both', padding: '4rem 0', background: '#f8f9fa' }}>
        <div className="strip-container">
          <h2 className="section-heading center-text" style={{ ...homePageStyles.headings, fontSize: '2.5rem', color: '#111827', marginBottom: '1rem' }}>Competitive Exam Achievements</h2>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ ...homePageStyles.body, fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
              Outstanding performance in national level competitive examinations with remarkable success rates in NEET, JEE, and EAMCET.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            {[
              { exam: 'NEET', qualified: '45', topRank: 'AIR 1,247', year: '2024', color: '#dc2626' },
              { exam: 'JEE Main', qualified: '38', topRank: 'AIR 3,456', year: '2024', color: '#059669' },
              { exam: 'EAMCET', qualified: '52', topRank: 'State Rank 89', year: '2024', color: '#7c3aed' },
              { exam: 'BITSAT', qualified: '15', topRank: 'Score 385/450', year: '2024', color: '#d97706' }
            ].map((exam, index) => (
              <div key={index} style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                textAlign: 'center'
              }}>
                <h3 style={{ ...homePageStyles.headings, fontSize: '1.5rem', color: exam.color, marginBottom: '1rem', fontWeight: '700' }}>
                  {exam.exam}
                </h3>
                
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '700', color: exam.color, marginBottom: '0.25rem' }}>
                    {exam.qualified}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Students Qualified</div>
                </div>
                
                <div style={{ 
                  background: `${exam.color}10`, 
                  padding: '0.75rem', 
                  borderRadius: '8px',
                  border: `1px solid ${exam.color}20`,
                  marginBottom: '0.5rem'
                }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: '600', color: exam.color }}>
                    Best Rank: {exam.topRank}
                  </div>
                </div>
                
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                  Academic Year {exam.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT AWARDS & ACHIEVEMENTS STRIP */}
      <section className="awards-strip" style={{ animation: 'fadeInUp 0.8s ease-out 1.4s both', padding: '4rem 0', background: '#ffffff' }}>
        <div className="strip-container">
          <h2 className="section-heading center-text" style={{ ...homePageStyles.headings, fontSize: '2.5rem', color: '#111827', marginBottom: '1rem' }}>Student Awards & Achievements</h2>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ ...homePageStyles.body, fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
              Recognizing our students' excellence in academics, sports, cultural activities, and various competitions at state and national levels.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            {[
              { category: 'Academic Excellence', achievement: 'National Science Olympiad Gold Medal', student: 'Rahul Verma', year: '2024', color: '#dc2626' },
              { category: 'Sports Achievement', achievement: 'State Level Chess Championship', student: 'Ananya Singh', year: '2024', color: '#059669' },
              { category: 'Cultural Excellence', achievement: 'Inter-State Dance Competition Winner', student: 'Meera Patel', year: '2023', color: '#7c3aed' },
              { category: 'Innovation Award', achievement: 'Science Fair State Level Winner', student: 'Vikram Reddy', year: '2023', color: '#d97706' }
            ].map((award, index) => (
              <div key={index} style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: `${award.color}15`,
                  border: `3px solid ${award.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '2rem'
                }}>🏅</div>
                
                <h3 style={{ ...homePageStyles.headings, fontSize: '1.25rem', color: '#111827', marginBottom: '0.5rem', fontWeight: '700' }}>
                  {award.category}
                </h3>
                
                <p style={{ ...homePageStyles.body, color: award.color, fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>
                  {award.achievement}
                </p>
                
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  <div><strong>Student:</strong> {award.student}</div>
                  <div><strong>Year:</strong> {award.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}