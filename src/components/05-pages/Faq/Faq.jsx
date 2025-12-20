import React from 'react'
import MainLayout from '../../04-layouts/MainLayout'
import { motion } from 'framer-motion'
import './Faq.css'

export default function Faq() {
  return (
    <MainLayout>
      <motion.section
        className="faq-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.4 }}
      >
        <div className="faq-content">
            <div className="title-faq">
                <h1>Preguntas Frecuentes</h1>
            </div>
            <div className="separator">
            <h2>¿Cómo puedo realizar un pedido?</h2>
            <p>Para realizar un pedido, simplemente navega por nuestra tienda, selecciona los peluches que deseas y agrégalos a tu carrito. Luego, sigue el proceso de pago para completar tu compra.</p>

            <h2>¿Cuáles son las opciones de pago disponibles?</h2>
            <p>Aceptamos diversas formas de pago, incluyendo tarjetas de crédito, débito y PayPal. Todas las opciones de pago son seguras y confiables.</p>
            <h2>¿Cuánto tiempo tarda el envío?</h2>
            <p>El tiempo de envío varía según tu ubicación, pero generalmente toma entre 3 a 7 días hábiles dentro de Chile. Recibirás un número de seguimiento una vez que tu pedido haya sido enviado.</p>
            <h2>¿Puedo devolver o cambiar un producto?</h2>
            <p>Sí, aceptamos devoluciones y cambios dentro de los 30 días posteriores a la compra, siempre que el producto esté en su estado original. Por favor, consulta nuestra política de devoluciones para más detalles.</p>
            <h2>¿Ofrecen descuentos para compras al por mayor?</h2>
            <p>Sí, ofrecemos descuentos especiales para compras al por mayor. Por favor, contáctanos directamente para discutir tus necesidades y obtener una cotización personalizada.</p>
            </div>
        </div>

      </motion.section>
    </MainLayout>
  )
}
