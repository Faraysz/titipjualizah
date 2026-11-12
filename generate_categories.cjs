const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const categories = [
  { file: 'baju.jpg', name: 'Baju', sub: 'Blazer, Dress, Kemeja, Outer', code: '01' },
  { file: 'celana.jpg', name: 'Celana', sub: 'Celana Bahan, Kulot, Jeans', code: '02' },
  { file: 'tas.jpg', name: 'Tas', sub: 'Handbag, Shoulder Bag, Tote Bag', code: '03' },
  { file: 'jam-tangan.jpg', name: 'Jam Tangan', sub: 'Jam Tangan Wanita Original', code: '04' },
  { file: 'sepatu-sandal.jpg', name: 'Sepatu & Sandal', sub: 'Heels, Flat Shoes, Sneakers', code: '05' },
  { file: 'hijab.jpg', name: 'Hijab', sub: 'Pashmina, Square Silk, Scarf', code: '06' },
  { file: 'skincare-makeup.jpg', name: 'Skincare & Makeup', sub: 'Kondisi Baru / Segel Resmi', code: '07' }
];

async function generateIn(targetDir) {
  const dir = path.join(targetDir, 'src', 'assets', 'kategori');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const cat of categories) {
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fffbf9"/>
          <stop offset="100%" stop-color="#fff0f3"/>
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="url(#bg)"/>
      <rect x="24" y="24" width="552" height="552" rx="24" fill="none" stroke="#fecdd6" stroke-width="2" stroke-dasharray="8 8"/>
      <rect x="50" y="50" width="500" height="500" rx="20" fill="#ffffff" stroke="#fecdd6" stroke-width="1.5"/>
      
      <!-- Number code watermark -->
      <text x="510" y="105" font-family="Georgia, serif" font-size="24" font-weight="700" fill="#fda4b4" text-anchor="end">${cat.code}</text>
      
      <!-- Category Circle Accent -->
      <circle cx="300" cy="240" r="85" fill="#fff0f3" stroke="#fecdd6" stroke-width="2"/>
      
      <!-- Monogram text in circle -->
      <text x="300" y="255" font-family="Georgia, serif" font-size="42" font-weight="700" fill="#e11d48" text-anchor="middle">${cat.name.charAt(0)}</text>
      
      <!-- Category Name & Subtitle -->
      <text x="300" y="380" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#292524" text-anchor="middle">${cat.name}</text>
      <text x="300" y="415" font-family="system-ui, sans-serif" font-size="14" font-weight="400" fill="#78716c" text-anchor="middle">${cat.sub}</text>
      
      <!-- Placeholder Badge -->
      <rect x="170" y="460" width="260" height="36" rx="18" fill="#fff0f3" stroke="#fb7185" stroke-width="1.5"/>
      <text x="300" y="483" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#be123c" text-anchor="middle">[GANTI: Foto ${cat.name}]</text>
    </svg>`;

    const outPath = path.join(dir, cat.file);
    await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile(outPath);
    console.log('Generated in ' + targetDir + ': ' + cat.file);
  }
}

async function run() {
  await generateIn('d:/joki_child/Ayuu/titipjualizah');
  if (fs.existsSync('d:/joki_child/Ayuu/titipjualayyu')) {
    await generateIn('d:/joki_child/Ayuu/titipjualayyu');
  }
}

run().catch(console.error);
