const serverless = require('serverless-http');
const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const basicAuth = require('express-basic-auth');

const app = express();

// --- Password Protection ---
const USERNAME = process.env.AUTH_USERNAME || 'genix';
const PASSWORD = process.env.AUTH_PASSWORD || 'bouygues2025';

app.use(basicAuth({
  users: { [USERNAME]: PASSWORD },
  challenge: true,
  realm: 'GENIX Presentation',
}));

// --- Middlewares ---
app.use(compression());
app.use(helmet({ contentSecurityPolicy: false }));

// --- Static Routes ---
// Serve reveal.js core files from node_modules
app.use('/dist', express.static(path.join(__dirname, '../../node_modules/reveal.js/dist')));
app.use('/plugin', express.static(path.join(__dirname, '../../node_modules/reveal.js/plugin')));

// Serve custom assets and the main index.html from the 'public' directory
app.use(express.static(path.join(__dirname, '../../public')));

// --- Application Routes ---
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Export for Netlify Functions
module.exports.handler = serverless(app);
