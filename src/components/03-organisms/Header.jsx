import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../01-atoms/button/Button';
import logoImg from '../../assets/images/logos/logo_pagina.png'
import './Header.css';


export default function Header() {
  return (
    <header className="header-container">
      <div className="header-logo">
        <Link to="/">
          <img src={logoImg} alt="Logo de la tienda de peluches" />
        </Link>
      </div>
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

      <div /> {/* columna vacía para balancear */}
    </header>
  );
}

