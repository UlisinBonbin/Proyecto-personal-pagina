import React from 'react'
import ContactCard from '../01-atoms/ContactCard'
import './ContactCardsGroup.css'

export default function ContactCardsGroup({contacts}) {
  return (
    <div className="contact-cards-group">
      {contacts.map((c, idx) => (
        <ContactCard
          key={idx}
          icon={c.icon}
          title={c.title}
          info={c.info}
        />
      ))}
    </div>
  );
}
