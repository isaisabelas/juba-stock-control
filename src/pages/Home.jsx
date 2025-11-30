import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-header-content">
          <h1>JUBA</h1>
          <p>Sistema de Controle de Estoque</p>
        </div>
      </header>

      <main className="home-main">
        <section className="hero">
            <div className="hero-buttons">
              <Link to="/login" className="btn btn-primary btn-lg">
                🔐 Fazer Login
              </Link>
              <Link to="/register" className="btn btn-secondary btn-lg">
                📝 Criar Conta
              </Link>
            </div>
          
        </section>

      </main>

      <footer className="home-footer">
        <p>&copy; Feito com carirnho por Isabela Silva - 2025</p>
      </footer>
    </div>
  );
}
