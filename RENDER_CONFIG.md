# Render Deployment Configuration

## Para Render.com:

### Web Service (Backend)
- **Build Command:** `cd server && npm install`
- **Start Command:** `node server/index.js`
- **Environment Variables:**
  ```
  PORT=5000
  NODE_ENV=production
  JWT_SECRET=sua_chave_secreta
  FRONTEND_URL=https://seu-frontend-url.onrender.com
  ```

### PostgreSQL Database (Opcional)
- PostgreSQL é oferecido gratuitamente no plano free
- Copie a CONNECTION STRING e adicione como `DATABASE_URL`

### Web Service (Frontend - Opcional)
- Se quiser separar frontend
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Environment Variables:**
  ```
  REACT_APP_API_URL=https://seu-backend.onrender.com
  ```

## Render Knob Settings:
- Memory: 512 MB (suficiente para ambos)
- Disk: 1 GB (padrão)
- Instances: 1

## Auto-Deploy:
- Conecte ao GitHub
- Cada push auto-redeploy
