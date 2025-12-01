# 🚀 Guia de Deploy Gratuito - Juba Estoque

## Opções de Deploy Gratuitas

### 1. **Render** ⭐ (RECOMENDADO - Melhor para full-stack)
**Plano Gratuito:**
- ✅ Hospedagem backend ilimitada
- ✅ Banco de dados PostgreSQL 256MB (grátis)
- ✅ 750 horas/mês
- ✅ Auto-deploy via GitHub
- ✅ Domínio gratuito

### 2. **Railway** 
**Plano Gratuito:**
- ✅ $5/mês crédito gratuito
- ✅ Hospedagem backend + database
- ✅ Auto-deploy via GitHub

### 3. **Vercel** (Frontend apenas)
**Plano Gratuito:**
- ✅ Deploy frontend ilimitado
- ✅ Domínio gratuito

---

## 🎯 DEPLOY PASSO A PASSO - RENDER (Recomendado)

### Pré-requisitos:
1. ✅ Repositório no GitHub (já tem!)
2. ✅ Conta no [Render.com](https://render.com)

### Passo 1: Criar conta no Render
1. Acesse [render.com](https://render.com)
2. Clique **Sign up**
3. Use GitHub para autenticar (mais fácil)

### Passo 2: Conectar GitHub
1. Dashboard → **New +**
2. Selecione **Web Service**
3. Clique **Connect Repository**
4. Autorize e selecione `juba-estoque`

### Passo 3: Configurar Web Service (Backend)
1. **Name:** `juba-estoque-api`
2. **Environment:** `Node`
3. **Build Command:** `cd server && npm install`
4. **Start Command:** `cd server && npm start`
5. **Plan:** Free
6. **Add Environment Variable:**
   - **KEY:** `NODE_ENV` 
   - **VALUE:** `production`

### Passo 4: Criar Database PostgreSQL
1. Dashboard → **New +** → **PostgreSQL**
2. **Name:** `juba-estoque-db`
3. **Plan:** Free
4. **Create Database**

### Passo 5: Conectar Database ao Backend
1. Copie a **Connection String** do PostgreSQL
2. Volte ao Web Service
3. **Environment** → Adicione:
   - **KEY:** `DATABASE_URL`
   - **VALUE:** (Cole a connection string)

### Passo 6: Deploy Frontend
1. Crie outro **Web Service** para o frontend
2. **Build Command:** `npm install && npm run build`
3. **Start Command:** `npm start`
4. Espere finalizar

---

## 🔧 CONFIGURAR PARA RENDER

### 1. Criar `.env.production` na raiz:
```env
REACT_APP_API_URL=https://seu-backend-url.onrender.com
```

### 2. Atualizar `server/index.js`:
```javascript
const PORT = process.env.PORT || 5000;

// CORS - permitir frontend
const cors = require('cors');
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://seu-frontend-url.onrender.com'
    : 'http://localhost:3000'
}));
```

### 3. Atualizar `server/db/database.js`:
Se usar PostgreSQL em produção:
```javascript
const DATABASE_URL = process.env.DATABASE_URL;

// Para produção (PostgreSQL)
if (DATABASE_URL) {
  const { Client } = require('pg');
  // Configurar com PostgreSQL
} else {
  // Para desenvolvimento (SQLite)
  const sqlite3 = require('sqlite3');
  // Manter SQLite
}
```

---

## 📋 RAILWAY (Alternativa mais simples)

### Passo 1: Setup
1. Acesse [railway.app](https://railway.app)
2. Login com GitHub
3. New Project → Deploy from GitHub

### Passo 2: Configurar
1. Selecione repositório
2. **Environment Variables:**
   - `NODE_ENV=production`
   - `JWT_SECRET=sua_secret_aqui`
   - `PORT=5000`

### Passo 3: Deploy
Railway faz auto-deploy! 🎉

---

## ✅ VERCEL (Frontend apenas)

Se preferir separar frontend e backend:

### Passo 1:
1. Acesse [vercel.com](https://vercel.com)
2. Import → Selecione repositório

### Passo 2:
1. **Build Command:** `npm run build`
2. **Output Directory:** `build`
3. **Environment Variables:**
   - `REACT_APP_API_URL=https://seu-backend.onrender.com`

### Passo 3:
Clique Deploy! ✨

---

## 🔗 URLs Finais

Depois do deploy, você terá:

```
Frontend: https://seu-projeto.onrender.com
Backend:  https://seu-projeto-api.onrender.com
API:      https://seu-projeto-api.onrender.com/api
```

---

## 🚨 Troubleshooting

### "Build failed"
- Verifique **Build Command**
- Confira se `package.json` existe
- Veja os logs no Render

### "Database connection error"
- Verifique `DATABASE_URL`
- Confirme credenciais PostgreSQL
- Reinicie a aplicação

### "CORS error"
- Atualize `server/index.js` com URL correta
- Redeploy após mudança

---

## 💡 Dicas Importantes

1. **Sempre use variáveis de ambiente** para senhas e tokens
2. **Teste localmente** antes de fazer push
3. **Verifique logs** no Render/Railway para debugar
4. **Domínio gratuito** é gerado automaticamente
5. **Grátis é suficiente** para desenvolvimento/portfólio

---

## 📞 Suporte

- **Render:** docs.render.com
- **Railway:** docs.railway.app
- **Vercel:** vercel.com/docs

---

**Qual plataforma você quer usar? Posso ajudar a configurar!** 🚀
