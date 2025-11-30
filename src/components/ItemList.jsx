import React from 'react';
import '../styles/ItemList.css';

export default function ItemList({ items, onEdit, onDelete, loading }) {
  if (loading) {
    return <div className="loading">⏳ Carregando itens...</div>;
  }

  if (!items || items.length === 0) {
    return (
      <div className="empty-state">
        <p>📦 Nenhum item de estoque ainda</p>
        <p>Crie o primeiro item clicando em "Novo Item"</p>
      </div>
    );
  }

  return (
    <div className="item-list-container">
      <h2>📊 Itens de Estoque ({items.length})</h2>

      <div className="items-grid">
        {items.map((item) => {
          const isLow = item.quantity <= (item.min_quantity || 10);
          const statusIcon = isLow ? '🚨' : '✅';
          
          return (
          <div key={item.id} className={`item-card ${isLow ? 'alert-low-stock' : ''}`}>
            <div className="item-header">
              <h3>{statusIcon} {item.name}</h3>
              <span className="category-badge">{item.category}</span>
            </div>

            <div className="item-details">
              {isLow && (
                <div className="alert-banner">
                  ⚠️ <strong>Estoque Baixo!</strong> Mínimo: {item.min_quantity} {item.unit}
                </div>
              )}
              <div className="detail-row">
                <span className="label">Quantidade:</span>
                <span className={`quantity ${isLow ? 'low' : ''}`}>
                  {item.quantity} {item.unit}
                </span>
              </div>

              {item.supplier && (
                <div className="detail-row">
                  <span className="label">Fornecedor:</span>
                  <span>{item.supplier}</span>
                </div>
              )}

              {item.notes && (
                <div className="detail-row">
                  <span className="label">Observações:</span>
                  <span>{item.notes}</span>
                </div>
              )}

              <div className="detail-row date">
                <span className="label">Adicionado:</span>
                <span>{new Date(item.created_at).toLocaleDateString('pt-BR')}</span>
              </div>
            </div>

            <div className="item-actions">
              <button
                className="btn btn-edit"
                onClick={() => onEdit(item)}
                title="Editar"
              >
                ✏️ Editar
              </button>
              <button
                className="btn btn-delete"
                onClick={() => onDelete(item.id)}
                title="Deletar"
              >
                🗑️ Deletar
              </button>
            </div>
          </div>
        );
        })}
      </div>
    </div>
  );
}
