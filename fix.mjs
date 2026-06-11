import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'src/components');

const processFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content.replace(/cubic-bezier\(0\.2, 0\.8, 0\.2, 1\)/g, 'ease-[cubic-bezier(0.2,0.8,0.2,1)]');
  newContent = newContent.replace(/bg-\[#ff0000\]/g, 'bg-gradient-to-br from-rose-500 to-red-600');
  newContent = newContent.replace(/hover:bg-\[#cc0000\]/g, 'hover:from-rose-600 hover:to-red-700');
  
  // also fix Pricing.tsx gradient colors
  newContent = newContent.replace(/text-\[#FF2D26\]/g, 'text-rose-500');

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed: ${path.basename(filePath)}`);
  }
};

const files = fs.readdirSync(componentsDir);

for (const file of files) {
  if (file.endsWith('.tsx')) {
    processFile(path.join(componentsDir, file));
  }
}
console.log('Fix done!');
