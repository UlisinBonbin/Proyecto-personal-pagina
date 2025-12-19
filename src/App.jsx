import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import HomePage from './components/05-pages/Home/HomePage'
import AboutPage from './components/05-pages/About/AboutUs'
import Catalog from './components/05-pages/Catalog/Catalog'
import Contact from './components/05-pages/Contact/Contact'
import Login from './components/05-pages/Login/Login'
import ScrollToTop from './components/ScrollToTop'


function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          </Routes>
        </AnimatePresence>
    </>
  )
}

export default App
