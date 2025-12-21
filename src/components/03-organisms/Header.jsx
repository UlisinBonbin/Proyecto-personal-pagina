import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../01-atoms/button/Button';
import './Header.css';
import logoImg from '../../assets/images//logos/logo_pagina.png';
import { MdShoppingCart } from 'react-icons/md';

export default function Header() {
  return (
    <header className="header-container">

      <div className="header-logo">
        <Link to="/">
          <img src={logoImg} alt="Peluches y Amor" />
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
      <Link to="/login">
          <Button variant="primary">Iniciar Sesión</Button>
        </Link>
      <Link to="/register">
          <Button variant="primary">Registrarse</Button>
        </Link>
      <Link to="/cart" className="cart-icon">
        <MdShoppingCart size={28} /> 
        </Link>
      </nav>
    </header>
  );
}

