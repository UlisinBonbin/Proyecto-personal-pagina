import React from 'react'
import MainLayout from '../../04-layouts/MainLayout'
import { motion } from 'framer-motion'
import './Catalog.css';
import PeluchesGrid from '../../03-organisms/PeluchesGrid'
import peluches from '../../../data/Peluches'
import { useSearchParams } from 'react-router-dom'


export default function Catalog() {
    const [searchParams] = useSearchParams()
    const category = searchParams.get('category')

    const formatCategory = (cat) =>
      cat
        .replace('_', ' ')
        .replace(/\b\w/g, l => l.toUpperCase())


    const filteredPeluches = category
    ? peluches.filter(p => p.category === category)
    : peluches
  
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
          <h1>{category ? `Peluches de ${formatCategory(category)}` : 'Todos nuestros peluches'}</h1>
            <PeluchesGrid peluches={filteredPeluches} />
        </div>
      </motion.section>
    </MainLayout>
  );
}
