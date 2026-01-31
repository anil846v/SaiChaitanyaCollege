// Utility functions for gallery management

export const formatFolderName = (folderName) => {
  return folderName
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
    .trim();
};

export const generateImageTitle = (fileName) => {
  return fileName
    .replace(/\.[^/.]+$/, "") // Remove extension
    .replace(/[_-]/g, ' ') // Replace underscores and hyphens with spaces
    .replace(/\b\w/g, l => l.toUpperCase()); // Capitalize each word
};

export const sortImagesByName = (images) => {
  return images.sort((a, b) => a.fileName.localeCompare(b.fileName));
};