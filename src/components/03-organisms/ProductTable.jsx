import React from 'react'
import Button from '../01-atoms/Button'
import './ProductTable.css'

export default function ProductTable({ products, onEdit, onDelete, isLoading }) {
  if (isLoading) {
    return <div className="product-table-loading">Cargando productos...</div>
  }

  if (!products || products.length === 0) {
    return <div className="product-table-empty">No hay productos disponibles</div>
  }

  return (
    <div className="product-table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="product-image-cell">
                <img 
                  src={product.imagenUrl} 
                  alt={product.nombre}
                  className="product-thumbnail"
                />
              </td>
              <td className="product-name-cell">{product.nombre}</td>
              <td className="product-price-cell">
                ${Number(product.precio).toLocaleString('es-CL')}
              </td>
              <td className="product-stock-cell">{product.stock}</td>
              <td className="product-actions-cell">
                <Button 
                  variant="secondary" 
                  onClick={() => onEdit(product)}
                  className="action-button edit-button"
                >
                  Editar
                </Button>
                <Button 
                  variant="danger" 
                  onClick={() => onDelete(product)}
                  className="action-button delete-button"
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
