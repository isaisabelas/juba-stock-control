# 🎯 TESTE LOCAL - Juba

## ▶️ Iniciar a Aplicação

Em uma **única janela PowerShell**, execute:

```powershell
npm run dev
```

Isto vai iniciar:
- ✅ Frontend (React) na porta 3000
- ✅ Backend (Express) na porta 5000

Aguarde até ver as mensagens:
```
webpack compiled
[...] Server running on http://localhost:5000
```

## 🧪 Testar a API

### 1️⃣ Abra outra janela PowerShell e registre um usuário:

```powershell
$body = @{
    email = "teste@example.com"
    password = "123456"
    name = "João Teste"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/auth/register" `
  -Method POST `
  -ContentType "application/json" `
  -Body $body
```

Resposta esperada:
```json
{
  "message": "Usuário registrado com sucesso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {"id": 1, "email": "teste@example.com", "name": "João Teste"}
}
```

### 2️⃣ Faça login:

```powershell
$body = @{
    email = "teste@example.com"
    password = "123456"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "http://localhost:5000/api/auth/login" `
  -Method POST `
  -ContentType "application/json" `
  -Body $body

$response
$token = $response.token
```

### 3️⃣ Crie um item de estoque (use o token):

```powershell
$headers = @{
    "Authorization" = "Bearer $token"
}

$body = @{
    name = "Café Arábica"
    quantity = 25
    unit = "kg"
    category = "Café"
    supplier = "Cafeicultores Brasil"
    notes = "Premium quality"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/items" `
  -Method POST `
  -ContentType "application/json" `
  -Headers $headers `
  -Body $body
```

### 4️⃣ Liste todos os itens:

```powershell
$headers = @{
    "Authorization" = "Bearer $token"
}

Invoke-RestMethod -Uri "http://localhost:5000/api/items" `
  -Method GET `
  -Headers $headers
```

### 5️⃣ Acesse o frontend:

Abra o navegador em: http://localhost:3000

## ✅ Se tudo funcionar:

- ✅ Registrou e fez login com sucesso
- ✅ Criou um item de estoque
- ✅ Listou os itens
- ✅ Frontend carregou

## 🔧 Troubleshooting

**Erro: "Cannot find module"**
→ Execute novamente: `npm install` e `cd server && npm install`

**Porta 5000 em uso**
→ Altere em `server/.env`: `PORT=5001`

**CORS error no frontend**
→ Verificar se backend está rodando em `http://localhost:5000`

## 🚀 Próximo Passo

Agora você pode:
1. Criar componentes React para interface bonita
2. Integrar com o backend usando axios
3. Fazer deploy em Railway, Render ou Vercel

Boa sorte! 🎉
