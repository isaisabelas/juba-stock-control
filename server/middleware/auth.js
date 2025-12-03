const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'seu-secret-key-change-in-production';

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    console.error('❌ Token não fornecido no header Authorization');
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    console.log('✅ Token validado. User ID:', req.userId);
    next();
  } catch (err) {
    console.error('❌ Erro ao validar token:', err.message);
    res.status(401).json({ error: 'Token inválido' });
  }
};
