import { useState } from 'react';

const FallbackImage = ({ src, alt, className, style }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (hasError || !src) {
    return (
      <div
        className={className}
        style={{
          ...style,
          objectFit: undefined, // Remove objectFit constraints for the div
          width: '100%',
          height: '100%',
          background: '#f3f4f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#9ca3af'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40%" height="40%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div
          className={className}
          style={{
            ...style,
            background: 'linear-gradient(90deg, #f9fafb 25%, #f3f4f6 50%, #f9fafb 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.2s infinite',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9ca3af'
          }}
        >
          <div style={{
            width: '16px',
            height: '16px',
            border: '2px solid #e5e7eb',
            borderTop: '2px solid #6b7280',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        style={{
          ...style,
          display: isLoading ? 'none' : 'block'
        }}
        onError={handleError}
        onLoad={handleLoad}
      />
    </>
  );
};

export default FallbackImage;