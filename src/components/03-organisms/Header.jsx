import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../01-atoms/button/Button';


export default function Header() {
  return (
    <header style={headerStyles}>
      <div className="logo">
        <Link to="/" style={linkStyles}>Menu</Link>
      </div>

      <nav style={navStyles}>
        
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

// Estilos internos rápidos para la demostración
const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#3498db', // Nuevo color para distinguirlo
    color: 'white',
};

const linkStyles = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.5em',
    fontWeight: 'bold',
};

const navStyles = {
    display: 'flex',
    gap: '10px',
};

