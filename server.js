/**
 * Node.js Production & API Server for Rendra Nur Yuliadi Portfolio
 * 
 * Features:
 * - REST API endpoints (/api/health, /api/portfolio, /api/contact, /api/chat)
 * - Static file server for Vite production build (dist/)
 * - Built using native Node.js modules (zero extra dependencies required)
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
const DIST_DIR = path.join(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const server = http.createServer(async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const reqUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = reqUrl.pathname;

  // -------------------------------------------------------------
  // API ROUTING
  // -------------------------------------------------------------

  // 1. Health check
  if (pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'UP',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      developer: 'Rendra Nur Yuliadi',
      node_version: process.version
    }));
    return;
  }

  // 2. Contact submission API
  if (pathname === '/api/contact' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        console.log(`[Contact API] Received inquiry from ${data.name} (${data.email}) for service: ${data.service}`);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: 'Pesan berhasil diterima oleh server Rendra Nur Yuliadi.',
          receivedData: {
            name: data.name,
            service: data.service,
            receivedAt: new Date().toISOString()
          }
        }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Format JSON tidak valid.' }));
      }
    });
    return;
  }

  // 3. AI Assistant Chat endpoint
  if (pathname === '/api/chat' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { message = '' } = JSON.parse(body || '{}');
        const lower = message.toLowerCase();

        let reply = "Terima kasih atas pertanyaannya! Rendra adalah Software & AI Developer berpengalaman di LivePerson dengan fokus Conversational AI, Full-Stack Web (React & Node.js), serta integrasi hardware IoT.";

        if (lower.includes('liveperson')) {
          reply = "Di LivePerson, Rendra merancang conversational flow, prompt engineering untuk LLM (Gemini & GPT), serta custom functions Node.js untuk dynamic carousel response klien internasional seperti Lexus.";
        } else if (lower.includes('proyek') || lower.includes('fams') || lower.includes('noventra')) {
          reply = "Proyek unggulan Rendra meliputi FAMS (Faculty Asset Management berbasis RFID & Laravel/React) dan NOVENTRA (IoT Smart City & Smart Home menggunakan ESP32).";
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          reply,
          timestamp: new Date().toISOString()
        }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid payload' }));
      }
    });
    return;
  }

  // -------------------------------------------------------------
  // STATIC ASSETS SERVING (dist/)
  // -------------------------------------------------------------
  let filePath = path.join(DIST_DIR, pathname === '/' ? 'index.html' : pathname);

  fs.stat(filePath, (err, stats) => {
    // If file doesn't exist, fallback to index.html (SPA routing)
    if (err || !stats.isFile()) {
      filePath = path.join(DIST_DIR, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        return;
      }

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  🚀 RENDRA NUR YULIADI PORTFOLIO NODE.JS SERVER`);
  console.log(`  Port     : http://localhost:${PORT}`);
  console.log(`  API Docs : http://localhost:${PORT}/api/health`);
  console.log(`======================================================\n`);
});

