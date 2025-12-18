import React from 'react'
import CategoryCardGroup from '../02-molecules/CategoryCardGroup'

export default function CategorySection() {
    const categories = [
  {
    image: "https://yukharyan.com/wp-content/uploads/2020/09/final-fantasy-top.jpg",
    title: 'Peluches Final Fantasy',
    info: 'Descubre los peluches de la saga Final Fantasy, juegos llenos de fantasía y épicas aventuras'
  },
  {
    image: "https://i.pinimg.com/236x/44/f1/fb/44f1fb64b3eb04eaa821fbd0421512dc.jpg",
    title: 'Peluches del Videojuego Sonic',
    info: 'Descubre los peluches del videojuego Sonic, el más conocido erizo azul del mundo gamer'
  },
  {
    image: "https://w7.pngwing.com/pngs/150/908/png-transparent-monkey-d-luffy-one-piece-roronoa-zoro-portgas-d-ace-animation-one-piece-manga-cartoon-one-piece.png",
    title: 'Peluches del anime One Piece',
    info: 'Descubre los peluches del anime más popular del mundo One Piece, donde ocurren épicas aventuras'
  },
  {
    image: "https://i.etsystatic.com/48087715/r/il/504d35/6357366333/il_570xN.6357366333_ekbp.jpg",
    title: 'Peluches de la serie The Digital Circus',
    info: 'Descubre los peluches de la reciente serie The Digital Circus, la cual tiene un misterioso trasfondo'
  }
];
    return (
        <section>
            <CategoryCardGroup categorys={categories} />
        </section>
        
  )
}
