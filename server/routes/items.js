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
    
    if (!name || quantity === undefined) {
      return res.status(400).json({ error: 'Nome e quantidade são obrigatórios' });
    }

    const result = await dbRun(
      'INSERT INTO items (user_id, name, quantity, unit, category, supplier, notes, min_quantity) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [req.userId, name, quantity, unit, category, supplier, notes || null, min_quantity || 10]
    );

    res.json({ id: result.lastID, ...req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
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
