import React, { useState, useEffect } from 'react';
import '../styles/Inventory.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';
import Modal from '../components/Modal';
import { api } from '../services/api';

export default function Inventory() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLowStock, setFilterLowStock] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
    loadItems();
  }, []);

  const loadItems = async () => {
    setLoading(true);
    try {
      const response = await api.get('/items');
      setItems(response.data || []);
    } catch (err) {
      console.error('Erro ao carregar itens:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddItem = async (formData) => {
    try {
      if (editingItem) {
        await api.put(`/items/${editingItem.id}`, formData);
        setItems(
          items.map((item) =>
            item.id === editingItem.id ? { ...item, ...formData } : item
          )
        );
        setEditingItem(null);
      } else {
        const response = await api.post('/items', formData);
        setItems([response.data, ...items]);
      }
      setShowForm(false);
    } catch (err) {
      console.error('Erro ao salvar item:', err);
    }
  };

  const handleDeleteItem = async (id) => {
    if (!window.confirm('Tem certeza que deseja deletar este item?')) {
      return;
    }

    try {
      await api.delete(`/items/${id}`);
      setItems(items.filter((item) => item.id !== id));
    } catch (err) {
      console.error('Erro ao deletar item:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = !filterLowStock || item.quantity <= (item.min_quantity || 10);
    
    return matchesSearch && matchesFilter;
  });

  const lowStockCount = items.filter((item) => item.quantity <= (item.min_quantity || 10)).length;

  return (
    <div className="inventory-container">
      <Header user={user} onLogout={handleLogout} />

      <main className="inventory-main">
        <div className="inventory-toolbar">
          <div className="search-box">
            <input
              type="text"
              placeholder="Buscar itens..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="toolbar-buttons">
            <button
              className={`btn ${filterLowStock ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilterLowStock(!filterLowStock)}
            >
              🚨 Estoque Baixo {lowStockCount > 0 && `(${lowStockCount})`}
            </button>
            <button
              className="btn btn-primary btn-add"
              onClick={() => {
                setEditingItem(null);
                setShowForm(true);
              }}
            >
              ➕ Novo Item
            </button>
          </div>
        </div>

        <ItemList
          items={filteredItems}
          loading={loading}
          onEdit={(item) => {
            setEditingItem(item);
            setShowForm(true);
          }}
          onDelete={handleDeleteItem}
        />
      </main>

      <Modal
        isOpen={showForm}
        title={editingItem ? '✏️ Editar Item' : '➕ Novo Item'}
        onClose={() => {
          setShowForm(false);
          setEditingItem(null);
        }}
      >
        <ItemForm
          initialData={editingItem}
          onSubmit={handleAddItem}
          onCancel={() => {
            setShowForm(false);
            setEditingItem(null);
          }}
        />
      </Modal>

      <Footer />
    </div>
  );
}
