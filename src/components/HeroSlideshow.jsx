import { useState, useEffect } from 'react';

const HeroSlideshow = ({ style, className }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Dynamically import all images from Heroic folder
  useEffect(() => {
    const loadImages = async () => {
      const imageModules = import.meta.glob('../assets/Heroic/*.{png,jpg,jpeg,gif,webp}');
      const imagePromises = Object.entries(imageModules).map(async ([path, importFunc]) => {
        const module = await importFunc();
        return module.default;
      });
      
      const loadedImages = await Promise.all(imagePromises);
      setImages(loadedImages.filter(Boolean));
      setIsLoading(false);
    };

    loadImages();
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  if (isLoading || images.length === 0) {
    return (
      <div 
        className={className}
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f3f4f6'
        }}
      >
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid #e5e7eb',
          borderTop: '4px solid #dc2626',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div className={className} style={{ ...style, position: 'relative', overflow: 'hidden' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Hero slide ${index + 1}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        />
      ))}
      
      {images.length > 1 && (
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px'
        }}>
          {images.map((_, index) => (
            <div
              key={index}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: index === currentImageIndex ? 'white' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSlideshow;