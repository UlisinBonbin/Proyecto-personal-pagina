import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../01-atoms/button/Button';
import './Header.css';


export default function Header() {
  return (
    <header className="header-container">

      <nav className="header-nav">
        <Link to="/">
          <Button variant="secondary">Inicio</Button>
        </Link>

        <Button variant="secondary">
          Productos
        </Button>

        <Link to="/about">
          <Button variant="secondary">Nosotros</Button>
        </Link>

        <Button variant="primary">
          Contacto
        </Button>
      </nav>
    </header>
  );
}

