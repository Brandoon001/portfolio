import sharp from "sharp";
import { mkdir } from "node:fs/promises";

await mkdir("public", { recursive: true });

const width = 1200;
const height = 630;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#4f46e5"/>
      <stop offset="1" stop-color="#c026d3"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect x="0" y="0" width="${width}" height="12" fill="#ffffff" opacity="0.15"/>
  <text x="60" y="225" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" fill="#ffffff" opacity="0.7">PORTFÓLIO</text>
  <text x="56" y="360" font-family="DejaVu Sans, Arial, sans-serif" font-size="76" font-weight="bold" fill="#ffffff">Brandoon Silva</text>
  <text x="60" y="440" font-family="DejaVu Sans, Arial, sans-serif" font-size="36" fill="#ffffff" opacity="0.9">Desenvolvedor Full Stack</text>
  <text x="60" y="500" font-family="DejaVu Sans, Arial, sans-serif" font-size="28" fill="#ffffff" opacity="0.6">Java · JavaScript · React · Node.js · TypeScript · MySQL</text>
</svg>
`;

await sharp(Buffer.from(svg))
  .png()
  .toFile("public/og.png");

console.log("public/og.png gerado (1200x630)");