import sharp from 'sharp';

const og = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#1c1916"/>
  <rect x="80" y="78" width="72" height="72" fill="none" stroke="#e7b08a" stroke-width="2"/>
  <text x="116" y="128" text-anchor="middle" font-family="Droid Sans Fallback" font-size="40" fill="#f3eee6">旭</text>
  <text x="80" y="310" font-family="Liberation Serif" font-size="108" fill="#f3eee6">Xu Zhang</text>
  <text x="80" y="378" font-family="Droid Sans Fallback" font-size="40" fill="#c9bfb1">张旭</text>
  <text x="80" y="490" font-family="Liberation Sans" font-size="32" fill="#e7b08a">Front-end engineer</text>
  <text x="80" y="552" font-family="Liberation Sans" font-size="22" fill="#8d8478">illegalscreed.com</text>
</svg>`;

const mark = (size) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#1c1916"/>
  <rect x="1.25" y="1.25" width="29.5" height="29.5" fill="none" stroke="#e7b08a" stroke-width="1"/>
  <text x="16" y="22.2" text-anchor="middle" font-family="Droid Sans Fallback" font-size="16" fill="#f3eee6">旭</text>
</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og.png');
await sharp(Buffer.from(mark(32))).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(Buffer.from(mark(180))).resize(180, 180).png().toFile('public/apple-touch-icon.png');

const meta = await sharp('public/og.png').metadata();
console.log('og', meta.width, meta.height, meta.format);
