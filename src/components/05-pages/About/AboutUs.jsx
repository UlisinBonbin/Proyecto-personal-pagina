import React from 'react'
import MainLayout from '../../04-layouts/MainLayout'
import './AboutUs.css'
import { motion } from 'framer-motion'
import ositoPatriarcalImg from '../../../assets/images/others/osito_patriarcal.png'

export default function AboutUs() {
  return (
    <MainLayout>
      <motion.section
        className="about-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <div className="about-content">
          <h1>Sobre Nosotros</h1>

          <div className="about-image">
            <img
              src={ositoPatriarcalImg} alt="Oso Patriarcal"
            />
          </div>

          <p>
            En Peluchitos Bonbin, nuestra misión es traer alegría y ternura a través
            de nuestros peluches únicos y de alta calidad. Fundada por un grupo de
            entusiastas del anime y los videojuegos, nuestra tienda se dedica a
            ofrecer una amplia variedad de peluches que capturan la esencia de tus
            personajes favoritos.
          </p>

          <p>
            Valoramos la satisfacción del cliente y nos esforzamos por brindar un
            servicio excepcional. Cada peluche en nuestra colección ha sido
            cuidadosamente seleccionado para garantizar que cumpla con nuestros
            altos estándares de calidad y autenticidad.
          </p>

          <p>
            Gracias por elegir Peluchitos Bonbin como tu destino para encontrar esos
            peluches especiales que te acompañarán en tus aventuras diarias.
            ¡Esperamos que disfrutes explorando nuestra tienda tanto como nosotros
            disfrutamos creándola para ti!
          </p>
        </div>
      </motion.section>
    </MainLayout>
  )
}
