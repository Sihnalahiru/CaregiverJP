import fs from 'node:fs/promises';
import path from 'node:path';
import zlib from 'node:zlib';

const outDir = path.join(process.cwd(), 'public', 'icons');
await fs.mkdir(outDir, { recursive: true });

// Minimal pure-Node RGBA PNG encoder (no external binaries required)
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function encodePNG(width, height, rgba) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0;
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  const compressed = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([
    signature,
    chunk('IHDR', ihdr),
    chunk('IDAT', compressed),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

function clamp(v, min, max) {
  return v < min ? min : v > max ? max : v;
}

function mix(a, b, t) {
  return a + (b - a) * t;
}

function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

// Signed distance to rounded box centered at (0,0) with half-extents (bx, by) and radius r
function sdRoundedBox(px, py, bx, by, r) {
  const qx = Math.abs(px) - bx + r;
  const qy = Math.abs(py) - by + r;
  return Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - r;
}

function renderIcon(size, { maskable = false, rounded = false }) {
  const buf = Buffer.alloc(size * size * 4);
  const scale = maskable ? 0.68 : 0.84; // 15%+ safe-zone padding when maskable

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // Normalized coordinates [-1, 1]
      const nx = ((x + 0.5) / size) * 2 - 1;
      const ny = ((y + 0.5) / size) * 2 - 1;
      const px = 2 / size;

      // Background rich cobalt-navy clinical gradient
      const gradT = clamp((nx * 0.45 + ny * 0.55 + 1) * 0.5, 0, 1);
      let r = mix(15, 29, gradT);
      let g = mix(34, 78, gradT);
      let b = mix(82, 216, gradT);
      let a = 255;

      // Subtle radial luminosity top-left
      const rad = Math.hypot(nx + 0.35, ny + 0.38);
      const glow = 1 - smoothstep(0.0, 1.35, rad);
      r = clamp(r + glow * 28, 0, 255);
      g = clamp(g + glow * 52, 0, 255);
      b = clamp(b + glow * 40, 0, 255);

      // Optional rounded-corner alpha clip (only for non-maskable if requested)
      if (rounded && !maskable) {
        const dOuter = sdRoundedBox(nx, ny, 0.98, 0.98, 0.44);
        const mask = 1 - smoothstep(-px, px, dOuter);
        a = Math.round(mask * 255);
      }

      // Inner clinical shield / soft ring emblem scaled to safe zone
      const sx = nx / scale;
      const sy = ny / scale;
      const dRing = Math.abs(Math.hypot(sx, sy) - 0.66) - 0.055;
      const ringAlpha = (1 - smoothstep(-px * 1.5, px * 1.5, dRing)) * 0.24;
      r = mix(r, 147, ringAlpha);
      g = mix(g, 210, ringAlpha);
      b = mix(b, 255, ringAlpha);

      // Crisp medical care cross (two rounded bars)
      const dVert = sdRoundedBox(sx, sy, 0.145, 0.44, 0.09);
      const dHoriz = sdRoundedBox(sx, sy, 0.44, 0.145, 0.09);
      const dCross = Math.min(dVert, dHoriz);
      const crossAlpha = 1 - smoothstep(-px * 1.6, px * 1.6, dCross);

      // Mint care accent dot in center
      const dCenter = Math.hypot(sx, sy) - 0.11;
      const centerAlpha = 1 - smoothstep(-px * 1.6, px * 1.6, dCenter);

      r = mix(r, 255, crossAlpha);
      g = mix(g, 255, crossAlpha);
      b = mix(b, 255, crossAlpha);

      r = mix(r, 52, centerAlpha);
      g = mix(g, 211, centerAlpha);
      b = mix(b, 153, centerAlpha);

      const idx = (y * size + x) * 4;
      buf[idx] = Math.round(r);
      buf[idx + 1] = Math.round(g);
      buf[idx + 2] = Math.round(b);
      buf[idx + 3] = a;
    }
  }
  return encodePNG(size, size, buf);
}

const specs = [
  { name: 'apple-touch-icon.png', size: 180, maskable: false, rounded: false },
  { name: 'pwa-192x192.png', size: 192, maskable: false, rounded: true },
  { name: 'pwa-512x512.png', size: 512, maskable: false, rounded: true },
  { name: 'pwa-maskable-512x512.png', size: 512, maskable: true, rounded: false },
];

for (const spec of specs) {
  const png = renderIcon(spec.size, spec);
  await fs.writeFile(path.join(outDir, spec.name), png);
  console.log(`Generated ${spec.name} (${spec.size}x${spec.size}, ${png.length} bytes)`);
}
