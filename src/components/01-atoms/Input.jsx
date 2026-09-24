import React from 'react'
import './Input.css'

export default function Input({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  error, 
  name,
  ...props 
}) {
  return (
    <label>
      {label}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? 'input-error' : ''}
        name={name}
        {...props}
      />
      {error && <span className="error">{error}</span>}
    </label>
  )
}
