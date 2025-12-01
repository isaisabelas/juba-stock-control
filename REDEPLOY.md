# 🔄 Redeploy - Corrigindo "Frontend build não encontrado"

## ✅ O que foi corrigido

O problema era que o Render não estava executando o build do React antes de iniciar o servidor.

Atualizei:
1. ✅ `render.yaml` - Build command agora executa: `npm install && npm run build && cd server && npm install`
2. ✅ `Procfile` - Mesmo padrão para Railway/Heroku
3. ✅ `package.json` - Novo script `build:all`

## 🚀 Redeploy no Render

### Passo 1: Limpar Deployment Anterior
1. Acesse [render.com](https://render.com)
2. Dashboard → `juba-estoque-api`
3. **Settings** → **Scroll Down**
4. Clique em **Delete Web Service**
5. Confirme

### Passo 2: Criar Novo Web Service
1. Dashboard → **New +** → **Web Service**
2. Selecione `juba-stock-control`
3. Configure:
   - **Name:** `juba-estoque-api`
   - **Environment:** Node
   - **Build Command:** `npm install && npm run build && cd server && npm install`
   - **Start Command:** `node server/index.js`
   - **Plan:** Free

### Passo 3: Adicionar Environment Variables
1. Clique **Add Environment Variable**
2. Adicione:
   ```
   NODE_ENV = production
   JWT_SECRET = sua_secret_super_segura_123456
   PORT = 5000
   ```

### Passo 4: Deploy
1. Clique **Create Web Service**
2. Espere 2-3 minutos
3. Acesse sua URL (ex: https://juba-estoque-api.onrender.com)

## ✅ Teste Local (Antes de Deploy)

```bash
cd C:\Users\isabe\Desktop\juba-project
npm run build:all
npm start
```

Acesse: http://localhost:5000

## 🔍 Verificar Logs no Render

Se tiver erro:
1. Dashboard → `juba-estoque-api`
2. **Logs** (tab)
3. Procure por:
   - "✅ Build existe: true" ✅ (Se aparecer, é sucesso!)
   - "npm ERR" ❌ (Se aparecer, há erro no build)

## 🆘 Se Ainda Não Funcionar

### Erro: "npm ERR"
```bash
# Teste localmente
npm install
npm run build
# Se funcionar localmente, é config do Render
```

### Erro: "Build existe: false"
- O `npm run build` não executou
- Verifique **Build Command** no Render
- Deve ser: `npm install && npm run build && cd server && npm install`

### Erro: CORS
Adicione variável ambiente no Render:
- **KEY:** `FRONTEND_URL`
- **VALUE:** `https://seu-url.onrender.com`

## 📋 Resumo dos Comandos

| Comando | O que faz |
|---------|-----------|
| `npm start` | Build + Start (produção) |
| `npm run build` | Build React apenas |
| `npm run build:all` | Build completo (front + back) |
| `npm run dev` | Dev mode (hot reload) |

## ✨ Pronto!

Após o redeploy, sua app deve estar funcionando! 🎉

**URL:** https://juba-estoque-api.onrender.com
