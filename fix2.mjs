import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'src/components');

const processFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content.replace(/text-\[#FF5100\]/g, 'text-gradient-primary');
  newContent = newContent.replace(/text-\[#FF2823\]/g, 'text-gradient-primary');
  newContent = newContent.replace(/bg-\[#FF4D47\]/g, 'bg-rose-500');
  newContent = newContent.replace(/border-\[#FF5100\]/g, 'border-rose-400');
  newContent = newContent.replace(/color="#FF1F1F"/g, 'color="#f43f5e"');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed more colors in: ${path.basename(filePath)}`);
  }
};

const files = fs.readdirSync(componentsDir);

for (const file of files) {
  if (file.endsWith('.tsx')) {
    processFile(path.join(componentsDir, file));
  }
}
console.log('Final fix done!');
