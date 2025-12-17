import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import HomePage from './components/05-pages/Home/HomePage'
import AboutPage from './components/05-pages/About/AboutUs'
import Catalog from './components/05-pages/Catalog/Catalog'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
