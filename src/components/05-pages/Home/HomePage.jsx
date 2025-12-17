import React from 'react'
import { motion } from 'framer-motion'
import MainLayout from '../../04-layouts/MainLayout'
import './HomePage.css'
import PeluchesGrid from '../../03-organisms/PeluchesGrid'
import peluches from '../../../data/Peluches'

const destacados = peluches.slice(0, 9);

export default function HomePage() {
  return (
    <MainLayout>
      <motion.section
        className="home-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <div className="hero-content">
          <h1>Bienvenido a Peluchitos Bonbin</h1>
          <p>
            Peluchitos Bonbin es una tienda que acaba de surgir, vendemos los mejores
            peluches relacionados al mundo del anime, videojuegos y series.
          </p>

          <h2>Nuestros peluchitos más vendidos C:</h2>
           <PeluchesGrid peluches={destacados} />
        </div>
      </motion.section>
    </MainLayout>
  )
}
