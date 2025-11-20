const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const basicAuth = require('express-basic-auth');

const app = express();
const PORT = process.env.PORT || 8080;

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
app.use('/dist', express.static(path.join(__dirname, 'node_modules/reveal.js/dist')));
app.use('/plugin', express.static(path.join(__dirname, 'node_modules/reveal.js/plugin')));

// Serve custom assets and the main index.html from the 'public' directory
app.use(express.static('public'));

// --- Application Routes ---
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/sales', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/sales.html'));
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// --- Server Start ---
app.listen(PORT, () => {
  const reset = '\x1b[0m';
  const cyan = '\x1b[36m';
  const green = '\x1b[32m';
  const bold = '\x1b[1m';

  console.log(`\n${bold}${cyan}ð Genix-Bouygues Presentation Server Started!${reset}`);
  console.log(`   ${green}â${reset} Listening on port: ${bold}${PORT}${reset}`);
  console.log(`   ${green}â${reset} Environment:       ${bold}${process.env.NODE_ENV || 'development'}${reset}`);
  console.log(`   ${green}â${reset} URL:                 ${bold}http://localhost:${PORT}${reset}`);
  console.log(`\n${bold}Hot-reloading enabled for the './public' directory.${reset}\n`);
});
