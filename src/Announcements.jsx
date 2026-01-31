// import React from "react";
// import "./assets/styles.css";
// import { announcementsData } from "./data/staticData";

// export default function AnnouncementsPage() {
//   const pageStyles = {
//     headings: { fontFamily: 'Poppins, sans-serif' },
//     body: { fontFamily: 'Inter, sans-serif' }
//   };

//   return (
//     <div style={{ padding: '2rem 0', background: '#f8f9fa', minHeight: '100vh', marginTop: '80px' }}>
//       <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
//         <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
       
//           <h2 style={{ ...pageStyles.headings, fontSize: '1.5rem', color: '#111827', marginBottom: '1rem' }}>
//             Latest Notices & Announcements
//           </h2>
//           <p style={{ ...pageStyles.body, color: '#6b7280', fontSize: '0.875rem' }}>
//             Stay updated with the latest news and important information from Sai Chaitanya Junior College
//           </p>
//         </div>

//         {announcementsData.length === 0 ? (
//           <div style={{ textAlign: 'center', padding: '3rem', background: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
//             <h3 style={{ ...pageStyles.headings, color: '#6b7280', marginBottom: '1rem' }}>No Announcements</h3>
//             <p style={{ ...pageStyles.body, color: '#9ca3af' }}>Check back later for updates and important information.</p>
//           </div>
//         ) : (
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
//             {announcementsData.map((notice, index) => (
//               <div key={notice.id} style={{
//                 background: '#ffffff',
//                 borderRadius: '12px',
//                 padding: '1.5rem',
//                 boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//                 border: `3px solid ${notice.priority === 'high' ? '#dc2626' : notice.priority === 'medium' ? '#f59e0b' : '#10b981'}`,
//                 position: 'relative',
//                 transition: 'transform 0.3s ease'
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-5px)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.transform = 'translateY(0)';
//               }}>
//                 <div style={{
//                   position: 'absolute',
//                   top: '-1px',
//                   right: '-1px',
//                   background: notice.priority === 'high' ? '#dc2626' : notice.priority === 'medium' ? '#f59e0b' : '#10b981',
//                   color: 'white',
//                   padding: '0.25rem 0.75rem',
//                   borderRadius: '0 12px 0 12px',
//                   fontSize: '0.75rem',
//                   fontWeight: '600'
//                 }}>
//                   {notice.type}
//                 </div>
                
//                 <div style={{ marginTop: '0.5rem' }}>
//                   <h3 style={{ ...pageStyles.headings, fontSize: '1rem', color: '#111827', marginBottom: '0.75rem' }}>
//                     {notice.title}
//                   </h3>
                  
//                   <p style={{ ...pageStyles.body, fontSize: '0.75rem', color: '#4b5563', lineHeight: '1.6', marginBottom: '1rem' }}>
//                     {notice.content}
//                   </p>
                  
//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
//                       <span style={{
//                         background: '#e3f2fd',
//                         color: '#1976d2',
//                         padding: '0.25rem 0.75rem',
//                         borderRadius: '20px',
//                         fontSize: '0.75rem',
//                         fontWeight: '500'
//                       }}>
//                         📝 {notice.createdBy}
//                       </span>
//                       {notice.priority === 'high' && (
//                         <span style={{
//                           background: '#fef2f2',
//                           color: '#dc2626',
//                           padding: '0.25rem 0.5rem',
//                           borderRadius: '6px',
//                           fontSize: '0.75rem',
//                           fontWeight: '600'
//                         }}>
//                           🔥 URGENT
//                         </span>
//                       )}
//                     </div>
//                     <span style={{ ...pageStyles.body, fontSize: '0.875rem', color: '#6b7280' }}>
//                       📅 {new Date(notice.createdAt).toLocaleDateString('en-IN', { 
//                         year: 'numeric', 
//                         month: 'long', 
//                         day: 'numeric' 
//                       })}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }