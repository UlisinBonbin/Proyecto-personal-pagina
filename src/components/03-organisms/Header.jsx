import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../01-atoms/button/Button';
import './Header.css';


export default function Header() {
  return (
    <header className="header-container">

      <nav className="header-nav">
        <Button variant="secondary">
          <Link to="/">Inicio</Link>
        </Button>
        <Button variant="secondary">
          Productos
        </Button>

        <Button variant="secondary">
          <Link to="/about">Nosotros</Link>
        </Button>

        <Button variant="primary">
          Contacto
        </Button>
      </nav>
    </header>
  );
}

