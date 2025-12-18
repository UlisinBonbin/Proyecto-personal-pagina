import React from 'react'
import './CategoryCardGroup.css'
import CategoryCard from '../01-atoms/CategoryCard'

export default function CategoryCardGroup({ categorys }) {
  return (
    <div className="category-cards-group">
      {categorys.map((c, idx) => (
        <CategoryCard
          key={idx}
          image={c.image}
          title={c.title}
          info={c.info}
          buttonText={c.buttonText}
          buttonVariant={c.buttonVariant}
          path={c.path}
        />
      ))}
    </div>
  )
}
