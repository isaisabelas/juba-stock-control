#!/bin/bash
# Build script para produção

echo "🔨 Instalando dependências do frontend..."
npm install

echo "⚙️ Building React..."
npm run build

echo "📦 Instalando dependências do backend..."
cd server
npm install
cd ..

echo "✅ Build completo!"
