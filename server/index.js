const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const itemsRoutes = require('./routes/items');
require('./db/database');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5000',
  process.env.FRONTEND_URL, // Para produção
].filter(Boolean);

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? allowedOrigins 
    : '*',
  credentials: true
}));
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/items', itemsRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Root API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Juba API - Controle de Estoque' });
});

// Serve React build (production)
const buildPath = path.join(__dirname, '../build');
const fs = require('fs');

console.log(`📁 Procurando build em: ${buildPath}`);
console.log(`✅ Build existe: ${fs.existsSync(buildPath)}`);

if (fs.existsSync(buildPath)) {
  console.log('📦 Servindo arquivos estáticos do React build...');
  app.use(express.static(buildPath));
  
  // Fallback para SPA
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
} else {
  console.log('⚠️ Pasta build não encontrada. Apenas API disponível.');
  app.get('*', (req, res) => {
    res.json({ error: 'Frontend build não encontrado. Execute: npm run build' });
  });
}

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
