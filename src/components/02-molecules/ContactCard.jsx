import React from 'react'
import './ContactCard.css'

export default function ContactCard() {
  return (
    <div className="contact-card">
      <img src="https://www.citypng.com/public/uploads/preview/pink-gmail-clipart-logo-icon-7017516951280829umvnsejgb.png" alt= "Icono de Gmail" />
      <div className="contact-info">
        <h3>Envianos un email</h3>
        <p>peluchitosBonbin@gmail.com</p>
      </div>

      <div className="contact-number">
        <p>+56 9 777 896</p>
        </div>  
    </div>
  )
}
