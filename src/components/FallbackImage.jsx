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
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#9ca3af'
        }}
      >
        <style>
          {`
            @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
          `}
        </style>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '20px',
            height: '20px',
            border: '2px solid #d1d5db',
            borderTop: '2px solid #6b7280',
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