# Dynamic Gallery System

## Overview
The gallery system automatically loads images from any subfolder within `src/assets/Gallery/`. When you add new folders or images, they will automatically appear in the gallery without code changes.

## How it Works

### 1. Automatic Folder Detection
- The system scans `src/assets/Gallery/` for all subfolders
- Each subfolder becomes a gallery category
- Folder names are automatically formatted (e.g., "ClassRooms" → "Class Rooms")

### 2. Image Loading
- Supports: PNG, JPG, JPEG, GIF, SVG
- Images are automatically sorted by filename
- Titles are generated from filenames (e.g., "image_1.jpg" → "Image 1")

### 3. Adding New Content

#### To add a new category:
1. Create a new folder in `src/assets/Gallery/`
2. Add images to the folder
3. Restart the dev server
4. The new category will appear automatically

#### To add images to existing category:
1. Add images to the existing subfolder
2. Restart the dev server
3. New images will appear in that category

## Current Structure
```
src/assets/Gallery/
├── ClassRooms/     → "Class Rooms" category
├── Sports/         → "Sports" category  
└── Excursions/     → "Excursions" category
```

## Files Modified
- `src/utils/imageLoader.js` - Dynamic image loading using Vite's import.meta.glob
- `src/utils/galleryUtils.js` - Utility functions for formatting
- `src/Gallery.jsx` - Updated to use dynamic categories
- `src/GalleryTest.jsx` - Test component to verify loading

## Technical Details
- Uses Vite's `import.meta.glob()` for dynamic imports
- Images are eagerly loaded for better performance
- Maintains backward compatibility with existing code
- Automatically handles different image formats