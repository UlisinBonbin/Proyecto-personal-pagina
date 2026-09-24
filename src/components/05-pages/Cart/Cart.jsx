import React, { useEffect, useState } from 'react'
import MainLayout from '../../04-layouts/MainLayout'
import { motion } from 'framer-motion'
import { getCart, cleanCart } from '../../../utils/cart'
import './Cart.css';
import Button from '../../01-atoms/Button';
export default function Cart() {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    setCartItems(getCart())
  }, [])

const handleClearCart = () => {
  cleanCart()
  setCartItems([])
}

  return (
    <MainLayout>
        <motion.section
        className="cart-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.4 }}
      >
        <div className="cart-content">
          <h1>Tu carrito</h1>

          {cartItems.length === 0 ? (
            <p>Tu carrito está vacío 🧸</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Cantidad: {item.quantity}</p>
                  <p>${item.price * item.quantity}</p>
                </div>
              </div>
            ))
          )}
           {cartItems.length > 0 && (
              <Button
                variant="secondary"
                onClick={handleClearCart}>
                Vaciar carrito
              </Button>
              )}
        </div>
      </motion.section>
    </MainLayout>
  )
}
