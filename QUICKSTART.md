# Guia de Início Rápido - Juba

## 1️⃣ Configuração Inicial

### Crie os arquivos .env

**Na raiz do projeto (`.env`):**
```
REACT_APP_API_URL=http://localhost:5000
```

**Em `server/.env`:**
```
PORT=5000
NODE_ENV=development
JWT_SECRET=sua-chave-secreta-super-segura-aqui
```

## 2️⃣ Executar em Desenvolvimento

Terminal 1 - Frontend (porta 3000):
```bash
npm run dev:frontend
```

Terminal 2 - Backend (porta 5000):
```bash
cd server && npm run dev
```

Ou use um comando para iniciar ambos:
```bash
npm run dev
```

## 3️⃣ Usar a API

### Registrar Usuário
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"123456","name":"João"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"123456"}'
```

### Criar Item (use o token do login)
```bash
curl -X POST http://localhost:5000/api/items \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SEU_TOKEN_AQUI" \
  -d '{"name":"Café Premium","quantity":50,"unit":"kg","category":"Café","supplier":"Supplier ABC"}'
```

## 4️⃣ Fazer Build para Produção

```bash
npm run build
npm start
```

## 📱 Acessar a Aplicação

- Frontend: http://localhost:3000
- API: http://localhost:5000/api
- Health Check: http://localhost:5000/health

## 🗄️ Banco de Dados

O SQLite cria automaticamente um arquivo `server/juba.db` com as tabelas:
- `users` - Usuários registrados
- `items` - Itens de estoque

## 🚀 Deploy

Está pronto para deploy em:
- Railway
- Render
- Vercel
- Heroku

Veja o README.md principal para mais detalhes.
