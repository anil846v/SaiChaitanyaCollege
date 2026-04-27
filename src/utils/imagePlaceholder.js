// Generate tiny blurry placeholder from image URL
// This shows instantly while full image loads

export const generatePlaceholder = (width = 10, height = 6) => {
  // Canvas-based blur placeholder generator
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  // Create a simple gradient placeholder
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f0f0f0');
  gradient.addColorStop(1, '#e0e0e0');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL('image/png');
};

// Create multiple resolutions for responsive loading
export const heroImageSizes = {
  mobile: {
    width: 480,
    quality: 65,
    maxSize: '150KB',
  },
  tablet: {
    width: 768,
    quality: 70,
    maxSize: '300KB',
  },
  desktop: {
    width: 1920,
    quality: 75,
    maxSize: '500KB',
  }
};

export const getImageSrcSet = (imageName) => {
  // Example: Returns multiple resolutions of same image
  // image100-mobile.png (150KB) for small screens
  // image100-tablet.png (300KB) for medium screens  
  // image100.png (500KB) for large screens
  
  return {
    mobile: `image/${imageName}-mobile.png 480w`,
    tablet: `image/${imageName}-tablet.png 768w`,
    desktop: `image/${imageName}.png 1920w`
  };
};
