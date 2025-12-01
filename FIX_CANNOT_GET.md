# 🔧 Corrigindo o Erro "Cannot GET /"

## Problema
O servidor estava rodando, mas não estava servindo o React build.

## Solução Implementada

Atualizei:
1. ✅ `server/index.js` - Agora com logs detalhados e fallback correto
2. ✅ `Procfile` - Build é executado antes do servidor iniciar
3. ✅ `render.yaml` - Configuração automática para Render
4. ✅ `package.json` - Start script correto

## 🚀 Como Fazer Redeploy no Render

### Opção 1: Trigger Manual
1. Acesse [render.com](https://render.com)
2. Selecione seu serviço `juba-estoque-api`
3. Clique em **Manual Deploy** → **Deploy latest commit**

### Opção 2: Auto-Deploy (GitHub Push)
Já está configurado! Basta fazer:
```bash
git push origin main
```
O Render fará redeploy automaticamente.

## 🔍 O que foi corrigido

### Antes:
- Build não era gerado
- Servidor tentava servir `/build` vazio
- Erro "Cannot GET /"

### Depois:
- `npm run build` executa primeiro
- React build é gerado em `/build`
- Servidor sirve React na raiz `/`
- SPA funciona com fallback para `index.html`

## ✅ Logs Esperados

Quando o servidor inicia, você verá:
```
📁 Procurando build em: /app/build
✅ Build existe: true
📦 Servindo arquivos estáticos do React build...
🚀 Servidor rodando em http://0.0.0.0:5000
```

## 🧪 Teste Local

```bash
npm run build
npm start
```

Acesse: http://localhost:5000

Deve carregar o React normalmente!

## 🐛 Se Ainda Tiver Erro

1. **Verifique logs no Render:**
   - Dashboard → Seu serviço → Logs
   - Procure por "Build existe"

2. **Se disser "Build existe: false":**
   - Build command não executou
   - Verifique: `npm install && npm run build`

3. **Se tiver erro de CORS:**
   - Adicione ambiente: `FRONTEND_URL=https://seu-url.onrender.com`
   - Redeploy

## 📞 Precisa de ajuda?

Use os logs para debugar:
```bash
# No seu terminal local:
npm run build
node server/index.js
```

Se funcionar localmente, é um problema de configuração no Render (variáveis ambiente, etc).
