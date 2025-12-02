# 🍰 Juba Estoque - Sistema de Controle de Estoque

Sistema full-stack para gerenciamento de estoque de restaurante com alertas de produtos baixos.

## 🚀 Quick Start

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação

#### 1. Instalar dependências do Frontend
```bash
npm install
```

#### 2. Instalar dependências do Backend
```bash
cd server
npm install
cd ..
```

### Executar Localmente

#### Opção 1: Modo Desenvolvimento (Recomendado)
Executa frontend com hot reload e backend com nodemon:

```bash
npm run dev
```

Acessar:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

#### Opção 2: Modo Produção
Build React + Start Backend:

```bash
npm run build
npm start
```

Acessar: http://localhost:5000

## 📁 Estrutura do Projeto

```
juba-project/
├── src/                          # Frontend React
│   ├── components/               # Componentes reutilizáveis
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Modal.jsx
│   │   ├── ItemForm.jsx
│   │   ├── ItemList.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/                    # Páginas da aplicação
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Inventory.jsx
│   ├── services/                 # Serviços (API calls)
│   │   └── api.js
│   ├── styles/                   # CSS por componente
│   └── App.jsx                   # Router principal
│
├── server/                       # Backend Express
│   ├── routes/                   # Rotas da API
│   │   ├── auth.js              # Login/Register
│   │   └── items.js             # CRUD de itens
│   ├── middleware/               # Middlewares
│   │   └── auth.js              # JWT verification
│   ├── db/                       # Database
│   │   ├── database.js          # SQLite setup
│   │   └── juba.db              # Banco de dados
│   ├── index.js                 # Server principal
│   ├── package.json
│   └── .env                     # Variáveis de ambiente
│
├── public/                       # Arquivos estáticos
├── package.json
└── README.md
```

## 🔐 Autenticação

Sistema usa JWT (JSON Web Tokens):

1. **Registrar**: Crie conta com email/senha (mín. 6 caracteres)
2. **Login**: Recebe token JWT armazenado em localStorage
3. **Proteger Rotas**: Apenas usuários autenticados acessam /inventory
4. **Logout**: Remove token e dados do usuário

## 🚨 Sistema de Alertas

Cada produto tem uma **quantidade mínima** configurável:

- ✅ **Estoque OK**: Quantidade acima do mínimo
- 🚨 **Estoque Baixo**: Quantidade ≤ mínimo (exibe alerta no card)
- 🔍 **Filtro**: Clique em "🚨 Estoque Baixo" para ver apenas produtos críticos

## 📊 Features

- ✅ Autenticação JWT com email/senha
- ✅ CRUD completo de produtos
- ✅ Sistema de alertas de estoque baixo
- ✅ Busca em tempo real
- ✅ Interface responsiva
- ✅ Dados persistem em SQLite
- ✅ Multi-usuário (dados isolados por usuário)

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Modo desenvolvimento (frontend + backend) |
| `npm start` | Produção (build + servidor) |
| `npm run build` | Build React para produção |
| `npm run dev:frontend` | Apenas frontend em desenvolvimento |
| `npm run dev:server` | Apenas backend em desenvolvimento |

## 📝 Variáveis de Ambiente

### Frontend (`.env` na raiz)
```env
REACT_APP_API_URL=http://localhost:5000
```

### Backend (`server/.env`)
```env
PORT=5000
NODE_ENV=development
JWT_SECRET=seu_secret_aqui
```

## 🔗 API Endpoints

### Autenticação
- `POST /api/auth/register` - Registrar novo usuário
- `POST /api/auth/login` - Login

### Produtos
- `GET /api/items` - Listar itens do usuário
- `POST /api/items` - Criar novo item
- `PUT /api/items/:id` - Atualizar item
- `DELETE /api/items/:id` - Deletar item

## 🧪 Teste a Aplicação

1. Abra 2 terminais
2. Terminal 1: `npm run dev:frontend`
3. Terminal 2: `cd server && npm run dev`
4. Acesse http://localhost:3000
5. Registre e teste!

## 💾 Banco de Dados

SQLite automático em `server/db/juba.db`

**Tabelas:**
- `users`: email, password (bcrypt), name
- `items`: name, quantity, min_quantity, category, supplier, notes

## 🐛 Troubleshooting

### "Port already in use"
```bash
# Use porta diferente
PORT=3001 npm run dev:frontend
```

### "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install && cd server && npm install && cd ..
```

### "JWT error"
- Limpe localStorage: DevTools → Application → Clear
- Faça login novamente

## 📦 Tech Stack

**Frontend:**
- React 19.2.0
- React Router 6.14.1
- Axios 1.4.0

**Backend:**
- Express 4.18.2
- SQLite3 5.1.6
- bcryptjs 2.4.3
- JWT 9.0.0

---

**Desenvolvido para gestão de estoque eficiente** ❤️
