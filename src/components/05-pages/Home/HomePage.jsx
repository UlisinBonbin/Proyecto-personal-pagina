import React from 'react'
import MainLayout from '../../04-layouts/MainLayout'
import './HomePage.css'
import PeluchesDestacados from '../../03-organisms/PeluchesDestacados'

export default function HomePage() {
  return (
    <MainLayout>
      <section className="home-hero">
        <div className="hero-content">
        <h1>Bienvenido a Peluchitos Bonbin</h1>
          <p>
            Peluchitos Bonbin es una tienda que acaba de surgir, vendemos los mejores
            peluches relacionados al mundo del anime, videojuegos y series.
          </p>

        <h2>Nuestros peluchitos más vendidos C:</h2>
          <PeluchesDestacados/>
        </div>
      </section>


    </MainLayout>
  )
}
