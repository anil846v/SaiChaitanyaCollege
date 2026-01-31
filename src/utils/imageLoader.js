// Dynamically import all images from Gallery subfolders
import { formatFolderName, generateImageTitle, sortImagesByName } from './galleryUtils.js';

const galleryImages = import.meta.glob('../assets/Gallery/**/*.{png,jpg,jpeg,gif,svg}', { eager: true });

// Process and organize images by folder
function organizeImagesByFolder() {
  const folders = {};
  
  Object.entries(galleryImages).forEach(([path, module]) => {
    const pathParts = path.split('/');
    const folderName = pathParts[pathParts.length - 2]; // Get folder name
    const fileName = pathParts[pathParts.length - 1];
    
    if (!folders[folderName]) {
      folders[folderName] = [];
    }
    
    folders[folderName].push({
      id: `${folderName.toLowerCase()}-${folders[folderName].length + 1}`,
      url: module.default,
      title: generateImageTitle(fileName),
      date: new Date().toISOString().split('T')[0],
      fileName
    });
  });
  
  // Sort images in each folder and format folder names
  Object.keys(folders).forEach(folderName => {
    folders[folderName] = sortImagesByName(folders[folderName]);
  });
  
  return folders;
}

export const galleryData = organizeImagesByFolder();

// Legacy exports for backward compatibility
export const classroomImageArray = galleryData.ClassRooms || [];
export const sportsImageArray = galleryData.Sports || [];
export const excursionImageArray = galleryData.Excursions || [];