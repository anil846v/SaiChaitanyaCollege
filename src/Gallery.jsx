import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { galleryData } from './utils/imageLoader';
import { formatFolderName } from './utils/galleryUtils';

// Generate gallery categories dynamically from available folders
const categoryDescriptions = {
  "campus and classrooms": "State-of-the-art learning environments equipped with modern teaching aids, interactive whiteboards, and comfortable seating arrangements designed to enhance student engagement and academic excellence.",
  "events & celebrations": "Vibrant campus celebrations, cultural festivals, and special events that foster community spirit, showcase student talents, and create memorable experiences throughout the academic year.",
  "labs & facilities": "Well-equipped laboratories and modern facilities providing hands-on learning experiences in science, technology, and research to support practical education and innovation.",
  "student activities": "Dynamic extracurricular programs, clubs, and student-led initiatives that develop leadership skills, creativity, and social engagement beyond the classroom environment."
};

const galleryCategories = Object.entries(galleryData).map(([folderName, images]) => ({
  id: folderName.toLowerCase(),
  name: formatFolderName(folderName),
  originalName: folderName,
  coverImage: images[0]?.url,
  images: images,
  description: categoryDescriptions[folderName.toLowerCase()] || "Explore our vibrant campus life and educational activities that shape well-rounded individuals prepared for future success."
}));

const Gallery = () => {
  const { category } = useParams();
  const [currentView, setCurrentView] = useState(category || 'main');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  
  const loadMoreRef = useRef();

  const galleryStyles = {
    headings: { fontFamily: 'Poppins, sans-serif' },
    body: { fontFamily: 'Inter, sans-serif' }
  };

  useEffect(() => {
    if (category && category !== 'main') {
      const cat = galleryCategories.find(c => 
        c.id === category || c.id === category.toLowerCase() || c.name.toLowerCase() === category.toLowerCase()
      );
      if (cat) {
        setCurrentView(cat.id);
        setSelectedCategory(cat);
      }
    }
  }, [category]);

  const loadMoreImages = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setVisibleImages(prev => prev + 20);
      setIsLoading(false);
    }, 500);
  }, [isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && currentView !== 'main') {
          loadMoreImages();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [loadMoreImages, currentView]);

  const getFilteredImages = () => {
    if (currentView === 'main') return [];
    
    const category = galleryCategories.find(cat => cat.id === currentView);
    if (!category) return [];
    
    return category.images.slice(0, visibleImages);
  };

  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction) => {
    const filteredImages = getFilteredImages();
    const newIndex = direction === 'next' 
      ? (lightboxIndex + 1) % filteredImages.length
      : (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    
    setLightboxIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  const handleKeyPress = useCallback((e) => {
    if (!lightboxImage) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox('prev');
    if (e.key === 'ArrowRight') navigateLightbox('next');
  }, [lightboxImage, lightboxIndex]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const renderMainGallery = () => {
    if (galleryCategories.length === 0) {
      return (
        <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#6b7280' }}>
          <h2>No gallery folders found</h2>
          <p>Add image folders to src/assets/Gallery/ to display them here</p>
        </div>
      );
    }

    return (
    <div style={{ 
      width: '100%', 
      background: 'transparent', 
      minHeight: '100vh', 
      position: 'relative' 
    }}>
      {/* Parallax Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(220, 38, 38, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(220, 38, 38, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(220, 38, 38, 0.02) 0%, transparent 50%)
        `,
        animation: 'float 20s ease-in-out infinite'
      }}></div>
      
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(1deg); }
            66% { transform: translateY(5px) rotate(-1deg); }
          }
        `}
      </style>
      
      {/* Gallery Header Section */}
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1rem',
        textAlign: 'center'
      }}>
        <h2 className="section-heading center-text" style={{ ...galleryStyles.headings, color: '#111827' }}>Visit Our Gallery</h2>
        
        {/* Category Quick Access Buttons */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '1rem', 
          justifyContent: 'center', 
          margin: '2rem 0 3rem',
          padding: '0 1rem'
        }}>
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setCurrentView(category.id);
                setSelectedCategory(category);
                setVisibleImages(20);
              }}
              style={{
                background: 'transparent',
                border: '2px solid #dc262620',
                borderRadius: '12px',
                padding: '0.75rem 1.5rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#B91C1C',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#dc2626';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#dc262620';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#dc2626">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
              {category.name}
              <span style={{ 
                fontSize: '0.75rem', 
                color: '#6b7280', 
                background: 'rgba(220, 38, 38, 0.1)', 
                padding: '0.25rem 0.5rem', 
                borderRadius: '12px' 
              }}>
                {category.images.length}
              </span>
            </button>
          ))}
        </div>

      <div style={{
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem', 
        padding: '0 1rem 3rem', 
        maxWidth: '1400px', 
        margin: '0 auto',
        minHeight: '60vh'
      }}>
        {galleryCategories.map((category) => (
          <div 
            key={category.id} 
            style={{
              background: '#ffffff', borderRadius: '12px', overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', cursor: 'pointer',
              transition: 'all 0.3s ease', minHeight: '320px',
              border: '2px solid #dc262620', position: 'relative',
              backgroundImage: 'linear-gradient(135deg, #fefcf8 0%, #faf7f0 100%)'
            }}
            onClick={() => {
              setCurrentView(category.id);
              setSelectedCategory(category);
              setVisibleImages(20);
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.borderColor = '#dc2626';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = '#dc262620';
            }}
          >
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '4px',
              background: 'linear-gradient(to bottom, #dc2626, #dc2626dd)'
            }}></div>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img 
                src={category.images[0]?.url || category.images[0]?.photoUrl || category.coverImage}
                alt={category.name}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '1rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem', ...galleryStyles.headings }}>{category.name}</h3>
              <span style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: '500', ...galleryStyles.body }}>{category.images.length} {category.images.length === 1 ? 'photo' : 'photos'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
     </div>
    );
  };

  const renderCategoryView = () => {
    const filteredImages = getFilteredImages();
    
    return (
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '0.5rem', 
        width: '100%',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        minHeight: '100vh',
        borderRadius: '0'
      }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0', fontSize: '0.875rem', color: '#6b7280', flexWrap: 'wrap' }}>
          <button onClick={() => setCurrentView('main')} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', textDecoration: 'underline' }}>Home</button>
          <span>›</span>
          <button onClick={() => setCurrentView('main')} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', textDecoration: 'underline' }}>Gallery</button>
          <span>›</span>
          <span style={{ color: '#111827', fontWeight: '500' }}>{selectedCategory?.name}</span>
        </nav>

        <div style={{ position: 'relative', width: '100%', height: '40vh', minHeight: '250px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          <img 
            src={selectedCategory?.coverImage} 
            alt={selectedCategory?.name}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', padding: '2rem 1rem 1rem', color: 'white' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', ...galleryStyles.headings }}>{selectedCategory?.name}</h1>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setCurrentView('main')}
            style={{
              background: 'transparent',
              border: '2px solid #dc262620',
              borderRadius: '12px',
              padding: '0.75rem 1.5rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: '#B91C1C',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.borderColor = '#dc2626';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = '#dc262620';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#dc2626">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Back to All Categories
          </button>
          
          <button 
            onClick={() => {
              const currentIndex = galleryCategories.findIndex(cat => cat.id === selectedCategory?.id);
              const nextIndex = (currentIndex + 1) % galleryCategories.length;
              const nextCategory = galleryCategories[nextIndex];
              setCurrentView(nextCategory.id);
              setSelectedCategory(nextCategory);
              setVisibleImages(20);
            }}
            style={{
              background: 'transparent',
              border: '2px solid #dc262620',
              borderRadius: '12px',
              padding: '0.75rem 1.5rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: '#B91C1C',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.borderColor = '#dc2626';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = '#dc262620';
            }}
          >
            Next Category
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#dc2626">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {filteredImages.map((image, index) => (
            <div  
              key={image.id} 
              style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s ease' }}
              onClick={() => openLightbox(image, index)}
            >
              <img 
                src={image.url || image.photoUrl} 
                alt={image.title}
                loading="lazy"
                style={{ width: '100%', height: '20rem', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: 'white', padding: '1rem' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.25rem' }}>{image.title || image.caption}</h4>
                <span style={{ fontSize: '0.75rem', opacity: 0.9 }}>{image.date}</span>
              </div>
            </div>
          ))}
        </div>

        {visibleImages < selectedCategory?.images.length && (
          <div ref={loadMoreRef} style={{ textAlign: 'center', padding: '2rem' }}>
            {isLoading && <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Loading...</div>}
          </div>
        )}
        
        {/* View All Categories Button */}

      </div>
    );
  };

  const renderLightbox = () => {
    if (!lightboxImage) return null;

    return (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.95)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }} onClick={closeLightbox}>
        <div style={{ position: 'relative', width: '90vw', height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onClick={(e) => e.stopPropagation()}>
          <button 
            onClick={closeLightbox}
            style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0, 0, 0, 0.5)', border: 'none', color: 'white', fontSize: '2rem', cursor: 'pointer', zIndex: 1001, width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}
          >
            ×
          </button>
          
          <button 
            onClick={() => navigateLightbox('prev')}
            style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', background: 'rgba(0, 0, 0, 0.5)', border: 'none', color: 'white', fontSize: '2rem', cursor: 'pointer', width: '3rem', height: '3rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1001 }}
          >
            ‹
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <img 
              src={lightboxImage.url || lightboxImage.photoUrl} 
              alt={lightboxImage.title}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '8px' }}
            />
          </div>
          
          <button 
            onClick={() => navigateLightbox('next')}
            style={{ position: 'absolute', top: '50%', right: '1rem', transform: 'translateY(-50%)', background: 'rgba(0, 0, 0, 0.5)', border: 'none', color: 'white', fontSize: '2rem', cursor: 'pointer', width: '3rem', height: '3rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1001 }}
          >
            ›
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={{ 
      fontFamily: 'Inter, Roboto, sans-serif', 
      color: '#333', 
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
      minHeight: '100vh', 
      width: '100%', 
      paddingTop: '80px',
      position: 'relative'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(220, 38, 38, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(220, 38, 38, 0.02) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(220, 38, 38, 0.01) 0%, transparent 50%)
        `,
        zIndex: -1
      }}></div>
      {currentView === 'main' ? renderMainGallery() : renderCategoryView()}
      {renderLightbox()}
    </div>
  );
};

export default Gallery;