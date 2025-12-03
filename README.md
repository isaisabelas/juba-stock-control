# 🍰 Juba Estoque - Sistema de Controle de Estoque

O Juba Estoque é uma aplicação full-stack para gerenciamento de estoque de restaurante com alertas de produtos baixos. Ele foi baseado na necessidade da Julia, dona do Juba Café, que tem dificuldade em manter seu estoque organizado e saber o que está em falta. 

A ideia é ter uma plataforma simples e intuitiva, que porporciona ao usuário uma navegação e organzização de fácil acesso. 

O projeto foi desenvolvido para o Projeto de Extenção da Faculdade Descomplica, no curso de Análise e Desenvolvimento de Sistemas. 

## 📸 Screenshots

### Tela de Login
<img width="1909" height="860" alt="Captura de tela 2025-12-02 215346" src="https://github.com/user-attachments/assets/5bce899c-202b-459b-9f44-8e8c4d33ab10" />

### Tela de Registro
<img width="1909" height="853" alt="Captura de tela 2025-12-02 215401" src="https://github.com/user-attachments/assets/85242b3e-3c93-4ba0-be01-cc91e52e191d" />

### Página Principal - Dashboard
<img width="1919" height="859" alt="Captura de tela 2025-12-02 215434" src="https://github.com/user-attachments/assets/c8d3aa34-7c84-4745-9fa3-6e2d970bfb76" />


### Criando Novo Produto
<img width="742" height="782" alt="Captura de tela 2025-12-02 215521" src="https://github.com/user-attachments/assets/89166712-0bab-4553-b81e-7017d9ad64f5" />


### Lista de Produtos
<img width="1910" height="864" alt="Captura de tela 2025-12-02 220955" src="https://github.com/user-attachments/assets/c97a9dcf-5e1f-47ab-9add-32e7fdebe328" />

---

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
Executa frontend com hot reload e backend com nodemon **em paralelo**:

```bash
npm run dev
```

Acessar:
- Frontend: http://localhost:3000 (React)
- Backend API: http://localhost:5000 (Node.js)

#### Opção 2: Modo Produção
Compila React e inicia servidor com build estático:

```bash
npm start
```

Acessar: http://localhost:5000

#### Opção 3: Iniciar Separadamente
Se precisar de mais controle, inicie em terminais diferentes:

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

- ✅ **Autenticação JWT** com email/senha (mínimo 6 caracteres)
- ✅ **CRUD completo** de produtos (Create, Read, Update, Delete)
- ✅ **Sistema de Alertas** - Produtos com estoque baixo (🚨)
- ✅ **Filtro inteligente** - Visualize apenas produtos críticos
- ✅ **Busca em tempo real** - Filtre por nome ou categoria
- ✅ **Interface responsiva** - Mobile-friendly
- ✅ **Dados persistem** - SQLite local
- ✅ **Multi-usuário** - Dados isolados por usuário
- ✅ **Histórico de criação** - Data de adição em cada produto
- ✅ **Campos customizáveis** - Nome, quantidade, unidade, categoria, fornecedor, notas

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
JWT_SECRET=secret_aqui
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


## 💾 Banco de Dados

SQLite automático em `server/db/juba.db`

**Tabelas:**

### Users
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL (bcryptjs hash),
  name TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

### Items
```sql
CREATE TABLE items (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL (FK → users.id),
  name TEXT NOT NULL,
  quantity REAL NOT NULL,
  min_quantity REAL DEFAULT 10,
  unit TEXT (kg, g, L, ml, unidade),
  category TEXT,
  supplier TEXT,
  notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

**Isolamento por Usuário:** Cada usuário vê apenas seus próprios itens (WHERE user_id = ?)

**Alertas:** Produtos com `quantity ≤ min_quantity` aparecem com 🚨 e filtro especial

## 🐛 Troubleshooting
Baseado em erros que encontrei durante o desenvolvimento. 

### "Port already in use"
```bash
# Verifique processos Node em execução
# Se necessário, use porta diferente
PORT=3001 npm run dev:frontend
PORT=5001 npm run dev:server
```

### "Cannot find module"
```bash
# Reinstale dependências
rm -rf node_modules package-lock.json
npm install && cd server && npm install && cd ..
```

### "JWT error"
- Limpe localStorage: DevTools → Application → Clear
- Faça login novamente

### "Invalid Date" no card do item
- Reinicie o servidor para criar novo banco de dados com schema correto
- Certifique-se de que o banco de dados foi deletado antes de iniciar

### "Network Error" ao criar item
- Verifique se ambos (frontend e backend) estão rodando
- Frontend em http://localhost:3000
- Backend em http://localhost:5000

## 📚 Documentação Adicional

- **DATABASE_FLOWCHART.md** - Diagrama completo da estrutura do banco de dados
- **QUICKSTART.md** - Guia rápido de instalação e execução

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
