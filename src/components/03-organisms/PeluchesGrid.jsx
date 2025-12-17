import React from 'react'
import PelucheCard from '../02-molecules/PelucheCard'
import './PeluchesGrid.css'


export default function PeluchesGrid({peluches}) {
  return (
    <div className="peluches-grid">
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