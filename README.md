# Juba - Sistema de Controle de Estoque

App web para controle de estoque de café/restaurante com frontend React, backend Express e banco de dados SQLite.

## 🚀 Funcionalidades

- ✅ Autenticação de usuários com JWT
- ✅ Controle de inventário (CRUD)
- ✅ Multi-usuário com dados isolados
- ✅ Interface responsiva
- ✅ API RESTful

## 📋 Requisitos

- Node.js 14+
- npm ou yarn

## 📁 Estrutura do Projeto

\`\`\`
juba-project/
├── public/              # Arquivos públicos
├── src/                 # React frontend
│   ├── components/      # Componentes React
│   ├── pages/           # Páginas
│   ├── services/        # Serviços/APIs
│   └── App.jsx
├── server/              # Express backend
│   ├── routes/          # Rotas da API
│   ├── middleware/      # Middleware
│   ├── db/              # Database
│   └── index.js
└── package.json

## 🔗 API Endpoints

### Auth
- `POST /api/auth/register` - Registrar novo usuário
- `POST /api/auth/login` - Login

### Items
- `GET /api/items` - Listar itens
- `POST /api/items` - Criar item
- `PUT /api/items/:id` - Atualizar item
- `DELETE /api/items/:id` - Deletar item

## 📝 Licença
MIT
