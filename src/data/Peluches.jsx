import ponmyImg from '../assets/images/peluches/ponmy.jpg'
import totoroImg from '../assets/images/peluches/totoro.png'
import ralseiImg from '../assets/images/peluches/ralsei.jpg'
import luffyImg from '../assets/images/peluches/luffy.png'
import zoroImg from '../assets/images/peluches/zoro.png'
import lawImg from '../assets/images/peluches/den-den-mushi-law.jpg'
import chopperImg from '../assets/images/peluches/mono-chopper.png'
import winstonImg from '../assets/images/peluches/winton.jpg'
import marioImg from '../assets/images/peluches/mario.jpg'
import luigiImg from '../assets/images/peluches/luigi.jpg'
import peachImg from '../assets/images/peluches/peach-felina.jpg'
import cloudImg from '../assets/images/peluches/cloud.jpg'
import sephirotImg from '../assets/images/peluches/sephirot.jpg'
import aerithImg from '../assets/images/peluches/aerith.jpg'
import tifaImg from '../assets/images/peluches/tifa.jpg'
import sonicImg from '../assets/images/peluches/sonic.jpg'
import tailsImg from '../assets/images/peluches/tails-drogado.png'
import shadowImg from '../assets/images/peluches/shadow.jpg'
import kingImg from '../assets/images/peluches/king.jpg'
import caineImg from '../assets/images/peluches/caine.jpg'
import jaxImg from '../assets/images/peluches/jax.jpg'
import whisImg from '../assets/images/peluches/whis.jpg'
import gokuImg from '../assets/images/peluches/goku.jpg'
import billsImg from '../assets/images/peluches/bills.jpg'
import winnieImg from '../assets/images/peluches/winnie.png'
import picoroImg from '../assets/images/peluches/picoro.jpg'
import pikachuImg from '../assets/images/peluches/pikachu.jpg'
import meowthImg from '../assets/images/peluches/meowth.png'

const peluches = [
  { id: 1, name: 'Ponmy', price: 12990, image: ponmyImg, category: 'internet' },
  { id: 2, name: 'Totoro', price: 18990, image: totoroImg, category: 'anime' },
  { id: 3, name: 'Ralsei', price: 15990, image: ralseiImg, category: 'videojuegos' },
  { id: 4, name: 'Luffy', price: 22990, image: luffyImg, category: 'anime' },
  { id: 5, name: 'Zoro', price: 19990, image: zoroImg, category: 'anime' },
  { id: 6, name: 'Den Den Mushi Law', price: 14990, image: lawImg, category: 'anime' },
  { id: 7, name: 'Chopper', price: 16990, image: chopperImg, category: 'anime' },
  { id: 8, name: 'Winton Overwat', price: 13990, image: winstonImg, category: 'videojuegos' },
  { id: 9, name: 'Mario', price: 17990, image: marioImg, category: 'videojuegos' },
  { id: 10, name: 'Luigi', price: 17990, image: luigiImg, category: 'videojuegos' },
  { id: 11, name: 'Peach Felina', price: 17990, image: peachImg, category: 'videojuegos' },
  { id: 12, name: 'Cloud Strife', price: 17990, image: cloudImg, category: 'videojuegos' },
  { id: 13, name: 'Sephirot', price: 17990, image: sephirotImg, category: 'videojuegos' },
  { id: 14, name: 'Aerith', price: 17990, image: aerithImg, category: 'videojuegos' },
  { id: 15, name: 'Tifa', price: 17990, image: tifaImg, category: 'videojuegos' },
  { id: 16, name: 'Sonic', price: 17990, image: sonicImg, category: 'videojuegos' },
  { id: 17, name: 'Tails drogado', price: 17990, image: tailsImg, category: 'videojuegos' },
  { id: 18, name: 'Shadow', price: 17990, image: shadowImg, category: 'videojuegos' },
  { id: 19, name: 'King', price: 17990, image: kingImg, category: 'internet' },
  { id: 20, name: 'Caine', price: 17990, image: caineImg, category: 'internet' },
  { id: 21, name: 'Jax', price: 17990, image: jaxImg, category: 'internet' },
  { id: 22, name: 'Whis', price: 17990, image: whisImg, category: 'anime' },
  { id: 23, name: 'Goku', price: 17990, image: gokuImg, category: 'anime' },
  { id: 24, name: 'Bills', price: 17990, image: billsImg, category: 'anime' },
  { id: 25, name: 'Pooh', price: 17990, image: winnieImg, category: 'peliculas_animadas' }
]
const peluchesSoon =[
  {id: 1, name: 'Picoro', price: 14000, image: picoroImg, category: 'anime', canBuy: false},
  {id: 2, name: 'Pikachu', price: 14000, image: pikachuImg, category: 'videojuegos', canBuy: false},
  {id: 3, name: 'Meowth', price: 15000, image: meowthImg, category: 'videojuegos', canBuy: false}
]

export default peluches
export { peluchesSoon }
