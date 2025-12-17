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
            <img src="https://www.pro-bems.com/IMAGES/images_1/FIG160019472454/m/FIG160019472454_1.png" alt="Peluche de Luffy" />
            <img src="https://images-cdn.ubuy.co.za/63abfb2b413e5f1e034336d3-one-piece-plush-doll-yurutto-one-piece.jpg" alt="Peluche de Zoro" />
            <img src="https://meccha-japan.com/583307-large_default/peluche-den-den-mushi-trafalgar-law-one-piece.jpg" alt="Peluche den den mushi law" />
            <img src="https://www.mi-peluche.com/wp-content/uploads/sites/4/2021/10/peluche-mono-chopper-de-one-piece.png" alt="Peluche de Chooper" />
          </div>
        </div>
      </section>


    </MainLayout>
  )
}
