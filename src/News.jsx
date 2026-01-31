import React from 'react';
import { newsData } from './data/staticData';

const News = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
        School News
      </h1>
      
      <div style={{ display: 'grid', gap: '2rem' }}>
        {newsData.map((news) => (
          <article 
            key={news.newsId}
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {news.imagePath && (
                <img 
                  src={news.imagePath} 
                  alt={news.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              )}
              
              <div>
                <span style={{
                  background: '#dc2626',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  {news.category}
                </span>
                
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  margin: '1rem 0 0.5rem',
                  color: '#111827'
                }}>
                  {news.title}
                </h2>
                
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.875rem',
                  marginBottom: '1rem'
                }}>
                  {new Date(news.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                
                <p style={{
                  color: '#374151',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}>
                  {news.description}
                </p>
                
                <p style={{
                  color: '#4b5563',
                  lineHeight: '1.6'
                }}>
                  {news.content}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default News;