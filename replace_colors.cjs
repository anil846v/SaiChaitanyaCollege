const fs = require('fs');

function replaceColors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace oranges/reds with Maroon
  content = content.replace(/#ff6b35/gi, '#800000'); // primary orange -> maroon
  content = content.replace(/#f7931e/gi, '#5c0000'); // secondary yellow-orange -> dark maroon
  
  // Replace rgb components (255, 107, 53 is #ff6b35)
  content = content.replace(/255,\s*107,\s*53/g, '128, 0, 0'); 
  
  // Replace rgb components (247, 147, 30 is #f7931e)
  content = content.replace(/247,\s*147,\s*30/g, '92, 0, 0');

  // Replace other reds in HomePage
  content = content.replace(/#dc2626/gi, '#800000');
  content = content.replace(/#b91c1c/gi, '#5c0000');

  fs.writeFileSync(filePath, content);
}

replaceColors('src/HomePage.jsx');

let headerContent = fs.readFileSync('src/Header.jsx', 'utf8');
headerContent = headerContent.replace(/'#C62828'/g, "'#800000'"); // primaryRed
headerContent = headerContent.replace(/'#B91C1C'/g, "'#5c0000'"); // primaryRedDark
headerContent = headerContent.replace(/#ac8484/gi, '#800000'); // social gradient light
headerContent = headerContent.replace(/#b91c1c/gi, '#5c0000'); // social gradient dark
headerContent = headerContent.replace(/#C62828/gi, '#800000'); 
fs.writeFileSync('src/Header.jsx', headerContent);

console.log("Colors updated successfully.");
