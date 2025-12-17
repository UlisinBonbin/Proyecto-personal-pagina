import React from 'react'
import PelucheCard from '../02-molecules/PelucheCard'
import './PeluchesDestacados.css'

const peluches = [
    { id: 1, nombre: 'Ponmy', precio: '$12.990', imagen: 'https://m.media-amazon.com/images/I/51hleVmiOEL._AC_SL1000_.jpg' },
    { id: 2, nombre: 'Totoro', precio: '$18.990', imagen: 'https://www.kawaiibarcelona.com/wp-content/uploads/2018/09/peluchetotoropeque.png' },
    { id: 3, nombre: 'Ralsei', precio: '$15.990', imagen: 'https://m.media-amazon.com/images/I/51kQbkIQFjL._AC_SL1000_.jpg' },
    { id: 4, nombre: 'Luffy', precio: '$22.990', imagen: 'https://www.pro-bems.com/IMAGES/images_1/FIG160019472454/m/FIG160019472454_1.png' },
    { id: 5, nombre: 'Zoro', precio: '$19.990', imagen: 'https://images-cdn.ubuy.co.za/63abfb2b413e5f1e034336d3-one-piece-plush-doll-yurutto-one-piece.jpg' },
    { id: 6, nombre: 'Den Den Mushi Law', precio: '$14.990', imagen: 'https://meccha-japan.com/583307-large_default/peluche-den-den-mushi-trafalgar-law-one-piece.jpg' },
    { id: 7, nombre: 'Chopper', precio: '$16.990', imagen: 'https://www.mi-peluche.com/wp-content/uploads/sites/4/2021/10/peluche-mono-chopper-de-one-piece.png' },
    { id: 8, nombre: 'Winto Overwatch', precio: '$13.990', imagen: 'https://m.media-amazon.com/images/I/416gr5R0fdL._AC_UF894,1000_QL80_.jpg' },
    { id: 9, nombre: 'Mario Bros', precio: '$17.990', imagen: 'https://gcjuegos.cl/1068-large_default/peluche-mario-bros-plush-14.jpg' },
];

export default function PeluchesDestacados() {
  return (
    <div className="peluches-destacados">
      {peluches.map((p) => (
        <PelucheCard key={p.id} {...p} />
      ))}
    </div>
  )
}

//Props = información que le pasas a un componente para que sepa qué mostrar

//peluches → array de datos
//ap → recorre el array
//p → un peluche
//<PelucheCard /> → crea una card
//key={p.id} → solo para React
//{...p} → pasa TODAS las propiedades como props