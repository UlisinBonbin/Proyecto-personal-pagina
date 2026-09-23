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

