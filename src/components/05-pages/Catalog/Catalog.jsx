import React from 'react'
import MainLayout from '../../04-layouts/MainLayout'
import { motion } from 'framer-motion'
import './Catalog.css';
import PeluchesGrid from '../../03-organisms/PeluchesGrid'
import peluches from '../../../data/Peluches'
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
          <h1>Nuestros peluchitos</h1>
            <PeluchesGrid peluches={peluches} />
        </div>
      </motion.section>
    </MainLayout>
  );
}
