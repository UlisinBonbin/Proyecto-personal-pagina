import React from 'react'
import MainLayout from '../../04-layouts/MainLayout'
import { motion } from 'framer-motion'
import './Cart.css';
export default function Cart() {
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
             <div className="title-cart">
                <h1>Tu carrito</h1>            
              </div>
        </div>
      </motion.section>
    </MainLayout>
  )
}
