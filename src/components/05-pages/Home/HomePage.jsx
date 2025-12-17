import React from 'react'
import MainLayout from '../../04-layouts/MainLayout'
import './HomePage.css'

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

          <div className="peluches-destacados">
            <img src="https://m.media-amazon.com/images/I/51hleVmiOEL._AC_SL1000_.jpg" alt="Peluche de Ponmy" />
            <img src="https://www.kawaiibarcelona.com/wp-content/uploads/2018/09/peluchetotoropeque.png" alt="Peluche de Totoro" />
            <img src="https://m.media-amazon.com/images/I/51kQbkIQFjL._AC_SL1000_.jpg" alt="Peluche de Ralsei" />
          </div>
        </div>
      </section>


    </MainLayout>
  )
}
