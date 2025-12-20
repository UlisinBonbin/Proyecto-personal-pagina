import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';

export default function Footer() {
  return (
    <footer id="pie">
      <div className="footer-content">
        <div className="footer-section contacto">
          <h3>Contacto</h3>
          <p>+56 9 777 896</p>
          <p>peluchitos-bonbin.cl</p>
          <p>Santiago, Chile</p>
        </div>
        <div className="footer-section enlaces">
          <h3>Enlaces útiles</h3>
          <Link to="/">Inicio</Link>
          <Link to="/contact">Contáctanos</Link>
          <Link to="/faq">Preguntas frecuentes</Link>
        </div>
        <div className="footer-section redes">
          <h3>Síguenos</h3>
          <p>Instagram: @peluchitos_bonbin</p>
          <p>Facebook: Peluchitos Bonbin</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Peluchitos Bonbin. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
