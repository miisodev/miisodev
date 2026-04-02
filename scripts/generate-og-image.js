const sharp = require('sharp');
const path = require('path');

// OG Image dimensions (1200x630 is standard)
const width = 1200;
const height = 630;

// Create SVG without complex formatting
const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
<rect width="${width}" height="${height}" fill="#0a0a0a"/>
<rect width="4" height="${height}" fill="#6B8F71" x="0" y="0"/>
<text x="60" y="140" font-family="serif" font-size="72" font-weight="500" fill="#e8e8e8">Kevin Miiso Novo</text>
<text x="60" y="220" font-family="monospace" font-size="28" fill="#6B8F71">Founder, CEO, Product Developer &amp; Full-Stack Engineer</text>
<text x="60" y="300" font-family="monospace" font-size="22" fill="#9a9a9a">Founder, CEO, product developer, and full-stack engineer based</text>
<text x="60" y="340" font-family="monospace" font-size="22" fill="#9a9a9a">in Durban, South Africa. Building myClerkBook and projects in</text>
<text x="60" y="380" font-family="monospace" font-size="22" fill="#9a9a9a">SaaS, web dev, and game dev.</text>
<text x="60" y="550" font-family="monospace" font-size="20" fill="#6B8F71">miiso.dev</text>
</svg>`;

async function generateOG() {
  try {
    await sharp(Buffer.from(svg))
      .png()
      .toFile(path.join(__dirname, '../public/og-image.png'));
    console.log('✅ OG image generated successfully: public/og-image.png');
  } catch (error) {
    console.error('❌ Error generating OG image:', error);
    process.exit(1);
  }
}

generateOG();
