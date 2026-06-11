import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'src/components');

function replaceAll(str, mapObj) {
  const regex = new RegExp(Object.keys(mapObj).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
  return str.replace(regex, matched => mapObj[matched]);
}

const replacements = {
  'bg-[#e6e6e6]': 'bg-zinc-100/80 backdrop-blur-md border border-zinc-200/50 shadow-sm',
  'text-[#FF4D47]': 'text-gradient-primary',
  'bg-[#1c1c1c]': 'bg-zinc-900',
  'text-[#6b6b6b]': 'text-zinc-500',
  'text-[#5c5c5c]': 'text-zinc-500',
  'bg-[#F0F0F0]': 'bg-zinc-50',
  'bg-[#FF1F1F]': 'bg-rose-600',
  'text-[#FF2D26]': 'text-rose-500',
  'shadow-2xl': 'shadow-[0_24px_60px_-15px_rgba(0,0,0,0.1)]',
  'hover:-translate-y-2': 'hover:-translate-y-1.5',
  'rounded-[32px]': 'rounded-3xl',
  'font-serif-italic': 'font-serif-italic',
  'ring-1 ring-black/5': 'border border-zinc-200/50 shadow-sm',
};

const processFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = replaceAll(content, replacements);

  // Additional smart regex replacements:
  
  // Replace old badges
  newContent = newContent.replace(
    /className="([^"]*)bg-\[#e6e6e6\]([^"]*)"/g,
    'className="$1bg-zinc-100/80 backdrop-blur-md border border-zinc-200/50 shadow-sm text-zinc-900$2"'
  );

  // Enhance heading tracking
  newContent = newContent.replace(/tracking-tight/g, 'tracking-tighter');

  // Enhance button transitions
  newContent = newContent.replace(/transition-all duration-300/g, 'transition-all duration-500 cubic-bezier(0.2, 0.8, 0.2, 1)');

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${path.basename(filePath)}`);
  }
};

const files = fs.readdirSync(componentsDir);

for (const file of files) {
  if (file.endsWith('.tsx')) {
    processFile(path.join(componentsDir, file));
  }
}
console.log('Done!');
