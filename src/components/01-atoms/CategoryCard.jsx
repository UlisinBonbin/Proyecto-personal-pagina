import React from 'react'
import './CategoryCard.css'
import Button from './Button';
import { useNavigate } from 'react-router-dom'

export default function CategoryCard({ image, title, info, buttonText,
  buttonVariant, path}) {
     const navigate = useNavigate()
  return (
    <div className="category-card">
      <div className="category-card-image">
        <img src={image} alt={title} />
      </div>

      <h3 className="category-card-title">{title}</h3>
      <p className="category-card-info">{info}</p>
       <Button
        variant={buttonVariant}
        onClick={() => navigate(path)}
      >
        {buttonText}
      </Button>
    </div>
  )
}
