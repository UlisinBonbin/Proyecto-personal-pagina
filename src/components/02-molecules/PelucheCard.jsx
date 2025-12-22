import React from 'react'
import './PelucheCard.css'
import { addToCart } from '../../utils/cart'
import Button from '../01-atoms/button/Button';

export default function PelucheCard({ id, image, name, price, canBuy= true }) {
  const handleAddToCart = () => {
    addToCart({ id, image, name, price })
  }

  return (
    <div className="peluche-card">
      <img src={image} alt={`Peluche de ${name}`} />
      <h3 className="peluche-nombre">{name}</h3>
      <span className="peluche-precio">${price}</span>
      {canBuy && (
      <Button onClick={handleAddToCart}>
        Agregar al carrito
      </Button>
)}
    </div>
  )
}
 <Button variant="secondary">Inicio</Button>