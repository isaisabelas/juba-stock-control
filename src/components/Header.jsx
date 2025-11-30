import React from 'react';
import '../styles/Header.css';

export default function Header({ user, onLogout }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <h1 className="header-title"> JUBA </h1>
        
        </div>
        <div className="header-right">
          {user && (
            <>
              <span className="user-name">👤 {user.name}</span>
              <button className="btn-logout" onClick={onLogout}>
                Sair
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
