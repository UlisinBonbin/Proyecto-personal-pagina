import React from 'react'
import { motion } from 'framer-motion'
import MainLayout from '../../04-layouts/MainLayout'
import './Contact.css'
import ContactCard from '../../02-molecules/ContactCard'

export default function Contact() {
  return (
    <MainLayout>
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <div className="contact-content">
          <h1>Contacto</h1>
           <p>
            Si tienes alguna pregunta, sugerencia o simplemente, 
            no dudes en ponerte en contacto con nosotros. Estamos aquí para
            ayudarte y nos encantaría saber opiniones sobre nuestros peluches y servicios.
          </p>   
        </div>
        <div className="contact-cards">
          <ContactCard/>
          </div>
      </motion.section>
    </MainLayout>
  );
}
