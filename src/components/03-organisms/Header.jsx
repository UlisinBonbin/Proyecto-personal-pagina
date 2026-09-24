import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../01-atoms/Button';
import './Header.css';
import logoImg from '../../assets/images//logos/logo_pagina.png';
import { MdShoppingCart } from 'react-icons/md';
import { useAuth } from "react-oidc-context";

export default function Header() {
  const auth = useAuth();
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

        <Link to="/control-panel">
          <Button variant="secondary">Panel de Control</Button>
        </Link>

        <Button
            variant="primary"
            onClick={() => auth.signinRedirect()}
        >
            Iniciar sesión
        </Button>
      
      <Link to="/cart" className="cart-icon">
        <MdShoppingCart size={28} /> 
        </Link>
      </nav>
    </header>
  );
}

