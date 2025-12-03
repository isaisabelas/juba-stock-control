const express = require('express');
const { dbRun, dbGet, dbAll } = require('../db/database');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get all items for user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const items = await dbAll(
      'SELECT * FROM items WHERE user_id = ? ORDER BY created_at DESC',
      [req.userId]
    );
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create item
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { name, quantity, unit, category, supplier, notes, min_quantity } = req.body;
    
    console.log('📝 Criando novo item:', { name, quantity, unit, category, supplier, min_quantity, userId: req.userId });
    
    if (!name || quantity === undefined || quantity === null || quantity === '') {
      return res.status(400).json({ error: 'Nome e quantidade são obrigatórios' });
    }

    // Converter quantity e min_quantity para números
    const quantityNum = parseFloat(quantity);
    const minQuantityNum = min_quantity ? parseFloat(min_quantity) : 10;

    if (isNaN(quantityNum)) {
      return res.status(400).json({ error: 'Quantidade deve ser um número válido' });
    }

    const result = await dbRun(
      'INSERT INTO items (user_id, name, quantity, unit, category, supplier, notes, min_quantity) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [req.userId, name, quantityNum, unit || null, category || null, supplier || null, notes || null, minQuantityNum]
    );

    console.log('✅ Item criado com sucesso, ID:', result.lastID);
    
    // Buscar o item completo que foi criado
    const newItem = await dbGet(
      'SELECT * FROM items WHERE id = ?',
      [result.lastID]
    );
    
    res.json(newItem);
  } catch (err) {
    console.error('❌ Erro ao criar item:', err);
    res.status(500).json({ error: err.message, details: err.stack });
  }
});

// Update item
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { name, quantity, unit, category, supplier, notes, min_quantity } = req.body;

    await dbRun(
      'UPDATE items SET name = ?, quantity = ?, unit = ?, category = ?, supplier = ?, notes = ?, min_quantity = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ? AND user_id = ?',
      [name, quantity, unit, category, supplier, notes, min_quantity || 10, req.params.id, req.userId]
    );

    res.json({ message: 'Item atualizado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete item
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await dbRun('DELETE FROM items WHERE id = ? AND user_id = ?', [req.params.id, req.userId]);
    res.json({ message: 'Item deletado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
