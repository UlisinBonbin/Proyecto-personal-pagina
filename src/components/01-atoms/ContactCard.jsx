import React from 'react'
import './ContactCard.css'

export default function ContactCard({icon, title, info}) {
  return (
    <div className="contact-card">
        <div className="contact-card-icon">{icon}</div>
        <h3 className="contact-card-title">{title}</h3>
        <p className="contact-card-info">{info}</p>
    </div>
  )
}
