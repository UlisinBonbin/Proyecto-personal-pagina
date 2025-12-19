import React from 'react'
import ContactCardsGroup from '../02-molecules/ContactCardsGroup';
import { MdEmail, MdMail, MdPhone, MdFacebook  } from 'react-icons/md';

export default function ContactSection() {
    const contacts = [
        { icon: <MdEmail size={30} />, title: 'Email', info: 'peluchesBonbin@gmail.com' },
        { icon: <MdPhone size={30} />, title: 'Teléfono', info: '+56 9777 896 ' },
        {icon: <MdMail size={30} />, title: 'Dirección', info: 'Av. Siempre Viva 742, Springfield' },
        {icon: <MdFacebook size={30} />, title: 'Facebook', info: 'facebook.com/peluchesBonbin' },
        
        
  ];
    return (
        <section>
            <ContactCardsGroup contacts={contacts} />
        </section>
  )
}
