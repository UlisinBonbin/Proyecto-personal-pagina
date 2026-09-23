import React from 'react';
import MainLayout from '../../04-layouts/MainLayout';
import { motion } from 'framer-motion';
import './Catalog.css';

const productos = [
    {
        nombre: 'Pikachu',
        precio: '$15.990',
        imagenUrl: 'https://cdnx.jumpseller.com/doki-doki-store/image/63379415/resize/700/700?1759188592'
    },
    {
        nombre: 'Sonic',
        precio: '$17.990',
        imagenUrl: 'https://ansaldo.cl/cdn/shop/files/28029.jpg?v=1750344316'
    },
    {
        nombre: 'Mario',
        precio: '$18.990',
        imagenUrl: 'https://media.falabella.com/falabellaCL/80720954_4/w=1500,h=1500,fit=cover'
    },
    {
        nombre: 'Totoro',
        precio: '$19.990',
        imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Hv3cTAC-qtlNaXUrTHDt9qb-5Vr40M_1w0oDuwPZErT0lgFCLXVN6iI&s=10'
    }
];

export default function Catalog() {
    return (
        <MainLayout>
            <motion.section
                className="catalog-hero"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >
                <div className="catalog-content">
                    <h1>Nuestros productos</h1>

                    <div className="products-grid">
                        {productos.map((producto, index) => (
                            <div className="product-card" key={index}>
                                <img
                                    src={producto.imagenUrl}
                                    alt={producto.nombre}
                                />
                                <h2>{producto.nombre}</h2>
                                <p>{producto.precio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </MainLayout>
    );
}