import React from 'react'
import { motion } from 'framer-motion'
import MainLayout from '../../04-layouts/MainLayout'
import './HomePage.css'
import PeluchesGrid from '../../03-organisms/PeluchesGrid'
import peluches, {peluchesSoon} from '../../../data/Peluches'
import CategorySection from '../../03-organisms/CategorySection'


const destacados = peluches.slice(0, 9);
const proximamente = peluchesSoon.slice(0,3);

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
            peluches relacionados al mundo del anime, videojuegos, series y más.
            ¡Encuentra el peluche perfecto para ti o para regalar a alguien especial!
          </p>

          <h2>Nuestros peluchitos más vendidos C:</h2>
           <PeluchesGrid peluches={destacados} />
        </div>

        <div className="category-peluches">
          <h2>Explora nuestras categorías</h2>
          <CategorySection />
        </div>

        <div className="peluches-proximamente">
          <h2>Nuestros proximos peluches que llegarán</h2>
          <PeluchesGrid peluches = {proximamente} />
        </div>
      </motion.section>
    </MainLayout>
  )
}
