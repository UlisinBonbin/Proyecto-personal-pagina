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

        <Link to="/catalog">
          <Button variant="secondary">Catálogo</Button>
        </Link>

        <Link to="/about">
          <Button variant="secondary">Nosotros</Button>
        </Link>

       <Link to="/contact">
          <Button variant="secondary">Contacto</Button>
        </Link>
      </nav>
    </header>
  );
}

