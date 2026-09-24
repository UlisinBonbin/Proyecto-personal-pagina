import React, { useState, useEffect } from 'react'
import Input from '../01-atoms/Input'
import Button from '../01-atoms/Button'
import './ProductForm.css'

export default function ProductForm({ product, onSubmit, onCancel, isLoading }) {
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    stock: '',
    imagenUrl: ''
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (product) {
      setFormData({
        nombre: product.nombre || '',
        precio: product.precio || '',
        stock: product.stock || '',
        imagenUrl: product.imagenUrl || ''
      })
    }
  }, [product])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    }
    
    if (!formData.precio || parseFloat(formData.precio) <= 0) {
      newErrors.precio = 'El precio debe ser mayor a 0'
    }
    
    if (!formData.stock || parseInt(formData.stock) < 0) {
      newErrors.stock = 'El stock debe ser un número positivo'
    }
    
    if (!formData.imagenUrl.trim()) {
      newErrors.imagenUrl = 'La URL de la imagen es requerida'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validate()) {
      const productData = {
        nombre: formData.nombre.trim(),
        precio: parseFloat(formData.precio),
        stock: parseInt(formData.stock),
        imagenUrl: formData.imagenUrl.trim()
      }
      
      onSubmit(productData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <Input
        label="Nombre del producto"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        placeholder="Ej: Peluche de Osito"
        error={errors.nombre}
      />

      <Input
        label="Precio"
        type="number"
        name="precio"
        value={formData.precio}
        onChange={handleChange}
        placeholder="Ej: 15000"
        error={errors.precio}
        step="0.01"
        min="0"
      />

      <Input
        label="Stock"
        type="number"
        name="stock"
        value={formData.stock}
        onChange={handleChange}
        placeholder="Ej: 10"
        error={errors.stock}
        min="0"
      />

      <Input
        label="URL de la imagen"
        name="imagenUrl"
        value={formData.imagenUrl}
        onChange={handleChange}
        placeholder="https://ejemplo.com/imagen.jpg"
        error={errors.imagenUrl}
      />

      <div className="product-form-actions">
        <Button 
          type="button" 
          variant="secondary" 
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancelar
        </Button>
        <Button 
          type="submit" 
          disabled={isLoading}
        >
          {isLoading ? 'Guardando...' : (product ? 'Actualizar' : 'Crear')}
        </Button>
      </div>
    </form>
  )
}
