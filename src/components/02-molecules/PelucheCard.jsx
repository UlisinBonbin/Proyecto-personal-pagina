import React from 'react'
import './PelucheCard.css'

export default function PelucheCard({ imagen, nombre, precio }) {
  return (
    <div className="peluche-card">
      <img src={imagen} alt={`Peluche de ${nombre}`} />
      <span className="peluche-precio">{precio}</span>
    </div>
  );
}
