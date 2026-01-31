// Test file to verify dynamic gallery loading
import { galleryData } from '../utils/imageLoader.js';

console.log('Gallery Data:', galleryData);
console.log('Available folders:', Object.keys(galleryData));

Object.entries(galleryData).forEach(([folderName, images]) => {
  console.log(`${folderName}: ${images.length} images`);
  images.forEach(img => console.log(`  - ${img.title}`));
});

export default function GalleryTest() {
  return (
    <div>
      <h2>Gallery Test</h2>
      <p>Check console for gallery data</p>
      {Object.entries(galleryData).map(([folderName, images]) => (
        <div key={folderName}>
          <h3>{folderName} ({images.length} images)</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {images.slice(0, 3).map(img => (
              <img 
                key={img.id} 
                src={img.url} 
                alt={img.title} 
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}