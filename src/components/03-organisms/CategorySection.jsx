import React from 'react'
import CategoryCardGroup from '../02-molecules/CategoryCardGroup'
import animeImg from '../../assets/images/category/anime_category.jpg'
import juegosImg from '../../assets/images/category/juegos_category.jpg'
import seriesInternetImg from '../../assets/images/category/series_internet_category.jpg'
import peliculasAnimadasImg from '../../assets/images/category/peliculas_animadas_category.png'

export default function CategorySection() {
    const categories = [
  {
    image: juegosImg,
    title: 'Peluches de videojuegos',
    info: 'Descubre peluches de varios videojuegos populares como Final Fantasy, Sonic y Mario Bros y más',
    buttonText: 'Ver Peluches de Videojuegos',
    buttonVariant: 'primary',
    path: '/catalog?category=videojuegos'
  },
  {
    image: animeImg,
    title: 'Peluches de anime',
    info: 'Descubre los peluches de varios animes populares como Naruto, One Piece, Totoro y más',
    buttonText: 'Ver Peluches de Anime',
    buttonVariant: 'primary',
    path: '/catalog?category=anime'
  },
  {
    image: seriesInternetImg,
    title: 'Peluches de series en internet',
    info: 'Descubre los peluches de series populares de internet como The Digital Circus',
    buttonText: 'Ver Peluches de series en internet',
    buttonVariant: 'primary',
    path: '/catalog?category=internet'
  },
  {
    image: peliculasAnimadasImg,
    title: 'Peluches de peliculas animadas',
    info: 'Descubre los peluches de peliculas animadas populares como Toy Story, Frozen y más',
    buttonText: 'Ver peluches de peliculas animadas',
    buttonVariant: 'primary',
    path: '/catalog?category=peliculas_animadas'
  }
  

];
    return (
        <section>
            <CategoryCardGroup categorys={categories} />
        </section>
        
  )
}
