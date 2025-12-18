import React from 'react'
import './CategoryCard.css'

export default function CategoryCard({ image, title, info }) {
  return (
    <div className="category-card">
      <div className="category-card-image">
        <img src={image} alt={title} />
      </div>

      <h3 className="category-card-title">{title}</h3>
      <p className="category-card-info">{info}</p>
    </div>
  )
}
