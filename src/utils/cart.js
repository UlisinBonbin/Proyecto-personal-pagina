// Obtener carrito
export const getCart = () => {
  const cart = localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : []
}

// Guardar carrito
export const saveCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

// Agregar producto
export const addToCart = (product) => {
  const cart = getCart()

  const existingProduct = cart.find(item => item.id === product.id)

  if (existingProduct) {
    existingProduct.quantity += 1
  } else {
    cart.push({
      ...product,
      quantity: 1
    })
  }

  saveCart(cart)
}

export const cleanCart =()=>{
  localStorage.removeItem('cart')
}
