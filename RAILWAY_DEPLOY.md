# 🚂 Deploy no Railway - Guia Completo

## ✅ Pré-requisitos

1. Conta no [railway.app](https://railway.app)
2. Conectado com GitHub
3. Repositório público no GitHub

---

## 🚀 Passo a Passo - Railway

### Passo 1: Criar Novo Projeto
1. Acesse [railway.app](https://railway.app)
2. Clique em **New Project**
3. Selecione **Deploy from GitHub repo**

### Passo 2: Conectar Repositório
1. Autorize Railway a acessar seus repositórios
2. Selecione `juba-stock-control`
3. Clique em **Deploy**

Railway vai começar o build automaticamente.

---

## ⚙️ Configurar Variáveis de Ambiente

Após o deployment começar:

1. Clique em seu projeto no Railway
2. Vá para a aba **Variables**
3. Adicione as seguintes variáveis:

```
NODE_ENV = production
JWT_SECRET = gere_uma_chave_segura_aqui
PORT = 8000
```

**Para gerar uma JWT_SECRET segura:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## 🔍 Configurar Start Command (se necessário)

1. Vá para a aba **Settings**
2. Procure por **Start Command**
3. Se estiver vazio, defina como:
```bash
npm ci && npm run build && node server/index.js
```

---

## 📊 Monitorar o Build

1. Clique na aba **Deployments**
2. Veja o build em tempo real
3. Procure por erros nos logs

### ✅ Sinais de Sucesso:
```
✅ Build existe: true
📦 Servindo arquivos estáticos do React build...
🚀 Servidor rodando em http://0.0.0.0:PORT
```

### ❌ Erros Comuns e Soluções:

| Erro | Causa | Solução |
|------|-------|---------|
| `react-scripts: not found` | Dependências não instaladas | Verifique package-lock.json |
| `Cannot GET /` | Build não criado | Verifique Build Command |
| Port já em uso | Conflito de porta | Use PORT do environment |
| CORS error | Origin não permitido | Adicione FRONTEND_URL |

---

## 🌐 Acessar sua URL

Após o deploy:
1. Railway gera uma URL automática
2. Procure em **Settings** → **Domains**
3. Ou veja em **Deployments** → seu deployment ativo

URL será algo como: `https://seu-projeto-xxxx.railway.app`

---

## 🐛 Troubleshooting Railway

### Build falha com "npm: not found"
**Solução:**
- Adicione variável: `NIXPACKS_NODEJS_VERSION = 18`

### "Cannot find module"
**Solução:**
1. Regenere package-lock.json localmente
2. Faça push ao GitHub
3. Redeploy no Railway

### Port error
**Solução:**
- Railway atribui PORT dinamicamente
- Seu `server/index.js` já lê `process.env.PORT`
- Nenhuma mudança necessária

### Service keeps restarting
**Solução:**
1. Verifique logs para erros de runtime
2. Valide variáveis de ambiente
3. Tente redeploy

---

## 📋 Comandos Úteis

| Ação | Comando |
|------|---------|
| Ver logs | Clique em **Logs** no Railway |
| Redeploy | Clique em seu deployment → **Redeploy** |
| Parar serviço | **Settings** → **Delete** |
| Atualizar code | Push ao GitHub (auto-redeploy) |

---

## ✨ Auto-Deploy via GitHub

Railway já está configurado para auto-deploy!

Sempre que você fizer push:
```bash
git add .
git commit -m "sua mensagem"
git push origin main
```

Railway detecta a mudança e redeploy automaticamente 🚀

---

## 🔐 Variáveis de Ambiente Recomendadas

```
NODE_ENV=production
JWT_SECRET=sua_chave_segura_de_32_chars
PORT=8000
NIXPACKS_NODEJS_VERSION=18
```

---

## 💡 Dicas Railway

1. **Free tier:** Primeiros $5 grátis por mês
2. **Sempre ativo:** Diferente de Render (pode dormir)
3. **Logs detalhados:** Melhores que Render
4. **Auto-restart:** Reinicia se cair
5. **PostgreSQL:** Disponível e fácil de conectar

---

## 📞 Suporte

- Docs: [docs.railway.app](https://docs.railway.app)
- Discord: Railway tem comunidade ativa
- Logs: Sempre check os **Logs** primeiro

---

**Qual erro você está recebendo? Me manda que resolvo!** 🔧
