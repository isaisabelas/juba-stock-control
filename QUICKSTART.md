# Setup Rápido - Juba Estoque

## 1️⃣ Instalar Dependências

```bash
# Frontend + Backend dependencies
npm install && cd server && npm install && cd ..
```

## 2️⃣ Executar Localmente

### 🔧 Modo Desenvolvimento (Recomendado)
Inicia **Frontend (React)** e **Backend (Node)** simultaneamente:

```bash
npm run dev
```

✅ Abrirá automaticamente:
- **Frontend**: http://localhost:3000 (React com hot-reload)
- **Backend API**: http://localhost:5000 (Express + SQLite)

### 🚀 Modo Produção
Compila React e serve tudo via backend:

```bash
# Começa do início: compila React e inicia servidor
npm start
```

Acessa: http://localhost:5000

### 🔄 Iniciar Separadamente (Se Necessário)

**Terminal 1 - Frontend:**
```bash
npm run dev:frontend
```

**Terminal 2 - Backend:**
```bash
cd server && npm run dev
# ou simplesmente:
node index.js
```

## 3️⃣ Testar a Aplicação

1. Clique em **"Criar Conta"**
2. Registre com qualquer email/senha (mín. 6 caracteres)
3. Faça login
4. Adicione produtos com **"➕ Novo Item"**
5. Configure **"Quantidade Mínima"** para cada produto
6. Teste os alertas 🚨

## 🗂️ Arquivos Importantes

- `package.json` - Scripts e dependências frontend
- `server/package.json` - Scripts e dependências backend
- `.env` - Variáveis de ambiente (frontend)
- `server/.env` - Variáveis de ambiente (backend)
- `README.md` - Documentação completa

## 📱 Tela Inicial

```
┌─────────────────────────────────┐
│  🍰 Juba - Controle de Estoque  │
├─────────────────────────────────┤
│  • Criar Conta                  │
│  • Login                        │
│  • Features                     │
└─────────────────────────────────┘
```

## 🔑 Exemplo de Credenciais de Teste

```
Email: demo@example.com
Senha: 123456
```

## 🆘 Problemas Comuns

**"Port already in use"**
```bash
# Use porta diferente
PORT=3001 npm run dev:frontend
PORT=5001 npm run dev:server
```

**"Cannot find module"**
```bash
# Reinstale
rm -rf node_modules package-lock.json
npm install && cd server && npm install && cd ..
```

---

**Pronto para usar! 🚀**
