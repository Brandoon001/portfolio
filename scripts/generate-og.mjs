import sharp from "sharp";
import { mkdir } from "node:fs/promises";

await mkdir("public", { recursive: true });

const width = 1200;
const height = 630;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <defs>
    <linearGradient id="name" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#60a5fa"/>
      <stop offset="0.55" stop-color="#a78bfa"/>
      <stop offset="1" stop-color="#e879f9"/>
    </linearGradient>
    <radialGradient id="glowBlue" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#2563eb" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#2563eb" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowViolet" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#a855f7" stop-opacity="0.4"/>
      <stop offset="1" stop-color="#a855f7" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="54" height="54" patternUnits="userSpaceOnUse">
      <path d="M54 0H0V54" fill="none" stroke="#ffffff" stroke-opacity="0.05"/>
    </pattern>
  </defs>

  <rect width="${width}" height="${height}" fill="#08080a"/>
  <rect width="${width}" height="${height}" fill="url(#grid)"/>
  <ellipse cx="600" cy="-40" rx="620" ry="360" fill="url(#glowBlue)"/>
  <ellipse cx="1040" cy="560" rx="420" ry="340" fill="url(#glowViolet)"/>

  <rect x="59" y="59" width="1082" height="512" rx="28" fill="none" stroke="#ffffff" stroke-opacity="0.12"/>

  <rect x="84" y="104" width="196" height="38" rx="19" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-opacity="0.35"/>
  <circle cx="106" cy="123" r="5" fill="#10b981"/>
  <text x="124" y="129" font-family="DejaVu Sans, Arial, sans-serif" font-size="17" fill="#6ee7b7">DISPONÍVEL</text>

  <text x="84" y="232" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" letter-spacing="6" fill="#a1a1ab">PORTFÓLIO</text>

  <text x="80" y="360" font-family="DejaVu Sans, Arial, sans-serif" font-size="88" font-weight="bold" fill="#f5f5f4">Brandoon <tspan fill="url(#name)">Silva</tspan><tspan fill="#a78bfa">.</tspan></text>

  <text x="84" y="424" font-family="DejaVu Sans, Arial, sans-serif" font-size="34" fill="#d4d4d8">Desenvolvedor Full Stack</text>
  <text x="84" y="478" font-family="DejaVu Sans, Arial, sans-serif" font-size="24" fill="#a1a1ab">Java · JavaScript · React · Node.js · TypeScript · MySQL</text>

  <line x1="84" y1="520" x2="1116" y2="520" stroke="#ffffff" stroke-opacity="0.1"/>
  <text x="84" y="554" font-family="DejaVu Sans Mono, monospace" font-size="17" fill="#71717a">brandoon.dev</text>
  <text x="1116" y="554" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="17" fill="#71717a">github.com/Brandoon001</text>
</svg>
`;

await sharp(Buffer.from(svg))
  .png()
  .toFile("public/og.png");

console.log("public/og.png gerado (1200x630)");
