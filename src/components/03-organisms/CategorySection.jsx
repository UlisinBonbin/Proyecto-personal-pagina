import React from 'react'
import CategoryCardGroup from '../02-molecules/CategoryCardGroup'

export default function CategorySection() {
    const categories = [
  {
    image: "https://d1lss44hh2trtw.cloudfront.net/assets/article/2018/06/12/Super-Smash-Bros-Ultimate-Full-Roster_1200x500.jpg",
    title: 'Peluches de videojuegos',
    info: 'Descubre peluches de varios videojuegos populares como Final Fantasy, Sonic y Mario Bros y más',
    buttonText: 'Ver Peluches de Videojuegos',
    buttonVariant: 'primary',
    path: '/catalog?category=videojuegos'
  },
  {
    image: "https://i.pinimg.com/originals/06/05/30/060530efcf3f3cb74277e86496384909.jpg",
    title: 'Peluches de anime',
    info: 'Descubre los peluches de varios animes populares como Naruto, One Piece, Totoro y más',
    buttonText: 'Ver Peluches de Anime',
    buttonVariant: 'primary',
    path: '/catalog?category=anime'
  },
  {
    image: "https://i.etsystatic.com/48087715/r/il/504d35/6357366333/il_570xN.6357366333_ekbp.jpg",
    title: 'Peluches de series en internet',
    info: 'Descubre los peluches de series populares de internet como The Digital Circus',
    buttonText: 'Ver Peluches de series en internet',
    buttonVariant: 'primary',
    path: '/catalog?category=internet'
  }
];
    return (
        <section>
            <CategoryCardGroup categorys={categories} />
        </section>
        
  )
}
