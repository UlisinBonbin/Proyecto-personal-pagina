import React from 'react'
import './Button.css'
export default function Button({ children, variant = 'primary', onClick, type = 'button', className = '', disabled = false, ...props }) {
  return (
    <button
        className={`btn btn-${variant} ${className}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
        {...props}
    >
        {children}
    </button>
  );
}
