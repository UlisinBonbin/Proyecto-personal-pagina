import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../01-atoms/Button';
import './Header.css';
import logoImg from '../../assets/images//logos/logo_pagina.png';
import { MdShoppingCart } from 'react-icons/md';
import { useAuth } from "react-oidc-context";

const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;
const logoutUri = import.meta.env.VITE_COGNITO_LOGOUT_URI || window.location.origin;
const cognitoDomain = import.meta.env.VITE_COGNITO_DOMAIN;

export default function Header() {
  const auth = useAuth();

  const grupos = auth.user?.profile?.["cognito:groups"] || [];

  const isAdmin = Array.isArray(grupos)
      ? grupos.includes("ADMINISTRADOR")
      : grupos === "ADMINISTRADOR";

  const isOperator = Array.isArray(grupos)
      ? grupos.includes("OPERADOR")
      : grupos === "OPERADOR";

  const signOutRedirect = async () => {
    await auth.removeUser();

    if (!clientId || !cognitoDomain) {
      console.error(
        "Falta configurar el dominio o el App Client de Cognito."
      );
      return;
    }

    const domain = cognitoDomain.replace(/\/$/, "");

    const logoutUrl =
      `${domain}/logout` +
      `?client_id=${encodeURIComponent(clientId)}` +
      `&logout_uri=${encodeURIComponent(logoutUri)}`;

    window.location.href = logoutUrl;
  };

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

        {auth.isAuthenticated && isAdmin && (
          <Link to="/control-panel">
            <Button variant="secondary">Panel de Control</Button>
          </Link>
        )}

        {auth.isAuthenticated && isOperator && (
          <Link to="/operador-panel">
            <Button variant="secondary">Panel de Operador</Button>
          </Link>
        )}

        {auth.isAuthenticated ? (
          <Button
              variant="primary"
              onClick={signOutRedirect}
          >
              Cerrar sesión
          </Button>
        ) : (
          <Button
              variant="primary"
              onClick={() => auth.signinRedirect()}
          >
              Iniciar sesión
          </Button>
        )}

      <Link to="/cart" className="cart-icon">
        <MdShoppingCart size={28} />
        </Link>
      </nav>
    </header>
  );
}

